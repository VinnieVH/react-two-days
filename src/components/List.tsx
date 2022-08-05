import { useEffect, useState } from "react";
import { getHttpRequest } from "../api/api-client";
import { MarketData } from "../models/market-data";
import ListItem from "./ListItem";

const style = {
  listStyle: "none",
  padding: 0,
};

interface ListItemProps {
  numberOfItems: number;
}

const List = (props: ListItemProps) => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await getHttpRequest("/markets");
      if (!response.error) {
        const result = response.data.result;
        const filteredResult = filterPerpetualContracts(result);
        setMarketData(filteredResult);
      }
    };
    fetchMarketData();
  }, []);

  const filterPerpetualContracts = (data: MarketData[]) => {
    return data.filter((x) => x.name.toLowerCase().includes("perp"));
  };
  return (
    <ul style={style}>
      {marketData?.map((data: any, index) => (
        <ListItem key={index} name={data.name} volume={data.volumeUsd24h} />
      ))}
    </ul>
  );
};

export default List;
