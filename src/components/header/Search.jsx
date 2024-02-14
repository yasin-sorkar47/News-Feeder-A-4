import { useContext } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import { newsSearchContext } from "../../context";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
  const { selectedItem, setTerm } = useContext(newsSearchContext);

  const doSearch = useDebounce((term) => {
    setTerm(term);
    selectedItem.length = 0;
  }, 1000);

  function changeHandler(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <form className="flex items-center space-x-3 lg:space-x-8" action="">
        <input
          onChange={changeHandler}
          className=" bg-gray-200 outline-none border border-gray-500 mr-[-55px]"
          type="text"
        />
        <img src={SearchIcon} />
      </form>
    </div>
  );
}
