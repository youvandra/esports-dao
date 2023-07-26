"use client";

import BottomDecoration from "@/components/BottomDecoration";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <div
      style={{
        backgroundImage: "url('/roadmap.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
      className="-mx-5 md:-mx-12 px-5 md:px-12 relative py-16 "
    >
      <div className="mx-auto max-w-[1087px]">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-bold text-5xl md:text-6xl pt-16 text-center"
        >
          Roadmap
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
            fill="#2F2DB4"
          />
        </motion.svg>

        <div className="mt-40 ">
          <div className="flex flex-col gap-14">
            {QUARTERS.slice(0, 2).map(({ title, items }, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between"
                key={i}
              >
                <div className="flex flex-col">
                  <h3 className="font-bold text-4xl">{title}</h3>
                  <motion.ul
                    layout
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={container}
                    className="ml-2 pl-10 mt-4 list-disc grow relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 6 280"
                      fill="none"
                      className="absolute h-full left-0 top-0"
                    >
                      <path
                        d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM0.333321 277C0.333321 278.473 1.52723 279.667 2.99999 279.667C4.47275 279.667 5.66665 278.473 5.66665 277C5.66665 275.527 4.47275 274.333 2.99999 274.333C1.52723 274.333 0.333321 275.527 0.333321 277ZM2.5 3L2.5 5.53704L3.5 5.53704L3.5 3L2.5 3ZM2.5 10.6111L2.5 15.6852L3.5 15.6852L3.5 10.6111L2.5 10.6111ZM2.5 20.7593L2.5 25.8333L3.5 25.8333L3.5 20.7593L2.5 20.7593ZM2.5 30.9074L2.5 35.9815L3.5 35.9815L3.5 30.9074L2.5 30.9074ZM2.5 41.0556L2.5 46.1296L3.5 46.1296L3.5 41.0556L2.5 41.0556ZM2.5 51.2037L2.5 56.2778L3.5 56.2778L3.5 51.2037L2.5 51.2037ZM2.5 61.3519L2.5 66.4259L3.5 66.4259L3.5 61.3519L2.5 61.3519ZM2.5 71.5L2.5 76.5741L3.5 76.5741L3.5 71.5L2.5 71.5ZM2.5 81.6481L2.5 86.7222L3.5 86.7222L3.5 81.6481L2.5 81.6481ZM2.5 91.7963L2.5 96.8704L3.5 96.8704L3.5 91.7963L2.5 91.7963ZM2.5 101.944L2.5 107.019L3.5 107.019L3.5 101.944L2.5 101.944ZM2.5 112.093L2.5 117.167L3.5 117.167L3.5 112.093L2.5 112.093ZM2.49999 122.241L2.49999 127.315L3.49999 127.315L3.49999 122.241L2.49999 122.241ZM2.49999 132.389L2.49999 137.463L3.49999 137.463L3.49999 132.389L2.49999 132.389ZM2.49999 142.537L2.49999 147.611L3.49999 147.611L3.49999 142.537L2.49999 142.537ZM2.49999 152.685L2.49999 157.759L3.49999 157.759L3.49999 152.685L2.49999 152.685ZM2.49999 162.833L2.49999 167.907L3.49999 167.907L3.49999 162.833L2.49999 162.833ZM2.49999 172.982L2.49999 178.056L3.49999 178.056L3.49999 172.982L2.49999 172.982ZM2.49999 183.13L2.49999 188.204L3.49999 188.204L3.49999 183.13L2.49999 183.13ZM2.49999 193.278L2.49999 198.352L3.49999 198.352L3.49999 193.278L2.49999 193.278ZM2.49999 203.426L2.49999 208.5L3.49999 208.5L3.49999 203.426L2.49999 203.426ZM2.49999 213.574L2.49999 218.648L3.49999 218.648L3.49999 213.574L2.49999 213.574ZM2.49999 223.722L2.49999 228.796L3.49999 228.796L3.49999 223.722L2.49999 223.722ZM2.49999 233.871L2.49999 238.945L3.49999 238.945L3.49999 233.871L2.49999 233.871ZM2.49999 244.019L2.49999 249.093L3.49999 249.093L3.49999 244.019L2.49999 244.019ZM2.49999 254.167L2.49999 259.241L3.49999 259.241L3.49999 254.167L2.49999 254.167ZM2.49999 264.315L2.49999 269.389L3.49999 269.389L3.49999 264.315L2.49999 264.315ZM2.49999 274.463L2.49999 277L3.49999 277L3.49999 274.463L2.49999 274.463Z"
                        fill="white"
                      />
                    </svg>
                    {items.map((item, j) => (
                      <motion.li variants={child} key={j}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <motion.div
                  initial={{ opacity: 0.5, rotateY: 180 }}
                  whileInView={{ opacity: 1, rotateY: 360 }}
                  transition={{ duration: 0.5 }}
                  className=" w-fit h-fit bg-no-repeat py-16 px-8 max-md:hidden"
                  style={{
                    backgroundImage: "url(/a.webp)",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center 0",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span className="font-bold text-5xl md:text-6xl text-center block">
                    {title.substring(0, 2)} <br />
                    {title.substring(2)}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-14 mt-32">
            {QUARTERS.slice(2).map(({ title, items }, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-[1fr_minmax(0,360px)] justify-end md:justify-between"
                key={i}
              >
                <motion.div
                  initial={{ opacity: 0.5, rotateY: 180 }}
                  whileInView={{ opacity: 1, rotateY: 360 }}
                  transition={{ duration: 0.5 }}
                  className=" w-fit h-fit bg-no-repeat py-16 px-8 max-md:hidden"
                  style={{
                    backgroundImage: "url(/a.webp)",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center 0",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span className="font-bold text-5xl md:text-6xl text-center block">
                    {title.substring(0, 2)} <br />
                    {title.substring(2)}
                  </span>
                </motion.div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-4xl text-right">{title}</h3>
                  <motion.ul
                    layout
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={container}
                    className="pr-4 mt-4 list-disc grow relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 6 280"
                      fill="none"
                      className="absolute h-full right-0 top-0"
                    >
                      <path
                        d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM0.333321 277C0.333321 278.473 1.52723 279.667 2.99999 279.667C4.47275 279.667 5.66665 278.473 5.66665 277C5.66665 275.527 4.47275 274.333 2.99999 274.333C1.52723 274.333 0.333321 275.527 0.333321 277ZM2.5 3L2.5 5.53704L3.5 5.53704L3.5 3L2.5 3ZM2.5 10.6111L2.5 15.6852L3.5 15.6852L3.5 10.6111L2.5 10.6111ZM2.5 20.7593L2.5 25.8333L3.5 25.8333L3.5 20.7593L2.5 20.7593ZM2.5 30.9074L2.5 35.9815L3.5 35.9815L3.5 30.9074L2.5 30.9074ZM2.5 41.0556L2.5 46.1296L3.5 46.1296L3.5 41.0556L2.5 41.0556ZM2.5 51.2037L2.5 56.2778L3.5 56.2778L3.5 51.2037L2.5 51.2037ZM2.5 61.3519L2.5 66.4259L3.5 66.4259L3.5 61.3519L2.5 61.3519ZM2.5 71.5L2.5 76.5741L3.5 76.5741L3.5 71.5L2.5 71.5ZM2.5 81.6481L2.5 86.7222L3.5 86.7222L3.5 81.6481L2.5 81.6481ZM2.5 91.7963L2.5 96.8704L3.5 96.8704L3.5 91.7963L2.5 91.7963ZM2.5 101.944L2.5 107.019L3.5 107.019L3.5 101.944L2.5 101.944ZM2.5 112.093L2.5 117.167L3.5 117.167L3.5 112.093L2.5 112.093ZM2.49999 122.241L2.49999 127.315L3.49999 127.315L3.49999 122.241L2.49999 122.241ZM2.49999 132.389L2.49999 137.463L3.49999 137.463L3.49999 132.389L2.49999 132.389ZM2.49999 142.537L2.49999 147.611L3.49999 147.611L3.49999 142.537L2.49999 142.537ZM2.49999 152.685L2.49999 157.759L3.49999 157.759L3.49999 152.685L2.49999 152.685ZM2.49999 162.833L2.49999 167.907L3.49999 167.907L3.49999 162.833L2.49999 162.833ZM2.49999 172.982L2.49999 178.056L3.49999 178.056L3.49999 172.982L2.49999 172.982ZM2.49999 183.13L2.49999 188.204L3.49999 188.204L3.49999 183.13L2.49999 183.13ZM2.49999 193.278L2.49999 198.352L3.49999 198.352L3.49999 193.278L2.49999 193.278ZM2.49999 203.426L2.49999 208.5L3.49999 208.5L3.49999 203.426L2.49999 203.426ZM2.49999 213.574L2.49999 218.648L3.49999 218.648L3.49999 213.574L2.49999 213.574ZM2.49999 223.722L2.49999 228.796L3.49999 228.796L3.49999 223.722L2.49999 223.722ZM2.49999 233.871L2.49999 238.945L3.49999 238.945L3.49999 233.871L2.49999 233.871ZM2.49999 244.019L2.49999 249.093L3.49999 249.093L3.49999 244.019L2.49999 244.019ZM2.49999 254.167L2.49999 259.241L3.49999 259.241L3.49999 254.167L2.49999 254.167ZM2.49999 264.315L2.49999 269.389L3.49999 269.389L3.49999 264.315L2.49999 264.315ZM2.49999 274.463L2.49999 277L3.49999 277L3.49999 274.463L2.49999 274.463Z"
                        fill="white"
                      />
                    </svg>
                    {items.map((item, j) => (
                      <motion.li variants={child} key={j}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-40 ">
          <div className="flex flex-col gap-14">
            {TBD.slice(0, 2).map(({ title, items }, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between"
                key={i}
              >
                <div className="flex flex-col">
                  <h3 className="font-bold text-4xl">{title}</h3>
                  <motion.ul
                    layout
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={container}
                    className="ml-2 pl-10 mt-4 list-disc grow relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 6 280"
                      fill="none"
                      className="absolute h-full left-0 top-0"
                    >
                      <path
                        d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM0.333321 277C0.333321 278.473 1.52723 279.667 2.99999 279.667C4.47275 279.667 5.66665 278.473 5.66665 277C5.66665 275.527 4.47275 274.333 2.99999 274.333C1.52723 274.333 0.333321 275.527 0.333321 277ZM2.5 3L2.5 5.53704L3.5 5.53704L3.5 3L2.5 3ZM2.5 10.6111L2.5 15.6852L3.5 15.6852L3.5 10.6111L2.5 10.6111ZM2.5 20.7593L2.5 25.8333L3.5 25.8333L3.5 20.7593L2.5 20.7593ZM2.5 30.9074L2.5 35.9815L3.5 35.9815L3.5 30.9074L2.5 30.9074ZM2.5 41.0556L2.5 46.1296L3.5 46.1296L3.5 41.0556L2.5 41.0556ZM2.5 51.2037L2.5 56.2778L3.5 56.2778L3.5 51.2037L2.5 51.2037ZM2.5 61.3519L2.5 66.4259L3.5 66.4259L3.5 61.3519L2.5 61.3519ZM2.5 71.5L2.5 76.5741L3.5 76.5741L3.5 71.5L2.5 71.5ZM2.5 81.6481L2.5 86.7222L3.5 86.7222L3.5 81.6481L2.5 81.6481ZM2.5 91.7963L2.5 96.8704L3.5 96.8704L3.5 91.7963L2.5 91.7963ZM2.5 101.944L2.5 107.019L3.5 107.019L3.5 101.944L2.5 101.944ZM2.5 112.093L2.5 117.167L3.5 117.167L3.5 112.093L2.5 112.093ZM2.49999 122.241L2.49999 127.315L3.49999 127.315L3.49999 122.241L2.49999 122.241ZM2.49999 132.389L2.49999 137.463L3.49999 137.463L3.49999 132.389L2.49999 132.389ZM2.49999 142.537L2.49999 147.611L3.49999 147.611L3.49999 142.537L2.49999 142.537ZM2.49999 152.685L2.49999 157.759L3.49999 157.759L3.49999 152.685L2.49999 152.685ZM2.49999 162.833L2.49999 167.907L3.49999 167.907L3.49999 162.833L2.49999 162.833ZM2.49999 172.982L2.49999 178.056L3.49999 178.056L3.49999 172.982L2.49999 172.982ZM2.49999 183.13L2.49999 188.204L3.49999 188.204L3.49999 183.13L2.49999 183.13ZM2.49999 193.278L2.49999 198.352L3.49999 198.352L3.49999 193.278L2.49999 193.278ZM2.49999 203.426L2.49999 208.5L3.49999 208.5L3.49999 203.426L2.49999 203.426ZM2.49999 213.574L2.49999 218.648L3.49999 218.648L3.49999 213.574L2.49999 213.574ZM2.49999 223.722L2.49999 228.796L3.49999 228.796L3.49999 223.722L2.49999 223.722ZM2.49999 233.871L2.49999 238.945L3.49999 238.945L3.49999 233.871L2.49999 233.871ZM2.49999 244.019L2.49999 249.093L3.49999 249.093L3.49999 244.019L2.49999 244.019ZM2.49999 254.167L2.49999 259.241L3.49999 259.241L3.49999 254.167L2.49999 254.167ZM2.49999 264.315L2.49999 269.389L3.49999 269.389L3.49999 264.315L2.49999 264.315ZM2.49999 274.463L2.49999 277L3.49999 277L3.49999 274.463L2.49999 274.463Z"
                        fill="white"
                      />
                    </svg>
                    {items.map((item, j) => (
                      <motion.li variants={child} key={j}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <motion.div
                  initial={{ opacity: 0.5, rotateY: 180 }}
                  whileInView={{ opacity: 1, rotateY: 360 }}
                  transition={{ duration: 0.5 }}
                  className=" w-fit h-fit bg-no-repeat py-16 px-8 max-md:hidden"
                  style={{
                    backgroundImage: "url(/a.webp)",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center 0",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span className="font-bold text-5xl md:text-6xl text-center block">
                    {title.substring(0, 2)} <br />
                    {title.substring(2)}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-14 mt-32">
            {TBD.slice(2).map(({ title, items }, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-[1fr_minmax(0,360px)] justify-end md:justify-between"
                key={i}
              >
                <motion.div
                  initial={{ opacity: 0.5, rotateY: 180 }}
                  whileInView={{ opacity: 1, rotateY: 360 }}
                  transition={{ duration: 0.5 }}
                  className=" w-fit h-fit bg-no-repeat py-16 px-8 max-md:hidden"
                  style={{
                    backgroundImage: "url(/a.webp)",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center 0",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span className="font-bold text-5xl md:text-6xl text-center block">
                    {title.substring(0, 2)} <br />
                    {title.substring(2)}
                  </span>
                </motion.div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-4xl text-right">{title}</h3>
                  <motion.ul
                    layout
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={container}
                    className="pr-4 mt-4 list-disc grow relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 6 280"
                      fill="none"
                      className="absolute h-full right-0 top-0"
                    >
                      <path
                        d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM0.333321 277C0.333321 278.473 1.52723 279.667 2.99999 279.667C4.47275 279.667 5.66665 278.473 5.66665 277C5.66665 275.527 4.47275 274.333 2.99999 274.333C1.52723 274.333 0.333321 275.527 0.333321 277ZM2.5 3L2.5 5.53704L3.5 5.53704L3.5 3L2.5 3ZM2.5 10.6111L2.5 15.6852L3.5 15.6852L3.5 10.6111L2.5 10.6111ZM2.5 20.7593L2.5 25.8333L3.5 25.8333L3.5 20.7593L2.5 20.7593ZM2.5 30.9074L2.5 35.9815L3.5 35.9815L3.5 30.9074L2.5 30.9074ZM2.5 41.0556L2.5 46.1296L3.5 46.1296L3.5 41.0556L2.5 41.0556ZM2.5 51.2037L2.5 56.2778L3.5 56.2778L3.5 51.2037L2.5 51.2037ZM2.5 61.3519L2.5 66.4259L3.5 66.4259L3.5 61.3519L2.5 61.3519ZM2.5 71.5L2.5 76.5741L3.5 76.5741L3.5 71.5L2.5 71.5ZM2.5 81.6481L2.5 86.7222L3.5 86.7222L3.5 81.6481L2.5 81.6481ZM2.5 91.7963L2.5 96.8704L3.5 96.8704L3.5 91.7963L2.5 91.7963ZM2.5 101.944L2.5 107.019L3.5 107.019L3.5 101.944L2.5 101.944ZM2.5 112.093L2.5 117.167L3.5 117.167L3.5 112.093L2.5 112.093ZM2.49999 122.241L2.49999 127.315L3.49999 127.315L3.49999 122.241L2.49999 122.241ZM2.49999 132.389L2.49999 137.463L3.49999 137.463L3.49999 132.389L2.49999 132.389ZM2.49999 142.537L2.49999 147.611L3.49999 147.611L3.49999 142.537L2.49999 142.537ZM2.49999 152.685L2.49999 157.759L3.49999 157.759L3.49999 152.685L2.49999 152.685ZM2.49999 162.833L2.49999 167.907L3.49999 167.907L3.49999 162.833L2.49999 162.833ZM2.49999 172.982L2.49999 178.056L3.49999 178.056L3.49999 172.982L2.49999 172.982ZM2.49999 183.13L2.49999 188.204L3.49999 188.204L3.49999 183.13L2.49999 183.13ZM2.49999 193.278L2.49999 198.352L3.49999 198.352L3.49999 193.278L2.49999 193.278ZM2.49999 203.426L2.49999 208.5L3.49999 208.5L3.49999 203.426L2.49999 203.426ZM2.49999 213.574L2.49999 218.648L3.49999 218.648L3.49999 213.574L2.49999 213.574ZM2.49999 223.722L2.49999 228.796L3.49999 228.796L3.49999 223.722L2.49999 223.722ZM2.49999 233.871L2.49999 238.945L3.49999 238.945L3.49999 233.871L2.49999 233.871ZM2.49999 244.019L2.49999 249.093L3.49999 249.093L3.49999 244.019L2.49999 244.019ZM2.49999 254.167L2.49999 259.241L3.49999 259.241L3.49999 254.167L2.49999 254.167ZM2.49999 264.315L2.49999 269.389L3.49999 269.389L3.49999 264.315L2.49999 264.315ZM2.49999 274.463L2.49999 277L3.49999 277L3.49999 274.463L2.49999 274.463Z"
                        fill="white"
                      />
                    </svg>
                    {items.map((item, j) => (
                      <motion.li variants={child} key={j}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <BottomDecoration />
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

const QUARTERS = [
  {
    title: "Q2 2023",
    items: [
      "Idea",
      "Team allignment",
      "Whitepapper",
      "Website development",
      "Community development",
      "Smart Contract",
    ],
  },
  {
    title: "Q3 2023",
    items: [
      "Private sale",
      "Testnet release",
      "Audit & KYC",
      "Marketing & Partnership",
      "Online Tournament",
      "Sponsorship open",
      "Presale",
    ],
  },
  {
    title: "Q4 2023",
    items: [
      "Marketplace Development",
      "Product Development",
      "Launchpad",
      "Public Sale",
      "Token burning and buyback",
    ],
  },
  {
    title: "Q1 2024",
    items: [
      "Listing on CMC and Coingecko",
      "Listing on CEX",
      "Staking platforms development",
      "Live streaming platforms development",
    ],
  },
  
];

const TBD = [
  {
    title: "Q2 2024",
    items: [
      "Esports Team Development",
      "Online League",
      "Host esports conference and meetups",
      "Host a wide variety of events",
    ],
  },
  {
    title: "Q3 2024",
    items: [
      "Esports Fundraising a sponsorship platform",
      "EsportsDAO Ventures",
      "Esports support foundation",
    ],
  },
  {
    title: "Q4 2024",
    items: [
      "Onsite tournaments",
    ],
  },
  {
    title: "Q1 2025",
    items: [
      "Onsite League",
    ],
  },
];
