"use client";
import { NFT_CONTRACT_ADDRESS } from "@/const";
import { useActiveChain } from "@/context/activeChain";
import {
  useContract,
  Web3Button,
  useAddress,
  useClaimToken,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Mumbai } from "@thirdweb-dev/chains";
interface Inputs {
  amount: number;
}
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

  const { setChain } = useActiveChain();

  useEffect(() => {
    setChain(Mumbai);
  }, []);
  return (
    <div className="mt-16">
      <h2 className="mx-auto font-bold text-4xl md:text-5xl w-fit">
        Claim Our Testnet Token
      </h2>
      <div className="container mx-auto max-w-4xl flex flex-col gap-4 mt-8">
        <div>
          <label htmlFor="amount" className="text-[#ededef] text-xl">
            Amount
          </label>
          <input
            id="amount"
            required
            placeholder="Token amount"
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
              You currently have {balance.displayValue} EDAO
            </p>
          )}
          <p className="mt-2 text-[#ededef]">*Use Mumbai faucet to claim 0.5 MATIC/Day</p>
          <p className="mt-2 text-[#ededef]">*0.5 MATIC = 50 EDAO</p>
          <p className="mt-2 text-[#ededef]">*Max EDAO = 1000/Wallet</p>
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
          Claim Now
        </Web3Button>

        <p className="mt-2 text-[#ededef]">Import EDAO Token to your wallet</p>
        <p className="mt-2 text-blue-500">Token Address : <span className="text-[#ededef]">0xe64B0aA100e6Ef0fF23FeAD9d1c3b0c766d6A2cc</span></p>
        <p className="mt-2 text-blue-500">Token Symbol  : <span className="text-[#ededef]">EDAO</span></p>
        <p className="mt-2 text-blue-500">Token Decimal : <span className="text-[#ededef]">18</span></p>
      </div>
    </div>
  );
}
