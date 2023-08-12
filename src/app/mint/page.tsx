import { ThirdwebProvider } from "@/components/ThirdwebProvider";
import { Mumbai } from "@thirdweb-dev/chains";
import Mint from "@/components/pages/mint/Mint";
import { THIRDWEB_CLIENT_ID } from "@/const";

export default function Page() {
  return (
    <ThirdwebProvider
      autoConnect
      activeChain={Mumbai}
      clientId={THIRDWEB_CLIENT_ID}
      supportedChains={[Mumbai]}
    >
      <Mint />
    </ThirdwebProvider>
  );
}
