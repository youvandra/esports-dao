"use client";

import BottomDecoration from "@/components/BottomDecoration";
import TopDecoration from "@/components/TopDecoration";
import { motion } from "framer-motion";

export default function Objective() {
  return (
    <div
      style={{
        backgroundImage: "url('/objective.png')",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
      className="px-5 md:px-12 -mx-5 md:-mx-12 py-64 md:bg-cover relative"
    >
      <div className="grid lg:grid-cols-2">
        <div></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-bold text-5xl md:text-6xl tracking-tight">
            <span className="block font-light text-xl">
              About E-Sports DAO{" "}
            </span>
            Our <br />
            Objective
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-xl pl-8 md:ml-32 text-lg md:text-xl font-light relative"
          >
            <span>
              The main goal of the EsportsDAO Project is to create an inclusive
              and sustainable ecosystem that empowers esports participants and
              fans. It plans to achieve this by building a secure and
              transparent platform for esports transactions, enabling the
              tokenization of in-game assets and collectibles for trading and
              monetization, promoting fan engagement through gamification and
              reward systems, and driving innovation in the esports industry
              through blockchain technology and smart contracts.
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7 414"
              fill="none"
              className="absolute top-0 left-0 h-full"
            >
              <path
                d="M0.833333 3.5C0.833333 4.97276 2.02724 6.16667 3.5 6.16667C4.97276 6.16667 6.16667 4.97276 6.16667 3.5C6.16667 2.02724 4.97276 0.833333 3.5 0.833333C2.02724 0.833333 0.833333 2.02724 0.833333 3.5ZM0.833333 411C0.833333 412.473 2.02724 413.667 3.5 413.667C4.97276 413.667 6.16667 412.473 6.16667 411C6.16667 409.527 4.97276 408.333 3.5 408.333C2.02724 408.333 0.833333 409.527 0.833333 411ZM3 3.5V5.98476H4V3.5H3ZM3 10.9543V15.9238H4V10.9543H3ZM3 20.8933V25.8628H4V20.8933H3ZM3 30.8323V35.8018H4V30.8323H3ZM3 40.7713V45.7409H4V40.7713H3ZM3 50.7104V55.6799H4V50.7104H3ZM3 60.6494V65.6189H4V60.6494H3ZM3 70.5884V75.5579H4V70.5884H3ZM3 80.5274V85.497H4V80.5274H3ZM3 90.4665V95.436H4V90.4665H3ZM3 100.405V105.375H4V100.405H3ZM3 110.345V115.314H4V110.345H3ZM3 120.284V125.253H4V120.284H3ZM3 130.223V135.192H4V130.223H3ZM3 140.162V145.131H4V140.162H3ZM3 150.101V155.07H4V150.101H3ZM3 160.04V165.009H4V160.04H3ZM3 169.979V174.948H4V169.979H3ZM3 179.918V184.887H4V179.918H3ZM3 189.857V194.826H4V189.857H3ZM3 199.796V204.765H4V199.796H3ZM3 209.735V214.704H4V209.735H3ZM3 219.674V224.643H4V219.674H3ZM3 229.613V234.582H4V229.613H3ZM3 239.552V244.521H4V239.552H3ZM3 249.491V254.46H4V249.491H3ZM3 259.43V264.399H4V259.43H3ZM3 269.369V274.338H4V269.369H3ZM3 279.308V284.277H4V279.308H3ZM3 289.247V294.216H4V289.247H3ZM3 299.186V304.156H4V299.186H3ZM3 309.125V314.095H4V309.125H3ZM3 319.064V324.034H4V319.064H3ZM3 329.003V333.973H4V329.003H3ZM3 338.942V343.912H4V338.942H3ZM3 348.881V353.851H4V348.881H3ZM3 358.82V363.79H4V358.82H3ZM3 368.759V373.729H4V368.759H3ZM3 378.698V383.668H4V378.698H3ZM3 388.637V393.607H4V388.637H3ZM3 398.576V403.546H4V398.576H3ZM3 408.515V411H4V408.515H3Z"
                fill="white"
              />
            </svg>
          </motion.p>
        </motion.div>
      </div>
      <BottomDecoration />
      <TopDecoration />
    </div>
  );
}
