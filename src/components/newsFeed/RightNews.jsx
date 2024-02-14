import { useContext } from "react";
import { newsContext, newsSearchContext } from "../../context";
import dateFormat from "../../utils/dateFormat";
import { getImageRandomly } from "../../utils/randomImage";
import SpitArrayInTwoPart from "../../utils/spitArrayInToTwoPart";
export default function RightNews() {
  const { newsData } = useContext(newsContext);
  const { selectedItem } = useContext(newsSearchContext);
  const { confirmImage } = getImageRandomly(newsData);
  const { secondPart } = SpitArrayInTwoPart();

  return (
    <div className="col-span-12 self-start xl:col-span-4">
      {selectedItem.length === 0 ? (
        <>
          {secondPart?.map((item) => (
            <div
              key={item.title}
              className="space-y-6 divide-y-2 divide-[#D5D1C9]"
            >
              <div className="col-span-12 mb-6 md:col-span-8">
                <img
                  className="w-full"
                  src={item?.urlToImage ? item?.urlToImage : confirmImage}
                  alt="thumb"
                />

                <div className="col-span-12 mt-6 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {dateFormat(item?.publishedAt)}
                  </p>
                </div>
              </div>

              <div key={item?.title} className="col-span-12 md:col-span-8">
                <div className="col-span-12 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {dateFormat(item?.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {selectedItem?.map((item) => (
            <div
              key={item.title}
              className="space-y-6 divide-y-2 divide-[#D5D1C9]"
            >
              <div className="col-span-12 mb-6 md:col-span-8">
                <img
                  className="w-full"
                  src={item?.urlToImage ? item?.urlToImage : confirmImage}
                  alt="thumb"
                />

                <div className="col-span-12 mt-6 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {dateFormat(item?.publishedAt)}
                  </p>
                </div>
              </div>

              <div key={item?.title} className="col-span-12 md:col-span-8">
                <div className="col-span-12 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {dateFormat(item?.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
