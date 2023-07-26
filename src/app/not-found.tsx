import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="-mx-5 md:-mx-12 px-5 md:px-12 min-h-screen bg-[#DCDCDC] pb-52 pt-24 relative">
      <div className="max-w-[1289px] mx-auto flex justify-between items-center">
        <Image
          style={{ boxShadow: "3px 8px 3px 0px rgba(0, 0, 0, 0.25)" }}
          src={"/logo.webp"}
          alt="logo"
          width={140}
          height={140}
          className="rounded-full max-md:w-20 aspect-square"
        />
        <span
          style={{ textShadow: "13px 34px #E5E5E5" }}
          className="text-[#CCCCCC] font-bold text-4xl sm:text-5xl  md:text-6xl xl:text-8xl"
        >
          E-Sports DAO
        </span>
      </div>
      <div className="relative px-12 pb-20 pt-14 md:px-32 max-w-[1289px] mx-auto mt-12">
        <Image
          className="mx-auto"
          src="/x.png"
          alt="failed"
          width={128}
          height={128}
        />
        <h2 className="mt-6 font-light text-black text-4xl text-center">
          THIS PAGE UNDER DEVELOPMENT.
        </h2>
        {/* border  */}
        <img
          className="absolute top-0 left-0 w-full h-full z-0 object-fill"
          src="/code-border.png"
          alt="border"
        />
      </div>
      <BottomDecoration color="black" />
      <TopBrackets color="black" />
    </div>
  );
}
