import { useEffect, useState } from "react";

const useNewsSearch = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchSearchData = async (term) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Search Data is Finding...",
      });
      let response;
      if (term) {
        response = await fetch(`http://localhost:8000/v2/search?q=${term}`);
      } else {
        console.log("the result is failed");
      }

      if (!response.ok) {
        const message = `Searching is failed ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      let updateSearchData = data.result;

      setSelectedItem(updateSearchData);
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
    if (term) {
      fetchSearchData(term);
    }
  }, [term]);

  return {
    selectedItem,
    term,
    error,
    setTerm,
  };
};

export default useNewsSearch;
