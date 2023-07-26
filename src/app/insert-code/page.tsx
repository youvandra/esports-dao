"use client";

import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import Image from "next/image";
import { FormEvent } from "react";
// @ts-ignore
import cookies from "@boiseitguru/cookie-cutter";
import { useRouter } from "next/navigation";

export default function InsertCode() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let code = e.currentTarget.code.value;
    cookies.set("pwd", code);
    router.refresh();
    router.push("/");
  };
  return (
    <div className="-mx-5 md:-mx-12 px-5 min-h-screen md:px-12 bg-[#DCDCDC] pb-52 pt-24 relative">
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
      <form
        onSubmit={handleSubmit}
        className="relative px-12 py-20 md:p-32 max-w-[1289px] mx-auto mt-12"
      >
        <h1 className="font-bold text-5xl md:text-6xl text-black pt-16 text-center ">
          Insert Your Code
        </h1>

        <input
          placeholder="Enter your private code ID"
          name="code"
          type="text"
          className="relative z-[1]  my-7 pl-8 mx-auto max-w-[695px] w-full block border-4 border-[#6D6D6D] placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
        />
        <button
          type="submit"
          className="relative z-[1] mx-auto block max-sm:text-base max-sm:px-7 max-sm:py-3  hover:-translate-y-1 active:translate-y-0 active:brightness-[0.85] hero-btn px-10 py-5 text-xl font-bold"
        >
          JOIN NOW
        </button>
        {/* border  */}
        <img
          className="absolute top-0 left-0 w-full h-full z-0 object-fill"
          src="/code-border.png"
          alt="border"
        />
      </form>
      <BottomDecoration color="black" />
      <TopBrackets color="black" />
    </div>
  );
}
