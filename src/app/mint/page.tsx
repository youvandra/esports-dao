import { ThirdwebProvider } from "@/components/ThirdwebProvider";
import { Sepolia } from "@thirdweb-dev/chains";
import Mint from "@/components/pages/mint/Mint";
import { THIRDWEB_CLIENT_ID } from "@/const";

export default function Page() {
  return (
    <ThirdwebProvider
      autoConnect
      activeChain={Sepolia}
      clientId={THIRDWEB_CLIENT_ID}
      supportedChains={[Sepolia]}
    >
      <Mint />
    </ThirdwebProvider>
  );
}
