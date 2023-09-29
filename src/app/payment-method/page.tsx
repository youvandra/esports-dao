"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TopBrackets from "@/components/TopBrackets";
import BottomDecoration from "@/components/BottomDecoration";
import {
  useAddress,
  useClaimToken,
  useContract,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { POLYGON_CONTRACT_ADDRESS } from "@/const";
import { useForm } from "react-hook-form";
import { useActiveChain } from "@/context/activeChain";
import { Mumbai } from "@thirdweb-dev/chains";
import { useEffect } from "react";
import Link from "next/link";

export default function Payment() {
  const params = useSearchParams();
  const amount = Number(params.get("amount"));
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<{ amount: number }>();

  const { setChain } = useActiveChain();

  const { contract } = useContract(POLYGON_CONTRACT_ADDRESS);

  const { mutateAsync: claimToken } = useClaimToken(contract);
  const address = useAddress();

  const {
    data: balance,
    isLoading,
    error,
  } = useTokenBalance(contract, address);

  useEffect(() => {
    setChain(Mumbai);
  }, []);

  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage: "url('/payment.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
      className=" pb-56 min-h-screen -mx-5 md:-mx-12 px-5 relative md:px-12"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-5xl md:text-6xl pt-16 text-center text-black"
        >
          Payment Method
        </motion.h2>
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="4"
          viewBox="0 0 125 4"
          fill="none"
          className="mx-auto mt-4"
        >
          <path
            d="M125 0H0V1.5H29L39 3.5H87.5L96.5 1.5H125V0Z"
            fill="#000000"
          />
        </motion.svg>
        {balance && (
          <p className="text-xl text-center font-bold text-black mt-20">
            Your token balance: {balance?.displayValue}
          </p>
        )}

        <div className="container mx-auto max-w-4xl flex flex-col gap-4 mt-8">
          <div>
            <label htmlFor="amount" className="text-black text-xl">
              Amount
            </label>
            <div className="relative">
              <span className="absolute text-black text-xl top-5 right-3 font-semibold">
                EDAO
              </span>
              <input
                id="amount"
                required
                placeholder="Token amount"
                type="number"
                defaultValue={30_000}
                {...register("amount", {
                  valueAsNumber: true,
                  min: {
                    value: 30_000,
                    message: `Amount must be atleast 30,000!`,
                  },
                })}
                className={`border-0 ring-1 ring-inset w-full text-black ${
                  errors.amount
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-black focus:ring-black"
                } focus:ring-2 focus:ring-inset  px-3 py-5  block   placeholder:text-[#606060] text-xl font-light bg-transparent`}
              />
            </div>
            {balance && (
              <p className="mt-2 text-black">
                You currently have {balance.displayValue} tokens
              </p>
            )}
          </div>

          <Web3Button
            className="col-span-2 text-xl rounded-none bg-black text-[#ededef]"
            contractAddress={POLYGON_CONTRACT_ADDRESS}
            action={() =>
              claimToken({
                amount: watch("amount"),
                to: address ?? "",
              })
            }
          >
            Claim Now
          </Web3Button>
        </div>

        <div className="mt-12 py-14 grid md:grid-cols-2 md:grid-rows-2 w-fit mx-auto gap-y-8 gap-x-20 md:gap-y-28 relative">
          <Link
            href={`/sender?method=eth&amount=${amount}`}
            style={{
              backgroundImage: "url('/eth.png')",
              width: 204,
              height: 61,
            }}
            className="active:scale-95 z-[2]"
          >
            <span className="sr-only">ethereum</span>
          </Link>
          <Link
            style={{
              backgroundImage: "url('/bnb.png')",
              width: 204,
              height: 61,
            }}
            className="active:scale-95 z-[2]"
            href={`/sender?method=bnb&amount=${amount}`}
          >
            <span className="sr-only">bnb</span>
          </Link>
        </div>
      </div>
      <TopBrackets color="black" />
      <BottomDecoration />
    </div>
  );
}
