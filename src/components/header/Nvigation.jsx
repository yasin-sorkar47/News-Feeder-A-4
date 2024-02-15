import { useContext } from "react";
import { newsContext } from "../../context";

export default function Navigation() {
  const { setCategory } = useContext(newsContext);

  function handleClick(e) {
    setCategory(e.target.innerText.toLowerCase());
  }
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a href="#" className=" cursor-pointer" onClick={handleClick}>
            General
          </a>
        </li>
        <li>
          <a href="#" className=" cursor-pointer" onClick={handleClick}>
            Business
          </a>
        </li>
        <li>
          <a href="#" className=" cursor-pointer" onClick={handleClick}>
            Entertainment
          </a>
        </li>
        <li>
          <a href="#" className=" cursor-pointer" onClick={handleClick}>
            Health
          </a>
        </li>
        <li>
          <a href="#" className=" cursor-pointer" onClick={handleClick}>
            Science
          </a>
        </li>
        <li>
          <a className=" cursor-pointer" onClick={handleClick}>
            Sports
          </a>
        </li>
        <li>
          <a href="#" className=" cursor-pointer" onClick={handleClick}>
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}
