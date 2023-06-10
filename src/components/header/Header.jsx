import React from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { Search } from "./Search";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-dark text-white border-bottom border-bottom-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand ms-3" to={"/"}>
          e-Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex flex-column mx-2 lh-1">
            <span className="ps-3 navbar-links-font-size">Hello</span>
            <i className="bi bi-geo-alt pe-2">
              <span className="fw-semibold fst-normal">
                Select your location
              </span>
            </i>
          </div>
          <Search />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown mx-2 pt-3">
              <button
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                <Link className="dropdown-item" to={"/"}>
                    Another
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/"}>
                    Another action
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item  mx-2">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <div className="d-flex flex-column lh-1 pt-2">
                  <span className="navbar-links-font-size">Hello, Sign in</span>
                  <span className="fw-semibold">Accounts & List</span>
                </div>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to={"/"}>
                <div className="d-flex flex-column lh-1 pt-2">
                  <span className="navbar-links-font-size">Returns</span>
                  <span className="fw-semibold">& Orders</span>
                </div>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to={"/cart"}>
                <div>
                  <i className="bi bi-cart3 fs-2 text-warning"></i>
                  <span className="fw-semibold">Cart</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
