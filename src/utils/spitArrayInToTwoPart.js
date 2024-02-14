import { useContext } from "react";
import { newsContext } from "../context";

const SpitArrayInTwoPart = () => {
  const { newsData } = useContext(newsContext);
  const midIndex = Math.floor(newsData.length / 2);
  const firstPart = newsData.slice(0, midIndex);
  const secondPart = newsData.slice(midIndex);

  return {
    firstPart,
    secondPart,
  };
};

export default SpitArrayInTwoPart;
