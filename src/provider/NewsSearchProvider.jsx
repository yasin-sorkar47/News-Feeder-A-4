import { newsSearchContext } from "../context";
import useNewsSearch from "../hooks/useNewssearch";

const NewsSearchProvider = ({ children }) => {
  const { selectedItem, setTerm, term } = useNewsSearch();
  return (
    <newsSearchContext.Provider value={{ selectedItem, setTerm, term }}>
      {children}
    </newsSearchContext.Provider>
  );
};

export default NewsSearchProvider;
