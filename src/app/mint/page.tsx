import { ThirdwebProvider } from "@/components/ThirdwebProvider";
import { Sepolia } from "@thirdweb-dev/chains";
import Mint from "@/components/pages/mint/Mint";

export default function Page() {
  return (
    <ThirdwebProvider
      autoConnect
      activeChain={Sepolia}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      supportedChains={[Sepolia]}
    >
      <Mint />
    </ThirdwebProvider>
  );
}
