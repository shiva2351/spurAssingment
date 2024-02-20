import { Component } from "react";
import Header from "../Header";
import ProHeader from "../ProHeader";
import Footer from "../Footer";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div>
          <ProHeader />
          <div className="Home-anime">home</div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
