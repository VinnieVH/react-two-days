import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import styled from "styled-components";
import { getHttpRequest } from "../../api/api-client";
import { PacmanSpinner } from "../../components/spinners/PacmanSpinner";
import { MarketData } from "../../models/market-data";

export const DetailsView = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<MarketData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHttpRequest(`/markets/${id}`);
      if (!response.error) {
        const result = response.data.result;
        setCoin(result);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {coin ? (
        <>
          <h1>ID: {id}</h1>
          <h2>{coin?.last}$</h2>
        </>
      ) : (
        <PacmanSpinner />
      )}
    </div>
  );
};
