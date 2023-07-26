"use client";

import BottomDecoration from "@/components/BottomDecoration";
import Chip from "@/components/Chip";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Distribution() {
  const rows = DISTRIBUTION.map(
    ({ allocation, amount, feature, min, percentage, price }, i) => (
      <tr key={i} className="odd:bg-[#9F9D9D] even:bg-[#6E6E6E]">
        <td className="p-2 md:p-5 text-center">{feature}</td>
        <td className="p-2 md:p-5 text-center">{percentage}</td>
        <td className="p-2 md:p-5 text-center">{amount}</td>
        <td className="p-2 md:p-5 text-center">{price}</td>
        <td className="p-2 md:p-5 text-center">{allocation}</td>
        <td className="p-2 md:p-5 text-center">{min}</td>
      </tr>
    )
  );
  return (
    <div className=" pb-28 -mx-5 md:-mx-12 px-5 relative md:px-12 bg-[#DCDCDC]">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-bold text-5xl md:text-6xl pt-16 text-center text-black"
        >
          Token Distibution
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
        <div className="flex max-[1300px]:block items-center gap-16 mt-20 justify-between">
          <div className="max-sm:overflow-x-scroll">
            <table className=" min-[1440px]:text-xl font-bold text-black mx-auto ">
              <thead>
                <tr className="mb-1 border border-[#6E6E6E] ">
                  <th className="p-2 md:p-5 text-start">Features</th>
                  <th className="p-2 md:p-5 text-start">Percentage</th>
                  <th className="p-2 md:p-5 text-start">Amount Token</th>
                  <th className="p-2 md:p-5 text-start">Price</th>
                  <th className="p-2 md:p-5 text-start">Allocation</th>
                  <th className="p-2 md:p-5 text-start">Minimum Amount</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
          <Image
            src={"/chart2.png"}
            alt="chart 2"
            width={348}
            height={348}
            className="max-[1300px]:mt-16 mx-auto"
          />
        </div>
        <div className="mt-16 md:mt-32 flex max-md:flex-col justify-center">
          <motion.ul
            layout
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col gap-y-5 items-center"
          >
            {LEFT.map((props, i) => (
              <motion.div key={i} variants={item}>
                <Chip {...props} />
              </motion.div>
            ))}
          </motion.ul>
          <Image
            src={"/gap1.png"}
            alt="divider"
            width={6}
            height={274}
            className="h-full mx-16 max-md:hidden"
          />
          <motion.ul
            layout
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col gap-y-5 items-center max-md:mt-5"
          >
            {RIGHT.map((props, i) => (
              <motion.div key={i} variants={item}>
                <Chip {...props} />
              </motion.div>
            ))}
          </motion.ul>
        </div>
      </div>
      <BottomDecoration color="black" />
    </div>
  );
}

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const DISTRIBUTION = [
  {
    feature: "Private Sale",
    percentage: "5%",
    amount: "50.000.000",
    price: "$0.0066",
    allocation: "$330.000",
    min: "$300",
  },
  {
    feature: "Pre - Sale",
    percentage: "10%",
    amount: "100.000.000",
    price: "$0.010",
    allocation: "$1.000.000",
    min: "$100",
  },
  {
    feature: "Launchpad",
    percentage: "5%",
    amount: "50.000.000",
    price: "$0.0013",
    allocation: "$650.000",
    min: "50$",
  },
  {
    feature: "",
    percentage: "",
    amount: "",
    price: "TOTAL",
    allocation: "$1.980.000",
    min: "",
  },
  {
    feature: "Liquidity Pool",
    percentage: "5%",
    amount: "50.000.000",
    price: "$0.020",
    allocation: "",
    min: "",
  },
];
const LEFT = [
  { text: "Ecosystem", color: "#5F008B", percentage: "25%" },
  { text: "Staking", color: "#8C52FF", percentage: "10%" },
  { text: "Liquidity", color: "#2C2BAC", percentage: "5%" },
  { text: "Team and Advisor", color: "#AFAFB8", percentage: "15%" },
];

const RIGHT = [
  { text: "Seeds", color: "#FFBD59", percentage: "5%" },
  { text: "Pre-Sale", color: "#0080B3", percentage: "10%" },
  { text: "Launchpad", color: "#00C2CB", percentage: "5%" },
  { text: "Treasury", color: "#7E91E9", percentage: "25%" },
];
