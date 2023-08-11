"use client";
import { NFT_CONTRACT_ADDRESS } from "@/const";
import {
  useContract,
  Web3Button,
  useAddress,
  useClaimToken,
  useTokenBalance,
  useWallet,
} from "@thirdweb-dev/react";
import { useForm } from "react-hook-form";

interface Inputs {
  amount: number;
}

const fileTypes = ["JPG", "PNG"];

export default function Mint() {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<Inputs>();
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);

  const { mutateAsync: claimToken } = useClaimToken(contract);
  const address = useAddress();

  const {
    data: balance,
    isLoading,
    error,
  } = useTokenBalance(contract, address);

  return (
    <div className="mt-16">
      <h2 className="mx-auto font-bold text-4xl md:text-5xl w-fit">
        Claim Our Token
      </h2>
      <div className="container mx-auto max-w-4xl flex flex-col gap-4 mt-8">
        <div>
          <label htmlFor="amount" className="text-[#ededef] text-xl">
            Amount
          </label>
          <input
            id="amount"
            required
            placeholder="My NFT"
            type="number"
            {...register("amount", { valueAsNumber: true })}
            className={`border-0 ring-1 ring-inset w-full text-[#ededef] ${
              errors.amount
                ? "ring-red-600 focus:ring-red-600"
                : "ring-[#ededef] focus:ring-[#ededef]"
            } focus:ring-2 focus:ring-inset  px-3 py-5  block   placeholder:text-[#606060] text-xl font-light bg-transparent`}
          />
          {balance && (
            <p className="mt-2 text-[#ededef]">
              {" "}
              You currently have {balance.displayValue} tokens
            </p>
          )}
        </div>

        <Web3Button
          className="col-span-2 text-xl rounded-none bg-[#ededef]"
          contractAddress={NFT_CONTRACT_ADDRESS}
          action={() =>
            claimToken({
              amount: watch("amount"),
              to: address ?? "",
            })
          }
        >
          Mint NFT
        </Web3Button>
      </div>
    </div>
  );
}
