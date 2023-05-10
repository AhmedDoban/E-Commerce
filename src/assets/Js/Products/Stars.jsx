import React from "react";
function Stars(props) {
  const totalStars = 5;
  const activeStars = props.rate;

  return (
    <React.Fragment>
      <div className="stars">
        {[...new Array(totalStars)].map((arr, index) => {
          return index < activeStars ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          );
        })}
      </div>
    </React.Fragment>
  );
}
export default Stars;
