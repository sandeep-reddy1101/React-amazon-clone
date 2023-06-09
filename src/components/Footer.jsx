import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div>
      <div className="mt-3">
        <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{backgroundColor: "#6351ce"}}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="https://facebook.com/" className="text-white me-4">
              <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com/" className="text-white me-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://google.com/" className="text-white me-4">
                <i className="bi bi-google"></i>
              </a>
              <a href="https://instagram.com/" className="text-white me-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com/" className="text-white me-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/" className="text-white me-4">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <a href="https://mdbootstrap.com/" className="text-white">
                      MDBootstrap
                    </a>
                  </p>
                  <p>
                    <a href="https://mdbootstrap.com/" className="text-white">
                      MDWordPress
                    </a>
                  </p>
                  <p>
                    <a href="https://mdbootstrap.com/" className="text-white">
                      BrandFlow
                    </a>
                  </p>
                  <p>
                    <a href="https://mdbootstrap.com/" className="text-white">
                      Bootstrap Angular
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <Link to={"/"} className="text-white">
                      Your Account
                    </Link>
                  </p>
                  <p>
                  <Link to={"/"} className="text-white">
                      Become an affiliate
                    </Link>
                  </p>
                  <p>
                  <Link to={"/"} className="text-white">
                      Shipping rates
                    </Link>
                  </p>
                  <p>
                  <Link to={"/"} className="text-white">
                      Help
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
