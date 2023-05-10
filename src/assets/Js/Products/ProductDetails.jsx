import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const params = useParams();
  const [prolduct, SetProudact] = useState([]);

  useEffect(() => {
    const fetchdata = (async) => {
      try {
        axios
          .get(`https://fakestoreapi.com/products/${params.productId}`)
          .then((data) => SetProudact(data.data));
      } catch (err) {
        throw err;
      }
    };
    fetchdata();
  }, []);
  console.log(prolduct);
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
