import React from "react";
import CartProducts from "./Cart-products";

const Cart = () => {


  const cartProductsList = [
    {
      imgUrl: "/images/product-images-row2-home-page/product1.jpg",
      productName: "YONEX Nanoray Light 18i Graphite Badminton Racquet (Black)",
      inStock: true,
      price: 44.0,
    },
    {
      imgUrl: "/images/product-images-row2-home-page/product2.jpg",
      productName: "YONEX Nanoray Light 18i Graphite Badminton Racquet (Black)",
      inStock: true,
      price: 44.0,
    },
  ];

  const totalPrice = () => {
    let total = 0;
    cartProductsList.forEach((obj) => {
      total += obj.price;
    });
    return total;
  };

  return (
    <div className="mx-3 mt-5">
      <div className="row">
        
        <div className="col col-md-9">
          <div className="bg-white px-3 pt-4 pb-4">
            <h2 className="fw-semibold">Shopping Cart</h2>
            <CartProducts cartProductsList={cartProductsList} />
            <hr />
            <p className="text-end pe-3">
              Subtotal {cartProductsList.length} item's :{" "}
              <span className="fw-bold">${totalPrice()}</span>
            </p>
          </div>
        </div>

        <div className="col col-md-3">
          <div className="bg-white p-3">
            <small>
              Part of your order qualifies for FREE Shipping. Choose this option
              at checkout. See details
            </small>
            <p className="fs-5">
              Subtotal {cartProductsList.length} item's :{" "}
              <span className="fw-bold">${totalPrice()}</span>
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                This order contains a gift
              </label>
            </div>
            <button className="w-100 btn btn-sm btn-warning rounded mb-3 mt-2">
              Proceed to checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
