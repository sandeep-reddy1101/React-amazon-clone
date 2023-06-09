import ImageActionCard from "./cards/Image-action-card";
import React from "react";

const RowOne = () => {
  const rowOneData = [
    {
      title: "Hydrate all summer",
      imgURL: "images/image-3.jpg",
      ctaText: "see more",
      ctaUrl: "/",
    },
    {
      title: "Heading two",
      imgURL: "images/image-4.jpg",
      ctaText: "see all details",
      ctaUrl: "/",
    },
    {
      title: "Heading three",
      imgURL: "images/image-5.jpg",
      ctaText: "discover all products",
      ctaUrl: "/",
    },
    {
      title: "Heading four",
      imgURL: "images/image-6.jpg",
      ctaText: "see more",
      ctaUrl: "/",
    },
  ];

  return (
    <div className="row row-one">
      {rowOneData.map((cardData, key) => {
        return (
          <div key={key} className="col col-md-3">
            <ImageActionCard cardObj={cardData} />
          </div>
        );
      })}
    </div>
  );
};

export default RowOne;
