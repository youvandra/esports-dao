import Distribution from "@/components/pages/index/Distribution";
import Hero from "@/components/pages/index/Hero";
import Polygon from "@/components/pages/index/Polygon";
import Roadmap from "@/components/pages/index/Roadmap";
import Supply from "@/components/pages/index/Supply";
import Tokenomics from "@/components/pages/index/Tokenomics";
import What from "@/components/pages/index/What";

export default function Home() {
  return (
    <>
      <Hero />
      <What />
      <Supply />
      <Tokenomics />
      <Distribution />
      <Roadmap />
      <Polygon />
    </>
  );
}
