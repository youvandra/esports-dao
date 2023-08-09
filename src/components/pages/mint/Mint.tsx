"use client";
import { NFT_CONTRACT_ADDRESS } from "@/const";
import {
  useMintNFT,
  useContract,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";
import { File } from "buffer";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";

interface Inputs {
  name: string;
  description: string;
  image: File;
}

const fileTypes = ["JPG", "PNG"];

export default function Mint() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>();
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);

  const handleChange = (file: File | undefined) => {
    if (!file) return;
    setValue("image", file);
  };
  const { mutateAsync: mintNft, isLoading, error } = useMintNFT(contract);
  const address = useAddress();

  return (
    <div className="mt-16">
      <div className="container mx-auto max-w-4xl flex flex-col gap-4">
        <div className="flex gap-4">
          <FileUploader
            className="w-full"
            required
            handleChange={handleChange}
            types={fileTypes}
          >
            {watch("image") ? (
              <img
                className="object-cover max-h-[360px]"
                // @ts-ignore
                src={URL.createObjectURL(watch("image"))}
              ></img>
            ) : (
              <div className="flex flex-col justify-center items-center py-24  border border-[#ededef]">
                <BiImageAdd color="#606060" size={72} />
                <span className="text-3xl px-8 font-light text-center text-[#606060]">
                  Upload Image
                </span>
              </div>
            )}
          </FileUploader>
          <div className="flex flex-col gap-4 grow">
            <div>
              <label htmlFor="name" className="text-[#ededef] text-xl">
                Name
              </label>
              <input
                id="name"
                required
                placeholder="My NFT"
                type="text"
                {...register("name")}
                className={`border-0 ring-1 ring-inset w-full text-[#ededef] ${
                  errors.name
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-[#ededef] focus:ring-[#ededef]"
                } focus:ring-2 focus:ring-inset  px-3 py-5  block   placeholder:text-[#606060] text-xl font-light text-black bg-transparent`}
              />
            </div>
            <div>
              <label htmlFor="description" className="text-[#ededef] text-xl">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                required
                placeholder="This is my NFT"
                {...register("description")}
                className={`border-0 ring-1 h-full w-full ring-inset resize-none text-[#ededef] ${
                  errors.description
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-[#ededef] focus:ring-[#ededef]"
                } focus:ring-2 focus:ring-inset  px-3 py-5  block   placeholder:text-[#606060] text-xl font-light text-black bg-transparent`}
              />
            </div>
          </div>
        </div>

        <Web3Button
          className="col-span-2 rounded-none bg-[#ededef]"
          contractAddress={NFT_CONTRACT_ADDRESS}
          action={() =>
            mintNft({
              metadata: {
                name: watch("name"),
                description: watch("description"),
                image: watch("image"),
              },
              to: address ?? "",
            })
          }
        >
          Mint NFT
        </Web3Button>
      </div>
    </div>
  );
}
