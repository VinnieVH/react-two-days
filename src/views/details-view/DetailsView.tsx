import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsView = () => {
  const { id } = useParams();
  const [coinId, setCoinId] = useState(id || "");

  useEffect(() => {
    id && setCoinId(id);
  }, [id]);

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
};
