import React from "react";

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
            <div key={key} className="carousel-item active">
              <img src={imgURL} className="d-block w-100" alt={key} />
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
