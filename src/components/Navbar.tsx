"use client";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Drawer from "./Drawer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      id="navbar"
      className="z-40 shadow-sm fixed mx-auto  px-5 md:px-12 backdrop-blur-xl w-full bg-black  py-6"
    >
      <nav className="flex items-center ">
        <div className="grow">
          <div className="w-fit mx-auto hidden xl:grid grid-cols-[1fr_minmax(185px,185px)_1fr] items-center justify-center">
            {/* left links */}
            <ul className="flex gap-8 justify-end">
              {LEFT_LINKS.map((props, i) => (
                <NavLink key={i} {...props} isActive={props.link == pathname} />
              ))}
            </ul>
            <div className="relative">
              <Link href={"/"}>
                <Image
                  alt="logo"
                  quality={100}
                  src={"/logo.webp"}
                  width={96}
                  height={96}
                  className=" mx-auto"
                />
                <span className="sr-only">home</span>
              </Link>
            </div>
            {/* right links */}
            <div className="flex justify-between gap-x-8 items-center">
              <ul className="flex gap-8">
                {RIGHT_LINKS.map((props, i) => (
                  <NavLink
                    key={i}
                    {...props}
                    isActive={props.link == pathname}
                  />
                ))}
              </ul>
              <Link
                href={"/pre-sale"}
                className="text-lg max-[1440px]:text-sm px-5 py-4 ml-4 xl:ml-12 glitch btn-cut hover:-translate-y-1 transition-transform active:brightness-[0.85] active:translate-y-0"
              >
                PRIVATE SALE
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="xl:hidden flex items-center justify-between">
        <Link href={"/"}>
          <Image
            alt="logo"
            quality={100}
            src={"/logo.webp"}
            width={36}
            height={36}
          />
          <span className="sr-only">home</span>
        </Link>

        <button>
          <FiMenu
            onClick={() => {
              setIsOpen(true);
            }}
            size={32}
          />
        </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <ul>
            {LEFT_LINKS.concat(RIGHT_LINKS).map((props, i) => (
              <MblNavLink {...props} key={i} />
            ))}
          </ul>
        </Drawer>
      </nav>
    </header>
  );
}

function NavLink({
  label,
  link,
  isActive,
}: NavbarLink & { isActive: boolean }) {
  if (link)
    return (
      <li>
        <Link
          className={`block hover:text-neutral-300 font-bold transition-colors active:text-primary-dark ${
            isActive ? "underline underline-offset-8" : ""
          }`}
          href={link}
          style={isActive ? { textDecorationThickness: 3 } : {}}
        >
          {label}
        </Link>
      </li>
    );
}

interface NavbarLink {
  label: string;
  link: string;
}

const LEFT_LINKS: NavbarLink[] = [
  {
    label: "HOME",
    link: "/",
  },
  {
    label: "MARKETPLACE",
    link: "/marketplace",
  },
  {
    label: "EXPLORE",
    link: "/explore",
  },
  {
    label: "ACTIVITY",
    link: "/activity",
  },
];
const RIGHT_LINKS: NavbarLink[] = [
  {
    label: "FINANCE",
    link: "/finance",
  },
  {
    label: "PAGES",
    link: "/pages",
  },
  {
    label: "CONTACT",
    link: "/contact",
  },
];

function MblNavLink({ label, link }: NavbarLink) {
  if (link)
    return (
      <li>
        <Link
          className=" block wfull py-2 font-medium transition-colors active:text-primary-dark"
          href={link}
        >
          {label}
        </Link>
      </li>
    );
}
