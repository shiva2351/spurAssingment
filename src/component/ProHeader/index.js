import { HiMenuAlt2 } from "react-icons/hi";
import { CiSaveUp2 } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

import "./index.css";

const ProHeader = () => {
  console.log("Proheader");

  return (
    <nav className="proHeader">
      <ul className="proHeader-list">
        <li className="proHeader-list-menu">
          <img
            className="image-pro"
            alt="profile"
            src="https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"
          />
          <HiMenuAlt2 />
          <h1>Dribbble</h1>
        </li>
        <li>
          <FcLike />
          <CiSaveUp2 />
          <button type="button">Get in touch</button>
        </li>
      </ul>
    </nav>
  );
};

export default ProHeader;
