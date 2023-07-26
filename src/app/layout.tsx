"use client";

import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import RootStyleRegistry from "./emotion";
import { usePathname } from "next/navigation";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showNavbar = PAGES.includes(pathname);

  return (
    <html lang="en">
      <body id="root" className={space_grotesk.className}>
        {showNavbar && (
          <>
            <Navbar />
            <Socials />
          </>
        )}

        <div
          className={`mx-auto ${
            showNavbar ? "mb-64 pt-[84px] xl:pt-[154px]" : ""
          }`}
        >
          <main className="px-5 md:px-12 overflow-x-hidden">
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </main>
        </div>
        {showNavbar && <Footer />}
      </body>
    </html>
  );
}

export const PAGES = [
  "/",
  "/about-us",
  "/pre-sale",
  "/terms-and-agreement",
  "/payment-method",
  "/sender",
  "/success",
];
