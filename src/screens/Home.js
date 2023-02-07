import React from "react";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <div>
        <Navbars />
      </div>
      <div>
        <Carousel/>
      </div>
      <div className="m-3">
        <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
