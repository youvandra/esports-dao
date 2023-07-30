"use client";

import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <div
      style={{
        backgroundImage: "url('/problem.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
      className="-mx-5 md:-mx-12  "
    >
      <div className="relative px-5 md:px-12 pt-64 md:pb-64">
        <div className="flex flex-col md:grid grid-cols-2 gap-x-10 pb-8 max-w-[1440px] mx-auto ">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-5xl md:text-6xl tracking-tight"
            >
              <span className="block font-light text-xl">About Problem</span>
              E-Sports <br />
              Ecosystem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-sm text-xl font-light"
            >
              The Esports Ecosystem Project aims to revolutionize the esports
              industry by integrating blockchain technology, tokenization, and
              innovative solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-sm text-xl font-light lg:ml-64"
            >
              Through these technologies, we aim to address challenges faced by
              players, teams, organizations, and fans, while promoting growth,
              transparency, and engagement within the esports community.
            </motion.p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 6"
              fill="none"
              className="mx-auto mt-8 max-w-[350px] "
            >
              <path
                d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM344.333 3.00003C344.333 4.47279 345.527 5.6667 347 5.6667C348.473 5.6667 349.667 4.47279 349.667 3.00003C349.667 1.52727 348.473 0.333363 347 0.333363C345.527 0.333363 344.333 1.52727 344.333 3.00003ZM3 3.5L5.52941 3.5L5.52941 2.5L3 2.5L3 3.5ZM10.5882 3.5L15.6471 3.5L15.6471 2.5L10.5882 2.5L10.5882 3.5ZM20.7059 3.5L25.7647 3.5L25.7647 2.5L20.7059 2.5L20.7059 3.5ZM30.8235 3.5L35.8824 3.5L35.8824 2.5L30.8235 2.5L30.8235 3.5ZM40.9412 3.5L46 3.5L46 2.5L40.9412 2.5L40.9412 3.5ZM51.0588 3.5L56.1176 3.5L56.1176 2.5L51.0588 2.5L51.0588 3.5ZM61.1765 3.50001L66.2353 3.50001L66.2353 2.50001L61.1765 2.50001L61.1765 3.50001ZM71.2941 3.50001L76.3529 3.50001L76.3529 2.50001L71.2941 2.50001L71.2941 3.50001ZM81.4118 3.50001L86.4706 3.50001L86.4706 2.50001L81.4118 2.50001L81.4118 3.50001ZM91.5294 3.50001L96.5882 3.50001L96.5882 2.50001L91.5294 2.50001L91.5294 3.50001ZM101.647 3.50001L106.706 3.50001L106.706 2.50001L101.647 2.50001L101.647 3.50001ZM111.765 3.50001L116.824 3.50001L116.824 2.50001L111.765 2.50001L111.765 3.50001ZM121.882 3.50001L126.941 3.50001L126.941 2.50001L121.882 2.50001L121.882 3.50001ZM132 3.50001L137.059 3.50001L137.059 2.50001L132 2.50001L132 3.50001ZM142.118 3.50001L147.176 3.50001L147.176 2.50001L142.118 2.50001L142.118 3.50001ZM152.235 3.50001L157.294 3.50001L157.294 2.50001L152.235 2.50001L152.235 3.50001ZM162.353 3.50001L167.412 3.50001L167.412 2.50001L162.353 2.50001L162.353 3.50001ZM172.471 3.50001L177.529 3.50002L177.529 2.50002L172.471 2.50001L172.471 3.50001ZM182.588 3.50002L187.647 3.50002L187.647 2.50002L182.588 2.50002L182.588 3.50002ZM192.706 3.50002L197.765 3.50002L197.765 2.50002L192.706 2.50002L192.706 3.50002ZM202.823 3.50002L207.882 3.50002L207.882 2.50002L202.823 2.50002L202.823 3.50002ZM212.941 3.50002L218 3.50002L218 2.50002L212.941 2.50002L212.941 3.50002ZM223.059 3.50002L228.118 3.50002L228.118 2.50002L223.059 2.50002L223.059 3.50002ZM233.176 3.50002L238.235 3.50002L238.235 2.50002L233.176 2.50002L233.176 3.50002ZM243.294 3.50002L248.353 3.50002L248.353 2.50002L243.294 2.50002L243.294 3.50002ZM253.412 3.50002L258.471 3.50002L258.471 2.50002L253.412 2.50002L253.412 3.50002ZM263.529 3.50002L268.588 3.50002L268.588 2.50002L263.529 2.50002L263.529 3.50002ZM273.647 3.50002L278.706 3.50002L278.706 2.50002L273.647 2.50002L273.647 3.50002ZM283.765 3.50002L288.824 3.50002L288.824 2.50002L283.765 2.50002L283.765 3.50002ZM293.882 3.50003L298.941 3.50003L298.941 2.50003L293.882 2.50003L293.882 3.50003ZM304 3.50003L309.059 3.50003L309.059 2.50003L304 2.50003L304 3.50003ZM314.118 3.50003L319.177 3.50003L319.177 2.50003L314.118 2.50003L314.118 3.50003ZM324.235 3.50003L329.294 3.50003L329.294 2.50003L324.235 2.50003L324.235 3.50003ZM334.353 3.50003L339.412 3.50003L339.412 2.50003L334.353 2.50003L334.353 3.50003ZM344.471 3.50003L347 3.50003L347 2.50003L344.471 2.50003L344.471 3.50003Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="overflow-hidden ">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/3NZHW-7vC80?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            />
          </div>
        </div>
        <div
          className="absolute w-full h-full z-[-1] top-0 left-0"
          style={{
            background:
              "linear-gradient(180deg, #000 16.20%, rgba(74, 74, 74, 0.00) 92.28%)",
          }}
        />
        <TopBrackets />
        <BottomDecoration />
      </div>
    </div>
  );
}
