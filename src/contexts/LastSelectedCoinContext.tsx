import { createContext, useState } from "react";

export const LastSelectedCoinContext = createContext<{ lastCoin: string | undefined; setLastCoin: (value: string) => void }>({} as any);

const LastSelectedCoinHandler = (props: any) => {
  const [lastCoin, setLastCoin] = useState<string | undefined>();

  return <LastSelectedCoinContext.Provider value={{ lastCoin, setLastCoin }}>{props.children}</LastSelectedCoinContext.Provider>;
};

export default LastSelectedCoinHandler;
