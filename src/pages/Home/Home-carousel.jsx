import React from "react";
import "./Home.css";

const HomeCarousel = () => {
  const imgList = [
    "images/carousel-image-2.jpg",
    "images/carousel-image-3.jpg",
    "images/carousel-image-4.jpg",
    "images/carousel-image-5.jpg",
  ];
  return (
    <div id="carouselExample" className="carousel slide px-2">
      <div className="carousel-inner">
        {imgList.map((imgURL, key) => {
          return (
            <div key={key} className={key === 0 ? "carousel-item active" : "carousel-item"} id="carousel-image">
              <img src={imgURL} className="d-block home_image" alt={key} />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;
