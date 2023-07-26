"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TopBrackets from "@/components/TopBrackets";
import BottomDecoration from "@/components/BottomDecoration";

export default function Payment() {
  const params = useSearchParams();
  const amount = Number(params.get("amount"));
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
        <p className="text-xl text-center font-bold text-black mt-20">
          Amount to pay: {amount * 100}
        </p>
        <div className="mt-12 py-14 grid md:grid-cols-2 md:grid-rows-2 w-fit mx-auto gap-y-8 gap-x-20 md:gap-y-28 relative">
          <img
            src="/dv.png"
            className="absolute h-full w-full top-0 left-0 max-md:hidden"
            alt=""
          />
          <button
            style={{
              backgroundImage: "url('/bca.png')",
              width: 204,
              height: 61,
            }}
            className="active:scale-95 z-[2]"
            onClick={() => {
              router.push(`/sender?method=bca&amount=${amount}`);
            }}
          />
          <button
            style={{
              backgroundImage: "url('/eth.png')",
              width: 204,
              height: 61,
            }}
            className="active:scale-95 z-[2]"
            onClick={() => {
              router.push(`/sender?method=eth&amount=${amount}`);
            }}
          />
          <button
            style={{
              backgroundImage: "url('/paypal.png')",
              width: 204,
              height: 61,
            }}
            className="active:scale-95 z-[2]"
            onClick={() => {
              router.push(`/sender?method=paypal&amount=${amount}`);
            }}
          />
          <button
            style={{
              backgroundImage: "url('/bnb.png')",
              width: 204,
              height: 61,
            }}
            className="active:scale-95 z-[2]"
            onClick={() => {
              router.push(`/sender?method=bnb&amount=${amount}`);
            }}
          />
        </div>
      </div>
      <TopBrackets color="black" />
      <BottomDecoration />
    </div>
  );
}
