import React from "react";
import { Link } from "react-router-dom";

const CartProducts = (_props) => {
  const cartProductsList = _props.cartProductsList;

  return (
    <div>
      {cartProductsList.length > 0 &&
        cartProductsList.map((product, key) => {
          return (
            <>
              <hr />
              <div className="row" key={key}>
                <div className="col col-md-2">
                  <img
                    className="img-fluid w-100"
                    src={product.imgUrl}
                    alt={product.productName}
                  />
                </div>
                <div className="col col-md-8">
                  <h4 className="fw-semibold fs-5">{product.productName}</h4>
                  <div>
                    {product.inStock ? (
                      <small className="text-success">In Stock</small>
                    ) : (
                      <small className="text-danger">Not in stock</small>
                    )}
                  </div>
                  <p>
                    <small>Eligible for FREE Shipping & FREE Returns</small>
                  </p>

                  <select
                    className="form-select d-inline"
                    aria-label="Default select example"
                    style={{ width: "100px" }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, key) => {
                      return (
                        <option key={key} value={value}>
                          Qty: {value}
                        </option>
                      );
                    })}
                  </select>
                  <div className="d-inline ms-2">
                    <div className="vr"></div>
                    <Link>
                      <small className="mx-2">Delete</small>
                    </Link>
                    <div className="vr"></div>
                    <Link>
                      <small className="mx-2">Save for later</small>
                    </Link>
                    <div className="vr"></div>
                    <Link>
                      <small className="mx-2">Share</small>
                    </Link>
                  </div>
                </div>
                <div className="col col-md-2">
                    <p className="text-end fw-bold pe-3">${product.price}</p>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default CartProducts;
