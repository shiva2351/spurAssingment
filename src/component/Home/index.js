import { Component } from "react";
import Header from "../Header";
import ProHeader from "../ProHeader";
import Footer from "../Footer";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Home-content">
          <div>
            <ProHeader />
            <div>home</div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
