import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getHttpRequest } from "../api/api-client";
import { LastSelectedCoinContext } from "../contexts/LastSelectedCoinContext";
import { MarketData } from "../models/market-data";
import { colors } from "../utils";
import ListItem from "./ListItem";

const style = {
  listStyle: "none",
  padding: 0,
};

const List = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const { lastCoin } = useContext(LastSelectedCoinContext);
  const navigate = useNavigate();

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
    <>
      {lastCoin && (
        <LastSelectedCoinAppBar>
          <div style={{ margin: "auto", cursor: "pointer" }} onClick={() => navigate(`/${lastCoin}`)}>
            {lastCoin}
          </div>
        </LastSelectedCoinAppBar>
      )}
      <ul style={style}>
        {marketData?.map((data: any, index) => (
          <ListItem key={index} name={data.name} volume={data.volumeUsd24h} />
        ))}
      </ul>
    </>
  );
};

export default List;

const LastSelectedCoinAppBar = styled.div`
  height: 50px;
  display: flex;
  background-color: ${colors.white};
  justify-content: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
