"use client";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./page.scss";

const Home = () => {
  return (
    <div className="container">
      <AwesomeSlider>
        <div className="item" data-src="/1.jpg" />
        <div className="item" data-src="/1.jpg" />
        <div className="item" data-src="/1.jpg" />
      </AwesomeSlider>
    </div>
  );
};

export default Home;
