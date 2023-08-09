import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import Image from "next/image";

export default function Success() {
  return (
    <div className="-mx-5 md:-mx-12 px-5 md:px-12 min-h-screen bg-[#DCDCDC] pb-52 pt-24 relative">
      <div className="relative px-12 pb-20 pt-14 md:px-32 max-w-[1289px] mx-auto mt-12">
        <Image
          className="mx-auto"
          src="/success.png"
          alt="failed"
          width={128}
          height={128}
        />
        <h1 className="text-black relative font-bold z-[10]  text-5xl md:text-6xl text-center mt-6">
        Your form has been sent successfully.
        </h1>
        <h4 className="text-black relative text-center mt-6">
        The private sale will be processed if the payment has been verified.
        </h4>

        <button className=" z-[10] relative max-sm:text-base mx-auto mt-12 block max-sm:px-7 max-sm:py-3  hover:-translate-y-1 active:translate-y-0 active:brightness-[0.85] hero-btn px-10 py-5 text-xl font-bold">
          BACK TO HOME
        </button>

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
