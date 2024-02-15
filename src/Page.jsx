import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import NewsFeed from "./components/newsFeed/NewsFeed";
import { newsContext } from "./context";

export default function Page() {
  const { loading } = useContext(newsContext);
  return (
    <>
      <Header />
      {loading.status ? (
        <div className="flex justify-center mt-6">
          <p className=" text-3xl p-4 bg-gray-500 rounded">{loading.message}</p>
        </div>
      ) : (
        <>
          <NewsFeed />
        </>
      )}
      <Footer />
    </>
  );
}
