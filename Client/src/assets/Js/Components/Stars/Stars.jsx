import React from "react";
import "./Stars.css";

function Stars(props) {
  const totalStars = 5;
  const activeStars = props.rate;

  return (
    <React.Fragment>
      <div className="stars">
        {[...new Array(totalStars)].map((arr, index) => {
          return index < activeStars ? (
            <i className="fa-solid fa-star" key={index}></i>
          ) : (
            <i className="fa-regular fa-star" key={index}></i>
          );
        })}
        <p>({props.rate_Count})</p>
      </div>
    </React.Fragment>
  );
}
export default Stars;
