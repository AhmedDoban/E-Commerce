import React from "react";
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
      </div>
    </React.Fragment>
  );
}
export default Stars;
