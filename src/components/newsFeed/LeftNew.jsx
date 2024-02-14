import { Fragment, useContext } from "react";
import { newsContext, newsSearchContext } from "../../context";
import dateFormat from "../../utils/dateFormat";
import { getImageRandomly } from "../../utils/randomImage";
import SpitArrayInTwoPart from "../../utils/spitArrayInToTwoPart";

export default function LeftNews() {
  const { newsData } = useContext(newsContext);
  const { selectedItem, term } = useContext(newsSearchContext);
  const { newArray, confirmImage } = getImageRandomly(newsData);
  const { firstPart } = SpitArrayInTwoPart();
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {selectedItem.length === 0 ? (
        <>
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                  {newArray?.title ? newArray?.title : newsData[0]?.title}
                </h3>
              </a>
              <p className="text-base text-[#5C5955]">
                {newArray?.description}
              </p>
              <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <img
                className="w-full"
                src={newArray?.urlToImage ? newArray?.urlToImage : confirmImage}
                alt="thumb"
              />
              <p className="mt-5 text-base text-[#5C5955]">
                {newArray?.source.name}
              </p>
            </div>
          </div>

          {firstPart.map((item) => (
            <Fragment key={item.title}>
              <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
                <div className="col-span-12 md:col-span-6">
                  <a href="">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#5C5955]">
                    {dateFormat(item?.publishedAt)}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <img
                    className="w-full"
                    src={item.urlToImage ? item.urlToImage : confirmImage}
                    alt="thumb"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="col-span-12 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
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
            </Fragment>
          ))}
        </>
      ) : (
        <>
          {term === newArray?.title ? (
            <div className="col-span-12 grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                    {newArray?.title}
                  </h3>
                </a>
                <p className="text-base text-[#5C5955]">
                  {newArray?.description}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">
                  {dateFormat(newArray?.publishedAt)}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <img className="w-full" src={confirmImage} alt="thumb" />
                <p className="mt-5 text-base text-[#5C5955]">
                  {newArray?.source.name}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {selectedItem.map((item) => (
            <Fragment key={item.title}>
              <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
                <div className="col-span-12 md:col-span-6">
                  <a href="">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#5C5955]">
                    {dateFormat(item?.publishedAt)}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <img
                    className="w-full"
                    src={item.urlToImage ? item.urlToImage : confirmImage}
                    alt="thumb"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="col-span-12 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
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
            </Fragment>
          ))}
        </>
      )}
    </div>
  );
}
