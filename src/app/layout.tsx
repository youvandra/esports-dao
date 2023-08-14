"use client";

import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import RootStyleRegistry from "./emotion";
import { usePathname } from "next/navigation";
import { ThirdwebProvider } from "@/components/ThirdwebProvider";
import { Sepolia, Polygon, Mumbai} from "@thirdweb-dev/chains";
import { THIRDWEB_CLIENT_ID } from "@/const";
import { ActiveChainProvider, useActiveChain } from "@/context/activeChain";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

const App = ({ children }: { children: React.ReactNode }) => {
  const { chain } = useActiveChain();
  return (
    <ThirdwebProvider
      autoConnect
      activeChain={chain}
      clientId={THIRDWEB_CLIENT_ID}
      supportedChains={[Sepolia, Polygon, Mumbai]}
      autoSwitch
    >
      {children}
    </ThirdwebProvider>
  );
};

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
            <RootStyleRegistry>
              <ActiveChainProvider>
                <App>{children}</App>
              </ActiveChainProvider>
            </RootStyleRegistry>
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
  "/contact-us",
  "/pre-sale",
  "/terms-and-agreement",
  "/privacy-policy",
  "/payment-method",
  "/sender",
  "/success",
  "/mint",
];
