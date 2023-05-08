import React from "react";
import "./Brand.css";

function Brand() {
  return (
    <React.Fragment>
      <div
        className="Brand"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <h1>Choose By Brand</h1>
          <div className="cards-container">
            <div className="card">
              <div className="left">
                <img
                  src={require("../../../imgs/Brand/Brand(1).png")}
                  alt="Brand "
                />
              </div>
              <div className="right">
                <h1>Target</h1>
                <p>Delivery with in 24 hours</p>
              </div>
            </div>
            <div className="card">
              <div className="left">
                <img
                  src={require("../../../imgs/Brand/Brand(2).png")}
                  alt="Brand "
                />
              </div>
              <div className="right">
                <h1>Grocery outlet</h1>
                <p>Delivery with in 24 hours</p>
              </div>
            </div>
            <div className="card">
              <div className="left">
                <img
                  src={require("../../../imgs/Brand/Brand(3).png")}
                  alt="Brand "
                />
              </div>
              <div className="right">
                <h1>Bevmo!</h1>
                <p>Delivery with in 24 hours</p>
              </div>
            </div>
            <div className="card">
              <div className="left">
                <img
                  src={require("../../../imgs/Brand/Brand(4).png")}
                  alt="Brand "
                />
              </div>
              <div className="right">
                <h1>Sprouts</h1>
                <p>Delivery with in 24 hours</p>
              </div>
            </div>
            <div className="card">
              <div className="left">
                <img
                  src={require("../../../imgs/Brand/Brand(5).png")}
                  alt="Brand "
                />
              </div>
              <div className="right">
                <h1>Mollie stones</h1>
                <p>Delivery with in 24 hours</p>
              </div>
            </div>
            <div className="card">
              <div className="left">
                <img
                  src={require("../../../imgs/Brand/Brand(6).png")}
                  alt="Brand "
                />
              </div>
              <div className="right">
                <h1>Container Store</h1>
                <p>Delivery with in 24 hours</p>
              </div>
            </div>
            <div className="card">
              <div className="left">
                <img
                  src={require("../../../imgs/Brand/Brand(7).png")}
                  alt="Brand "
                />
              </div>
              <div className="right">
                <h1>Staples</h1>
                <p>Delivery with in 24 hours</p>
              </div>
            </div>
            <div className="card">
              <div className="left">
                <img
                  src={require("../../../imgs/Brand/Brand(8).png")}
                  alt="Brand "
                />
              </div>
              <div className="right">
                <h1>Sports Basement</h1>
                <p>Delivery with in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Brand;
