import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <React.Fragment>
      <div className="lading">
        <div className="container">
          <div className="left">
            <h1
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
            >
              Shopping And
              <br />
              Department Store.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
            >
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance
            </p>
            <Link
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-out"
            >
              Learn More
            </Link>
          </div>
          <div className="right">
            <img
              src={require("../../../imgs/Landing/Landing(1).png")}
              alt="Landing_1"
              className="Landing_1"
            />
            <img
              src={require("../../../imgs/Landing/Landing(2).png")}
              alt="Landing_2"
              className="Landing_2"
            />
            <img
              src={require("../../../imgs/Landing/Landing(3).png")}
              alt="Landing_3"
              className="Landing_3"
            />
            <img
              src={require("../../../imgs/Landing/Landing(4).png")}
              alt="Landing_4"
              className="Landing_4"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Landing;
