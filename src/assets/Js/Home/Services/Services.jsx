import React from "react";
import "./Services.css";

function Services() {
  return (
    <React.Fragment>
      <div
        className="Services"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <h1>Trending Products For You!</h1>
          <div className="cards-container">
            <div className="card">
              <div className="header">
                <h5>
                  Frequently Asked <br />
                  Questions
                </h5>
                <p>Updates on safe Shopping in our Stores</p>
              </div>
              <div className="footer">
                <img
                  src={require("../../../imgs/Services/Services(1).png")}
                  alt="1"
                />
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h5>
                  Online Payment <br />
                  Process
                </h5>
                <p>Updates on safe Shopping in our Stores</p>
              </div>
              <div className="footer">
                <img
                  src={require("../../../imgs/Services/Services(2).png")}
                  alt="2"
                />
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h5>
                  Home Delivery <br />
                  Options
                </h5>
                <p>Updates on safe Shopping in our Stores</p>
              </div>
              <div className="footer">
                <img
                  src={require("../../../imgs/Services/Services(3).png")}
                  alt="3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Services;
