"use client";

import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Polygon() {
  return (
    <div className="bg-[#DCDCDC] relative pt-28 -mx-5 md:-mx-12 px-5 md:px-12 pb-64">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Image
          src={"/polygon.webp"}
          width={96}
          height={96}
          alt="polygon"
          className="mx-auto"
        />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-bold text-5xl md:text-6xl text-center text-black mt-6"
      >
        Powered by <br />
        Polygon chain
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-xl text-black text-center mt-6 max-w-4xl mx-auto"
      >
        Polygon PoS is a solution that achieves unprecedented transaction speed
        and cost savings by utilizing side-chains for transaction processing.
        POS ensures asset security using the robust Plasma bridging framework
        and a decentralized network of Proof-of-Stake (PoS) validators.
      </motion.p>
      <BottomDecoration color="black" />
      <TopBrackets color="black" />
    </div>
  );
}
