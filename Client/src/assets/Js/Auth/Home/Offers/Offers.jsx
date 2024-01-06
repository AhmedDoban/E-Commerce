import React from "react";
import "./Offers.css";

function Offers() {
  return (
    <React.Fragment>
      <div
        className="Offers"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <h1>Get Up To 70% Off</h1>
          <div className="card-container">
            <div className="card">
              <div className="header">
                <h1>Save</h1>
                <p className="Price">100</p>
                <span>Explore Our Furniture & Home Furnishing Range</span>
              </div>
              <div className="footer">
                <img
                  src={require("../../../../imgs/Offers/Offers(1).png")}
                  alt="Offers"
                />
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h1>Save</h1>
                <p className="Price">29</p>
                <span>Explore Our Furniture & Home Furnishing Range</span>
              </div>
              <div className="footer">
                <img
                  src={require("../../../../imgs/Offers/Offers(4).png")}
                  alt="Offers"
                />
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h1>Save</h1>
                <p className="Price">67</p>
                <span>Explore Our Furniture & Home Furnishing Range</span>
              </div>
              <div className="footer">
                <img
                  src={require("../../../../imgs/Offers/Offers(3).png")}
                  alt="Offers"
                />
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h1>Save</h1>
                <p className="Price">59</p>
                <span>Explore Our Furniture & Home Furnishing Range</span>
              </div>
              <div className="footer">
                <img
                  src={require("../../../../imgs/Offers/Offers(2).png")}
                  alt="Offers"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Offers;
