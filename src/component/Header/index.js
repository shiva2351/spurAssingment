import { HiMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./index.css";

const Header = () => {
  console.log("header");

  return (
    <nav className="Header">
      <ul className="Header-list">
        <li className="Header-list-menu">
          <HiMenuAlt2 />
          <h1>Dribbble</h1>
        </li>
        <li>
          <FiSearch />
          <button type="button">Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
