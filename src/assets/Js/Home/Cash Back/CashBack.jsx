import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./CashBack.css";
function CashBack() {
  const BackGroundCash = useRef();
  const [scale, setScale] = useState(1);

  const handleWeal = (e) => {
    if (e.deltaY >= 0) {
      if (scale < 1.5 && scale >= 1) {
        setScale(scale + 0.5);
        BackGroundCash.current.style.cssText = `transform: scale(${scale});`;
      }
    } else if (e.deltaY <= 0) {
      if (scale >= 1.5 && scale >= 1) {
        setScale(scale - 0.5);
        BackGroundCash.current.style.cssText = `transform: scale(${scale});`;
      }
    }
  };

  return (
    <React.Fragment>
      <div className="CashBack" onWheel={(e) => handleWeal(e)}>
        <img
          src={require("../../../imgs/CashBack.png")}
          alt="background"
          className="backgroud-img"
          ref={BackGroundCash}
        />
        <div className="container">
          <div className="card">
            <h1>Get 5% Cash Back On $200</h1>
            <p>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </p>
            <Link> Learn More</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CashBack;
