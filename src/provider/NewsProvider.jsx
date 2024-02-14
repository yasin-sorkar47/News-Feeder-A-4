import { newsContext } from "../context";
import useNewsQuery from "../hooks/useNewsQuery ";
export default function NewsProvider({ children }) {
  const { newsData, loading, error, setCategory } = useNewsQuery();
  return (
    <newsContext.Provider value={{ newsData, loading, error, setCategory }}>
      {children}
    </newsContext.Provider>
  );
}
