import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const style = {
  listStyle: "none",
  padding: 0,
};

const List = () => {
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumberOfItems((numberOfItems) => numberOfItems + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <ul style={style}>

      {[...Array(numberOfItems)].map((_,index)=><ListItem key={index} number={index} />)}
    </ul>
  );
};

export default List;
