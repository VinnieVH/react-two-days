import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHttpRequest } from "../../api/api-client";
import { HistoricalMarketDataComboChart } from "../../components/charts/HistoricalMarketDataComboChart";
import { PacmanSpinner } from "../../components/spinners/PacmanSpinner";
import { LastSelectedCoinContext } from "../../contexts/LastSelectedCoinContext";
import { HistoricalMarketData } from "../../models/historical-market-data";
import { MarketData } from "../../models/market-data";
import { getHistoricalCoinData, mapHistoricalCoinDataToChartData } from "./details-view-functions";

export const DetailsView = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<MarketData>();
  const [historicalCoinData, setHistoricalCoinData] = useState<HistoricalMarketData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { setLastCoin } = useContext(LastSelectedCoinContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHttpRequest(`/markets/${id}`);
      if (!response.error) {
        const result = response.data.result;
        setCoin(result);
      }
      setIsLoading(false);
    };

    const fetchHistoricalData = async () => {
      const response = await getHistoricalCoinData(id || "");
      setHistoricalCoinData(response);
    };
    fetchData();
    fetchHistoricalData();
    id && setLastCoin(id);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <PacmanSpinner />
      ) : (
        <>
          <h1>ID: {id}</h1>
          <h2>{coin?.last}$</h2>
        </>
      )}
      {historicalCoinData && <HistoricalMarketDataComboChart chartData={mapHistoricalCoinDataToChartData(historicalCoinData)} />}
    </div>
  );
};
