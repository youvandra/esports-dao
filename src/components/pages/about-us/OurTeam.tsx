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
        {TEAM.map(({ image, name, role, link_twitter,link_linkedin }, i) => (
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
            <div className="flex mt-4"> {/* Tambahkan div ini untuk ikon sosial */}
              <Link href={link_linkedin} target="_blank" className="mr-4">
                <Image
                  src={"/linkedin.png"}
                  width={52}
                  height={52}
                  quality={100}
                  alt={name + "'s linkedin"}
                />
              </Link>
              <Link href={link_twitter} target="_blank">
                <Image
                  src={"/twitter.png"}
                  width={52}
                  height={52}
                  quality={100}
                  alt={name + "'s twitter"}
                />
              </Link>
            </div>
          </div>
        </Carousel.Slide>        
        ))}
      </Carousel>
      <TopDecoration />
    </div>
  );
}

const TEAM: { name: string; image: string; role: string; link_linkedin: string; link_twitter:string; }[] = [
  {
    name: "Ardiana",
    role: "Founder",
    image: "/team/ardiana.png",
    link_linkedin: "https://www.linkedin.com/in/ardhi-ana-esportsdao-778516281/",
    link_twitter: "https://twitter.com/ArdhianaEDAO",
  },
  {
    name: "Melburns Woods III",
    role: "Co-Founder",
    image: "/team/mel.png",
    link_linkedin: "https://www.linkedin.com/in/melburn-woods-iii-52278b234/",
    link_twitter: "https://twitter.com/Bitburn_888",
  },
  {
    name: "Abel Owen",
    role: "Community Manager",
    image: "/team/abel.png",
    link_linkedin: "https://www.linkedin.com/in/~abel-owen-636843236/",
    link_twitter: "https://twitter.com/THISSABEL",
  },
  {
    name: "Azmi Abdul Aziz",
    role: "Esports Project Manager",
    image: "/team/azmi.png",
    link_linkedin: "https://www.linkedin.com/in/azmi-abdul-aziz-1012a1283/",
    link_twitter: "https://twitter.com/imzabackward",
  },
];
