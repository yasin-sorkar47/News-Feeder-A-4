import { useContext } from "react";
import { newsSearchContext } from "../../context";
import NoDataFound from "../NoDataFound";
import LeftNews from "./LeftNew";
import RightNews from "./RightNews";

export default function NewsFeed() {
  const { selectedItem, term } = useContext(newsSearchContext);
  const isTerm = !!term;
  return (
    <>
      {isTerm && selectedItem.length === 0 ? (
        <NoDataFound />
      ) : (
        <main className="my-10 lg:my-14">
          <div className="container mx-auto grid grid-cols-12 gap-8">
            <LeftNews />
            <RightNews />
          </div>
        </main>
      )}
    </>
  );
}
