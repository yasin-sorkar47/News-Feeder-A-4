import { useEffect, useState } from "react";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState(null);

  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchNewsFeedData = async (category) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "News Data is fetching...",
      });
      let response;
      if (category) {
        response = await fetch(
          `http://localhost:8000/v2/top-headlines?category=${category}`
        );
      } else {
        response = await fetch("http://localhost:8000/v2/top-headlines");
      }

      if (!response.ok) {
        const message = `News Data fetching is failed ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      const upDataNewsData = data.articles;

      setNewsData(upDataNewsData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      status: true,
      message: "finding Data...",
    });

    if (category) {
      fetchNewsFeedData(category);
    } else {
      fetchNewsFeedData();
    }
  }, [category]);

  return {
    newsData,
    loading,
    error,
    setCategory,
  };
};

export default useNewsQuery;
