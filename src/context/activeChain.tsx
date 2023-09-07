import { Mumbai, Chain } from "@thirdweb-dev/chains";
import React, { createContext, useContext, useState } from "react";

const activeChainContext = createContext<{
  chain: Chain;
  setChain: React.Dispatch<React.SetStateAction<Chain>>;
}>({ chain: Mumbai, setChain: () => {} });

export const ActiveChainProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [chain, setChain] = useState<Chain>(Mumbai);

  return (
    <activeChainContext.Provider value={{ chain, setChain }}>
      {children}
    </activeChainContext.Provider>
  );
};

export const useActiveChain = () => useContext(activeChainContext);
