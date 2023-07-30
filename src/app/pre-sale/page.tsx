"use client";

import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

type Inputs = {
  firstName: string;
  lastName: string;
  walletAddress: string;
  amount: number;
  email: string;
};

export default function PreSale() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<Inputs>({ reValidateMode: "onBlur" });

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    return await fetch("/api/pre-sale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200)
        return router.push(`/payment-method?amount=${data.amount}`);
      notifications.show({
        title: "There was a problem submitting your form",
        message: "Sorry for the inconvenience! 🤥",
        color: "red",
      });
    });
  };

  const errorMessages = Object.values(errors).map(({ message }) => message);

  const [currency, setCurrency] = useState<"usd" | "rp">("usd");

  const minValue = currency === "usd" ? 200 : 3_000_000;

  return (
    <div className="-mx-5 md:-mx-12 px-5 md:px-12 bg-[#DCDCDC] pb-52 pt-24 relative">
      <div className="relative grid md:grid-cols-[90%_10%] px-0 py-7 md:px-16 xl:px-32 max-w-[1289px] mx-auto mt-12">
        <div>
          <h1 className="md:ml-8 font-bold text-3xl text-black  max-md:text-center">
            Join Private Sale
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative z-[1] gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 flex flex-col md:grid mt-12 md:mt-14"
          >
            <input
              required
              placeholder="First Name"
              type="text"
              {...register("firstName")}
              className={`border-0 ring-1 ring-inset ${
                errors.firstName
                  ? "ring-red-600 focus:ring-red-600"
                  : "ring-[#6d6d6d] focus:ring-[#8d8d8d]"
              } focus:ring-2 focus:ring-inset  px-3 py-5  block   placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent`}
            />
            <input
              required
              placeholder="Last Name"
              {...register("lastName")}
              type="text"
              className="border-0 ring-1 ring-inset ring-[#6d6d6d] focus:ring-2 focus:ring-inset focus:ring-[#8d8d8d] px-3 py-5  block   placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
            />
            <input
              required
              placeholder="Wallet Address"
              {...register("walletAddress")}
              type="text"
              className="border-0 ring-1 ring-inset ring-[#6d6d6d] focus:ring-2 focus:ring-inset focus:ring-[#8d8d8d] px-3 py-5  block  h-fit  placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
            />
            <div>
              <input
                required
                placeholder="Amount"
                defaultValue={minValue}
                {...register("amount", {
                  min: {
                    value: minValue,
                    message: `Amount must be atleast ${minValue}!`,
                  },
                })}
                type="number"
                className={`border-0 ring-1 ring-inset ${
                  errors.amount
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-[#6d6d6d] focus:ring-[#8d8d8d]"
                } focus:ring-2 focus:ring-inset  w-full px-3 py-5 block   placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent`}
              />
              <div className="flex justify-between items-start mt-1">
                <span className="text-sm text-[#ACACAC] ">
                  *Min. 1 BNB ≈ $200
                </span>
                <RadioGroup
                  className={"grid grid-cols-2 w-fit gap-2 ml-auto"}
                  value={currency}
                  onChange={setCurrency}
                >
                  <RadioGroup.Option value="usd">
                    {({ checked }) => (
                      <span
                        className={`text-xs p-1 cursor-pointer w-full block text-center ${
                          checked ? "bg-[#6d6d6d]" : "text-[#6d6d6d]"
                        }`}
                      >
                        USD
                      </span>
                    )}
                  </RadioGroup.Option>

                  <RadioGroup.Option value="rp">
                    {({ checked }) => (
                      <span
                        className={`text-xs p-1 cursor-pointer w-full block text-center ${
                          checked ? "bg-[#6d6d6d]" : "text-[#6d6d6d]"
                        }`}
                      >
                        RP
                      </span>
                    )}
                  </RadioGroup.Option>
                </RadioGroup>
              </div>
            </div>
            <input
              required
              placeholder="Email Address"
              {...register("email")}
              type="email"
              className="border-0 ring-1 ring-inset ring-[#6d6d6d] focus:ring-2 focus:ring-inset focus:ring-[#8d8d8d] md:col-span-2 md:-mt-5 px-3 py-5  block   placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
            />
            <div className="relative z-[1] col-span-2 -mt-7">
              <ul className="flex gap-1 flex-col mb-2 list-disc ml-4">
                {errorMessages.map((m, i) => (
                  <li key={i} className="text-sm text-red-600">
                    {m}
                  </li>
                ))}
              </ul>
              <div className="flex items-center mb-4">
                <input
                  required
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer text-[#ACACAC] bg-transparent border-[#ACACAC]"
                />
                <label
                  htmlFor="agree"
                  className="ml-2 text-sm text-[#ACACAC] hover:underline"
                >
                  <Link href={"/terms-and-agreement"}>Terms & Agreement</Link>
                </label>
              </div>
              <div className="mt-4 flex max-md:flex-col gap-y-4 items-start justify-start w-full">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className=" max-sm:text-base max-sm:px-7 max-sm:py-3  hover:-translate-y-1 active:translate-y-0 active:brightness-[0.85] hero-btn px-10 py-5 text-xl font-bold"
                >
                  {isSubmitting ? "Submitting..." : "Join Private Sale"}
                </button>
                <p className="text-sm text-[#424344] ml-4 md:ml-24 max-w-xs">
                  Stay up to date with the latest developments in the E-Sports
                  DAO and enjoy exclusive access to unique benefits through our
                  private newsletter.
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="max-md:hidden">
          <Image
            width={381}
            height={563}
            alt="cong"
            src={"/sale-illu.png"}
            className="w-72 absolute top-0 right-0"
          />
        </div>
        {/* border  */}
        <img
          className="absolute top-0 left-0 w-full h-full z-0 max-md:hidden"
          src="/border.png"
          alt="border"
        />
      </div>
      <BottomDecoration color="black" />
      <TopBrackets color="black" />
    </div>
  );
}
