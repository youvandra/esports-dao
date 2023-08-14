"use client";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Drawer from "./Drawer";
import { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MdChevronLeft } from "react-icons/md";

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
                JOIN PRIVATE SALE
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
  links,
  isActive,
}: NavbarLink & { isActive: boolean }) {
  if (link)
    return (
      <li className="uppercase">
        <Link
          className={`uppercase block hover:text-neutral-300 font-bold transition-colors active:text-primary-dark ${
            isActive ? "underline underline-offset-8" : ""
          }`}
          href={link}
          style={isActive ? { textDecorationThickness: 3 } : {}}
        >
          {label}
        </Link>
      </li>
    );
  if (links)
    return (
      <li className="uppercase">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center gap-1 hover:text-neutral-300 font-bold transition-colors active:text-primary-dark">
              <span className="uppercase">{label}</span>
              <MdChevronLeft className="-rotate-90" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-10 w-56 origin-top-right rounded-md bg-black shadow-2xl ">
              {links.map((l, key) => (
                <Menu.Item key={key}>
                  {({ active }) => (
                    <Link
                    href={l.link}
                    className={`${
                      active ? " bg-primary" : ""
                    } block transition-colors font-bold w-full items-center rounded-md px-2 py-2 text-sm`}
                    {...(l.label.includes("WHITEPAPER") || l.label.includes("LITE PAPER") ? { target: "_blank" } : {})}
                  >
                      {l.label}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    );
}

interface NavbarLink {
  label: string;
  link?: string;
  links?: { label: string; link: string }[];
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
    links: [
      {
        label: "ROADMAP",
        link: "/#roadmap",
      },
      {
        label: "TOKENOMIC",
        link: "/#tokenomic",
      },
      {
        label: "WHITEPAPER (ENG)",
        link: "https://drive.google.com/file/d/1TkJgbvKBJjoH1GeF5w4ARplFplcSO4xj/view?usp=sharing",
      },
      {
        label: "LITE PAPER (ENG)",
        link: "https://drive.google.com/file/d/1lumxUlOoHhhwEt16r3QJ29kroeT14ZAQ/view?usp=sharing",
      },
    ],
  },
  {
    label: "Activity",
    links: [
      {
        label: "Streams",
        link: "/streams",
      },
      {
        label: "Events",
        link: "/events",
      },
      {
        label: "Tournament",
        link: "/tournament",
      },
    ],
  },
];
const RIGHT_LINKS: NavbarLink[] = [
  {
    label: "Finance",
    links: [
      {
        label: "Staking",
        link: "/staking",
      },
      {
        label: "Wallet",
        link: "/wallet",
      },
    ],
  },
  {
    label: "Pages",
    links: [
      {
        label: "Source Code",
        link: "/source-code",
      },
      {
        label: "About Us",
        link: "/about-us",
      },
    ],
  },
  {
    label: "Contact",
    link: "/contact-us",
  },
];

function MblNavLink({ label, link, links }: NavbarLink) {
  if (link)
    return (
      <li className="uppercase">
        <Link
          className=" block wfull py-2 font-medium transition-colors active:text-blue-400"
          href={link}
        >
          {label}
        </Link>
      </li>
    );
  if (links)
    return (
      <li className="uppercase">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full gap-x-1 items-center rounded-lg py-2 text-left font-medium `}
              >
                <span>{label}</span>
                <MdChevronLeft className="-rotate-90" aria-hidden="true" />
              </Disclosure.Button>
              <div className="flex flex-col">
                {links.map((l, key) => (
                  <Disclosure.Panel
                    as={Link}
                    href={l.link}
                    key={key}
                    className="p-2  text-white active:text-blue-400"
                  >
                    {l.label}
                  </Disclosure.Panel>
                ))}
              </div>
            </>
          )}
        </Disclosure>
      </li>
    );
}
