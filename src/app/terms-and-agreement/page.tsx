"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Terms() {
  return (
    <div className="relative mx-auto max-w-[1440px]">
      <h1 className="font-bold text-5xl md:text-6xl">Terms and Agreement</h1>
      <Image
        src={"/t.png"}
        width={632}
        height={385}
        className="absolute top-0 right-0 max-[1535px]:hidden"
        alt=""
      />
      <motion.ul
        layout
        initial={"hidden"}
        whileInView={"show"}
        variants={container}
        className="pl-8 border-l border-dashed mt-12  text-xl font-light list-disc max-w-xl"
      >
        <motion.li variants={child}>
          The Investor acknowledges that investing in cryptocurrencies involves
          risks, including market volatility, regulatory changes, security
          vulnerabilities, and operational risks.
        </motion.li>
        <motion.li variants={child}>
          The Investor agrees to conduct their own due diligence and research
          before making any investment decisions and acknowledges that the
          Company is not providing financial or investment advice.
        </motion.li>
        <motion.li variants={child}>
          The Investor acknowledges that the Company does not guarantee any
          returns or profits from the investment, and the value of
          cryptocurrencies may fluctuate significantly.
        </motion.li>
        <motion.li variants={child}>Organizing charity events</motion.li>
      </motion.ul>
      <motion.ul
        layout
        initial={"hidden"}
        whileInView={"show"}
        variants={container}
        className="pl-8 border-l border-dashed mt-8 text-xl font-light list-disc max-w-xl sm:ml-32 lg:ml-72 xl:ml-[500px]"
      >
        <motion.li variants={child}>
          The Investor represents that the funds being invested are derived from
          lawful sources and that the Investor is not involved in any illegal
          activities, including money laundering or terrorist financing.
        </motion.li>
        <motion.li variants={child}>
          The Investor acknowledges that they are solely responsible for
          complying with any applicable laws, regulations, or reporting
          requirements related to cryptocurrency investments in their
          jurisdiction
        </motion.li>
      </motion.ul>
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const child = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
