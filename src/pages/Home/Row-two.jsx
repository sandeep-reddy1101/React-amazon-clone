import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RowTwo = () => {
  const rowTwoData = [
    { imgUrl: "images/product-images-row2-home-page/product1.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product2.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product3.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product4.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product5.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product6.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product7.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product8.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product9.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product10.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product11.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product12.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product13.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product14.jpg" },
    { imgUrl: "images/product-images-row2-home-page/product15.jpg" },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="row-two mx-4 mt-4">
      {/* <h3 className="fw-bold pt-3 ps-3">Explore more items</h3>
      <div className="carousel mx-3">
        {rowTwoData.map((obj, key) => {
          return <img className="px-2" key={key} src={obj.imgUrl} alt={key} />;
        })}
      </div> */}
      <div>
      <h3 className="fw-bold pt-3 ps-3">Explore more items</h3>
        <Carousel className="mx-3" responsive={responsive}>
        {rowTwoData.map((obj, key) => {
          return <img className="px-2" key={key} src={obj.imgUrl} alt={key} />
        })}
        </Carousel>
      </div>
    </div>
  );
};

export default RowTwo;
