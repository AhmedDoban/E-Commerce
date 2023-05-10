import React from "react";
import Header from "../Components/Header/Header";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const params = useParams();
  console.log(params);
  return (
    <React.Fragment>
      <Header />
      <div className="ProductDetails">
        <div className="container">proudact 1</div>
      </div>
    </React.Fragment>
  );
}
export default ProductDetails;
