"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import TopDecoration from "@/components/TopDecoration";

export default function OurTeam() {
  return (
    <div className=" max-w-[1440px] mx-auto relative pt-24 pb-56">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-bold text-5xl pt-24 md:text-6xl text-center"
      >
        Our Team
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
        <path d="M125 0H0V1.5H29L39 3.5H87.5L96.5 1.5H125V0Z" fill="#ffffff" />
      </motion.svg>
      <div className="pt-64 mb-8">
        <h3 className="text-xl font-light">Our Core Team</h3>
      </div>
      <Carousel
        slideSize="22%"
        align="start"
        slideGap={28}
        draggable
        withControls={false}
        breakpoints={[
          { maxWidth: "lg", slideSize: "25%" },
          { maxWidth: "md", slideSize: "33.33333%" },
          { maxWidth: "sm", slideSize: "50%" },
          { maxWidth: "xs", slideSize: "100%" },
        ]}
      >
        {TEAM.map(({ image, name, role, link }, i) => (
          <Carousel.Slide key={i} className="flex flex-col w-fit items-start">
            <div className="p-[10px] border border-white border-dashed">
              <Image
                alt={name}
                src={image}
                width={217}
                height={217}
                quality={100}
              />
            </div>
            <div className="flex flex-col items-start">
              <h4 className="font-bold text-xl mt-4">{name}</h4>
              <p className="text-xl font-light mt-2 text-start">{role}</p>
              <Link href={link} target="_blank" className="mt-4">
                <Image
                  src={"/insta.png"}
                  width={52}
                  height={52}
                  quality={100}
                  alt={name + "'s instagram"}
                />
              </Link>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <TopDecoration />
    </div>
  );
}

const TEAM: { name: string; image: string; role: string; link: string }[] = [
  {
    name: "Ardiana",
    role: "Founder",
    image: "/team/ardiana.png",
    link: "/#",
  },
  {
    name: "Michelle Evelyn",
    role: "Co-Founder",
    image: "/team/michelle.png",
    link: "/#",
  },
  {
    name: "Abel Owen",
    role: "Community Manager",
    image: "/team/abel.png",
    link: "/#",
  },
  {
    name: "Azmi Abdul Aziz",
    role: "Esports Project Manager",
    image: "/team/azmi.png",
    link: "/#",
  },
  {
    name: "Melburns Woods III",
    role: "Business Development and Advisor",
    image: "/team/mel.png",
    link: "/#",
  },
];
