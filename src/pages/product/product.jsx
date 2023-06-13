import React from "react";
import "./Product.css";
import { useParams } from "react-router-dom"

const Product = () => {

    const { id } = useParams();

  const productInfo = {
    id: 1,
    imgUrl: "/images/product-images/image-2.jpg",
    productName: "YONEX Nanoray Light 18i Graphite Badminton Racquet (Black)",
    inStock: true,
    price: 44.0,
    brand: "Yonex",
    rating: 4,
    noOfRatings: 556,
    description: [
      "The combination of close-to-feather shuttlecock flight performance and four to five times more durability than an ordinary nylon shuttlecock makes the Yonex Mavis series the most cost-effective choice for practice sessions",
      "When smashed, a Mavis shuttlecock recovers in only 0.02 seconds, this performance is just 0.005 seconds slower than a Yonex feather shuttlecock and 0.008 seconds faster than the recovery of an ordinary shuttlecock",
      "Players should always use the shuttlecocks best suited to the playing environment, in the cold, as the skirt becomes hard, it is prone to breaking, in the hot, the skirt becomes softer and less likely to break, but the feel at impact is affected by the softer skirt",
      "Yonex manages product quality by categorising Mavis into 3 temperatures, please ensure that you choose the shuttlecock best suited to the playing environment",
      "Shuttlecocks should be stored away from high temperatures and the tube kept upright with the cork side of the shuttlecock facing down",
    ],
  };

  return (
    <div className="bg-white mx-3">
      <div className="row pt-4">

        {/* Thumbnail images of the product */}
        <div className="col col-md-1">
          <div className="px-3">
            <div className="row mb-2 product-thumbnail-image">
              <div className="col">
                <img
                  className="img-thumbnail"
                  src={productInfo.imgUrl}
                  alt="abc"
                />
              </div>
            </div>
            <div className="row mb-2 product-thumbnail-image">
              <div className="col">
                <img
                  className="img-thumbnail"
                  src={productInfo.imgUrl}
                  alt="abc"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image of the product */}
        <div className="col col-md-4">
          <div className="px-3">
            <img
              className="img-fluid product_image"
              src={productInfo.imgUrl}
              alt={productInfo.productName}
            />
          </div>
        </div>

        {/* Detail information of the product */}
        <div className="col col-md-4">
          <div className="lh-1">
            <h2 className="fw-semibold fs-4">{productInfo.productName}</h2>
            <p className="text-primary">
              <span>Brand : </span>
              {productInfo.brand}
            </p>
            <p>
              <span>{productInfo.rating}</span>
              <span className="text-primary mx-2 ps-3">
                {productInfo.noOfRatings} ratings
              </span>
            </p>
          </div>
          <hr />
          <h3>${productInfo.price}</h3>
          <ul>
            {productInfo.description.map((info, key) => {
              return <li key={key}>{info}</li>;
            })}
          </ul>
          <hr />
        </div>

        <div className="col col-md-3 px-4 pt-4">
          <div className="card rounded">
            <div className="card-body">
              <h3>${productInfo.price}</h3>
              <button className="btn btn-sm btn-warning w-100 rounded mb-2">
                Add to cart
              </button>
              <button
                className="btn btn-sm w-100 rounded"
                style={{ backgroundColor: "orange" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
