import React from "react";
import "./Home.css";
import HomeCarousel from "./Home-carousel";
import RowOne from "./Row-one";
import RowTwo from "./Row-two";

function Home() {
  return (
    <>
      <div className="z-1 position-absolute">
        <HomeCarousel />
      </div>
      <div className="row-one-margin-top z-2 position-absolute mx-4">
        <RowOne />
      </div>
      <div className="row-two-margin-top">
        <RowTwo />
      </div>
      <RowTwo />
      <div className="mt-4 mx-4">
        <RowOne />
      </div>
      <RowTwo />
      <RowTwo />
      <div className="mt-4 mx-4">
        <RowOne />
      </div>
      <RowTwo />
    </>
  );
}

export default Home;
