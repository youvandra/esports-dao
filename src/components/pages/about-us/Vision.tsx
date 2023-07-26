"use client";
import { motion } from "framer-motion";

import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import TopDecoration from "@/components/TopDecoration";

export default function Vision() {
  return (
    <>
      <div className="pt-28 pb-9 -mx-5 md:-mx-12 px-5 md:px-12 bg-[#DCDCDC] relative text-black">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-bold text-5xl md:text-6xl text-black pt-16 text-center relative"
        >
          <TopDecoration color="black" />
          Our Vision
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
          <path d="M125 0H0V1.5H29L39 3.5H87.5L96.5 1.5H125V0Z" fill="black" />
        </motion.svg>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
          className="text-center block font-light text-xl mt-2"
        >
          E-sports DAO
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-xl font-light mt-8 max-w-xl mx-auto"
        >
          Our vision for the future is to create a thriving and sustainable
          esports ecosystem that empowers players, rewards fan participation,
          and drives innovation. We envision a future where esports is
          accessible to all, where players have opportunities for professional
          growth, and where fans can actively engage and contribute to the
          community. Through continuous development, collaboration, and
          technological advancements, we strive to shape the future of esports.
        </motion.p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="350"
          height="6"
          viewBox="0 0 350 6"
          fill="none"
          className="mx-auto mt-8"
        >
          <path
            d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM344.333 3.00003C344.333 4.47279 345.527 5.6667 347 5.6667C348.473 5.6667 349.667 4.47279 349.667 3.00003C349.667 1.52727 348.473 0.333363 347 0.333363C345.527 0.333363 344.333 1.52727 344.333 3.00003ZM3 3.5L5.52941 3.5L5.52941 2.5L3 2.5L3 3.5ZM10.5882 3.5L15.6471 3.5L15.6471 2.5L10.5882 2.5L10.5882 3.5ZM20.7059 3.5L25.7647 3.5L25.7647 2.5L20.7059 2.5L20.7059 3.5ZM30.8235 3.5L35.8824 3.5L35.8824 2.5L30.8235 2.5L30.8235 3.5ZM40.9412 3.5L46 3.5L46 2.5L40.9412 2.5L40.9412 3.5ZM51.0588 3.5L56.1176 3.5L56.1176 2.5L51.0588 2.5L51.0588 3.5ZM61.1765 3.50001L66.2353 3.50001L66.2353 2.50001L61.1765 2.50001L61.1765 3.50001ZM71.2941 3.50001L76.3529 3.50001L76.3529 2.50001L71.2941 2.50001L71.2941 3.50001ZM81.4118 3.50001L86.4706 3.50001L86.4706 2.50001L81.4118 2.50001L81.4118 3.50001ZM91.5294 3.50001L96.5882 3.50001L96.5882 2.50001L91.5294 2.50001L91.5294 3.50001ZM101.647 3.50001L106.706 3.50001L106.706 2.50001L101.647 2.50001L101.647 3.50001ZM111.765 3.50001L116.824 3.50001L116.824 2.50001L111.765 2.50001L111.765 3.50001ZM121.882 3.50001L126.941 3.50001L126.941 2.50001L121.882 2.50001L121.882 3.50001ZM132 3.50001L137.059 3.50001L137.059 2.50001L132 2.50001L132 3.50001ZM142.118 3.50001L147.176 3.50001L147.176 2.50001L142.118 2.50001L142.118 3.50001ZM152.235 3.50001L157.294 3.50001L157.294 2.50001L152.235 2.50001L152.235 3.50001ZM162.353 3.50001L167.412 3.50001L167.412 2.50001L162.353 2.50001L162.353 3.50001ZM172.471 3.50001L177.529 3.50002L177.529 2.50002L172.471 2.50001L172.471 3.50001ZM182.588 3.50002L187.647 3.50002L187.647 2.50002L182.588 2.50002L182.588 3.50002ZM192.706 3.50002L197.765 3.50002L197.765 2.50002L192.706 2.50002L192.706 3.50002ZM202.823 3.50002L207.882 3.50002L207.882 2.50002L202.823 2.50002L202.823 3.50002ZM212.941 3.50002L218 3.50002L218 2.50002L212.941 2.50002L212.941 3.50002ZM223.059 3.50002L228.118 3.50002L228.118 2.50002L223.059 2.50002L223.059 3.50002ZM233.176 3.50002L238.235 3.50002L238.235 2.50002L233.176 2.50002L233.176 3.50002ZM243.294 3.50002L248.353 3.50002L248.353 2.50002L243.294 2.50002L243.294 3.50002ZM253.412 3.50002L258.471 3.50002L258.471 2.50002L253.412 2.50002L253.412 3.50002ZM263.529 3.50002L268.588 3.50002L268.588 2.50002L263.529 2.50002L263.529 3.50002ZM273.647 3.50002L278.706 3.50002L278.706 2.50002L273.647 2.50002L273.647 3.50002ZM283.765 3.50002L288.824 3.50002L288.824 2.50002L283.765 2.50002L283.765 3.50002ZM293.882 3.50003L298.941 3.50003L298.941 2.50003L293.882 2.50003L293.882 3.50003ZM304 3.50003L309.059 3.50003L309.059 2.50003L304 2.50003L304 3.50003ZM314.118 3.50003L319.177 3.50003L319.177 2.50003L314.118 2.50003L314.118 3.50003ZM324.235 3.50003L329.294 3.50003L329.294 2.50003L324.235 2.50003L324.235 3.50003ZM334.353 3.50003L339.412 3.50003L339.412 2.50003L334.353 2.50003L334.353 3.50003ZM344.471 3.50003L347 3.50003L347 2.50003L344.471 2.50003L344.471 3.50003Z"
            fill="black"
          />
        </svg>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-5xl md:text-6xl mt-32"
        >
          Our <br /> Project
        </motion.h3>

        <motion.ul
          layout
          initial={"hidden"}
          whileInView={"show"}
          variants={container}
          className="pl-8 border-l border-dashed border-black mt-12  text-xl font-light list-disc max-w-xl"
        >
          <motion.li variants={child}>
            Organize monthly tournaments and Yearly League
          </motion.li>
          <motion.li variants={child}>
            Form an international esports team
          </motion.li>
          <motion.li variants={child}>
            Host esports conferences and meetups
          </motion.li>
          <motion.li variants={child}>Organizing charity events</motion.li>
        </motion.ul>
        <motion.ul
          layout
          initial={"hidden"}
          whileInView={"show"}
          variants={container}
          className="pl-8 border-l border-black border-dashed mt-8 text-xl font-light list-disc max-w-xl lg:ml-32 xl:ml-56"
        >
          <motion.li variants={child}>
            Host a wide variety of events: uch as player meet and greet,
            autograph sessions, discussion panels, cosplay contests
          </motion.li>
          <motion.li variants={child}>
            Bringing investors and fundraisers together: support the growth of
            small esports teams or organizations
          </motion.li>
          <motion.li variants={child}>
            Supporting the esports ecosystem: Through financial support,
            resources and assistance in various forms
          </motion.li>
        </motion.ul>
        <div className="flex  mt-32 items-center gap-x-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494 7"
            fill="none"
          >
            <path
              d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM487.833 3.5C487.833 4.97276 489.027 6.16667 490.5 6.16667C491.973 6.16667 493.167 4.97276 493.167 3.5C493.167 2.02724 491.973 0.833333 490.5 0.833333C489.027 0.833333 487.833 2.02724 487.833 3.5ZM3 4H5.48724V3H3V4ZM10.4617 4H15.4362V3H10.4617V4ZM20.4107 4H25.3852V3H20.4107V4ZM30.3597 4H35.3342V3H30.3597V4ZM40.3087 4H45.2832V3H40.3087V4ZM50.2577 4H55.2321V3H50.2577V4ZM60.2066 4H65.1811V3H60.2066V4ZM70.1556 4H75.1301V3H70.1556V4ZM80.1046 4H85.0791V3H80.1046V4ZM90.0536 4H95.0281V3H90.0536V4ZM100.003 4H104.977V3H100.003V4ZM109.952 4H114.926V3H109.952V4ZM119.9 4H124.875V3H119.9V4ZM129.849 4H134.824V3H129.849V4ZM139.798 4H144.773V3H139.798V4ZM149.747 4H154.722V3H149.747V4ZM159.696 4H164.671V3H159.696V4ZM169.645 4H174.62V3H169.645V4ZM179.594 4H184.569V3H179.594V4ZM189.543 4H194.518V3H189.543V4ZM199.492 4H204.467V3H199.492V4ZM209.441 4H214.416V3H209.441V4ZM219.39 4H224.365V3H219.39V4ZM229.339 4H234.314V3H229.339V4ZM239.288 4H244.263V3H239.288V4ZM249.237 4H254.212V3H249.237V4ZM259.186 4H264.161V3H259.186V4ZM269.135 4H274.11V3H269.135V4ZM279.084 4H284.059V3H279.084V4ZM289.033 4H294.008V3H289.033V4ZM298.982 4H303.957V3H298.982V4ZM308.931 4H313.906V3H308.931V4ZM318.88 4H323.854V3H318.88V4ZM328.829 4H333.803V3H328.829V4ZM338.778 4H343.752V3H338.778V4ZM348.727 4H353.701V3H348.727V4ZM358.676 4H363.65V3H358.676V4ZM368.625 4H373.599V3H368.625V4ZM378.574 4H383.548V3H378.574V4ZM388.523 4H393.497V3H388.523V4ZM398.472 4H403.446V3H398.472V4ZM408.421 4H413.395V3H408.421V4ZM418.37 4H423.344V3H418.37V4ZM428.319 4H433.293V3H428.319V4ZM438.268 4H443.242V3H438.268V4ZM448.217 4H453.191V3H448.217V4ZM458.166 4H463.14V3H458.166V4ZM468.115 4H473.089V3H468.115V4ZM478.064 4H483.038V3H478.064V4ZM488.013 4H490.5V3H488.013V4Z"
              fill="black"
            />
          </svg>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold shrink-0 text-5xl text-black md:text-6xl text-center"
          >
            Our Product
          </motion.h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494 7"
            fill="none"
          >
            <path
              d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM487.833 3.5C487.833 4.97276 489.027 6.16667 490.5 6.16667C491.973 6.16667 493.167 4.97276 493.167 3.5C493.167 2.02724 491.973 0.833333 490.5 0.833333C489.027 0.833333 487.833 2.02724 487.833 3.5ZM3 4H5.48724V3H3V4ZM10.4617 4H15.4362V3H10.4617V4ZM20.4107 4H25.3852V3H20.4107V4ZM30.3597 4H35.3342V3H30.3597V4ZM40.3087 4H45.2832V3H40.3087V4ZM50.2577 4H55.2321V3H50.2577V4ZM60.2066 4H65.1811V3H60.2066V4ZM70.1556 4H75.1301V3H70.1556V4ZM80.1046 4H85.0791V3H80.1046V4ZM90.0536 4H95.0281V3H90.0536V4ZM100.003 4H104.977V3H100.003V4ZM109.952 4H114.926V3H109.952V4ZM119.9 4H124.875V3H119.9V4ZM129.849 4H134.824V3H129.849V4ZM139.798 4H144.773V3H139.798V4ZM149.747 4H154.722V3H149.747V4ZM159.696 4H164.671V3H159.696V4ZM169.645 4H174.62V3H169.645V4ZM179.594 4H184.569V3H179.594V4ZM189.543 4H194.518V3H189.543V4ZM199.492 4H204.467V3H199.492V4ZM209.441 4H214.416V3H209.441V4ZM219.39 4H224.365V3H219.39V4ZM229.339 4H234.314V3H229.339V4ZM239.288 4H244.263V3H239.288V4ZM249.237 4H254.212V3H249.237V4ZM259.186 4H264.161V3H259.186V4ZM269.135 4H274.11V3H269.135V4ZM279.084 4H284.059V3H279.084V4ZM289.033 4H294.008V3H289.033V4ZM298.982 4H303.957V3H298.982V4ZM308.931 4H313.906V3H308.931V4ZM318.88 4H323.854V3H318.88V4ZM328.829 4H333.803V3H328.829V4ZM338.778 4H343.752V3H338.778V4ZM348.727 4H353.701V3H348.727V4ZM358.676 4H363.65V3H358.676V4ZM368.625 4H373.599V3H368.625V4ZM378.574 4H383.548V3H378.574V4ZM388.523 4H393.497V3H388.523V4ZM398.472 4H403.446V3H398.472V4ZM408.421 4H413.395V3H408.421V4ZM418.37 4H423.344V3H418.37V4ZM428.319 4H433.293V3H428.319V4ZM438.268 4H443.242V3H438.268V4ZM448.217 4H453.191V3H448.217V4ZM458.166 4H463.14V3H458.166V4ZM468.115 4H473.089V3H468.115V4ZM478.064 4H483.038V3H478.064V4ZM488.013 4H490.5V3H488.013V4Z"
              fill="black"
            />
          </svg>
        </div>

        <motion.img
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          src={"/vision-illu.png"}
          width={420}
          height={594}
          alt="illustration"
          className="absolute right-0 bottom-14 max-lg:hidden"
        />

        <TopBrackets color="black" />
        <BottomDecoration color="black" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-28 max-md:px-8 w-full text-center"
        style={{ backgroundImage: "url('/product.png')" }}
      >
        NFT | IN-GAME PURCHASE | MARKETPLACE | LIVESTREAMING PLATFORMS |
        SPONSORSHIP & ADVERTISEMENT | COACHING CLINIC
      </motion.div>
    </>
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
