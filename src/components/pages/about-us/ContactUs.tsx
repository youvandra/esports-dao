"use client";

import { SOCIALS } from "@/components/Socials";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className=" py-24 -mx-5 md:-mx-12 px-5 md:px-12 bg-[#DCDCDC]">
      <div className="text-black mx-auto max-w-[1440px]">
        <div className="w-fit">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-bold text-5xl md:text-6xl "
          >
            Contact Us
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
              fill="#42257A"
            />
          </motion.svg>
        </div>
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-20 mt-8">
          <div>
            <p className="text-xl ">
              Thank you for your interest in Esports DAO! 
              We welcome your inquiries, feedback, and suggestions.
              Our email : esportsdao.ofc@gmail.com
            </p>
            <nav className="gap-3 flex mt-16 flex-wrap">
              {SOCIALS.map(({ Icon, link }, i) => (
                <Link
                  target="_blank"
                  className="p-4 border-4 border-black border-opacity-5 rounded-full block"
                  key={i}
                  href={link}
                >
                  <Icon color="black" size={20} />
                </Link>
              ))}
            </nav>
          </div>
          <form className="grid content-start mx-auto max-w-lg w-full gap-3">
            <input
              type="text"
              name="name"
              className="px-3 py-6 bg-transparent border border-[#6D6D6D] placeholder:text-[#6D6D6D] font-bold text-xl text-black"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              className="px-3 py-6 bg-transparent border border-[#6D6D6D] placeholder:text-[#6D6D6D] font-bold text-xl text-black"
              placeholder="Email address"
            />
            <textarea
              className="resize-none px-3 py-6 bg-transparent border border-[#6D6D6D] placeholder:text-[#6D6D6D] font-bold text-xl text-black"
              name="message"
              rows={2}
            />
            <button className="bg-[#42257A] px-3 py-6 font-bold text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
