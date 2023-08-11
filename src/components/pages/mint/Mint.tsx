"use client";
import { NFT_CONTRACT_ADDRESS } from "@/const";
import {
  useContract,
  Web3Button,
  useAddress,
  useClaimToken,
  useTokenBalance,
} from "@thirdweb-dev/react";

interface Inputs {
  amount: number;
}

const fileTypes = ["JPG", "PNG"];

export default function Mint() {
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);

  const { mutateAsync: claimToken } = useClaimToken(contract);
  const address = useAddress();

  return (
    <div className="mt-16">
      <h2 className="mx-auto font-bold text-4xl md:text-5xl w-fit">
        Claim Our Testnet Token
      </h2>
      <div className="container mx-auto max-w-4xl flex flex-col gap-4 mt-8">
        <Web3Button
          className="col-span-2 text-xl rounded-none bg-[#ededef]"
          contractAddress={NFT_CONTRACT_ADDRESS}
          action={() =>
            claimToken({
              amount: 1,
              to: address ?? "",
            })
          }
        >
          Claim now
        </Web3Button>
      </div>
    </div>
  );
}
