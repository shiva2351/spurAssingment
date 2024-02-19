import { IoClose } from "react-icons/io5";
import "./index.css";

const Footer = () => {
  console.log("footer");
  return (
    <nav className="Footer">
      <ul>
        <li>
          <h1>
            Design<span>|dfjdkfj|</span> september
          </h1>
          <button type="button">checkout</button>
        </li>
        <li>
          <button type="button">
            <IoClose />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
