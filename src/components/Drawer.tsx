"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import usePortal from "react-useportal";

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  const { Portal } = usePortal();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Portal>
      <main
        className={
          " fixed overflow-hidden z-50 bg-black bg-opacity-50 backdrop-blur-xl inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : "opacity-0 -translate-x-full  ")
        }
      >
        <section>
          <div className="flex justify-between items-center px-5 py-6 bg-black bg-opacity-80 backdrop-blur-3xl">
            <Link href={"/"}>
              <Image alt="logo" width={36} height={36} src="/logo.webp" />
            </Link>
            <div className="flex items-center gap-x-2">
              {/* <Link
                href={"/pre-sale"}
                className="glitch btn-cut transition-transform active:brightness-[0.85] px-4 py-3 text-sm"
              >
                Private Sale
              </Link> */}
              <FiX
                onClick={() => {
                  setIsOpen(false);
                }}
                color="white"
                size={32}
              />
            </div>
          </div>
          <div className="px-5 mt-8">{children}</div>
        </section>
      </main>
    </Portal>
  );
}

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
