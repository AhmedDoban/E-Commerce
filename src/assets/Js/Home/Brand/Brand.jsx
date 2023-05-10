import React, { useState, useEffect } from "react";
import { Brands_data } from "../../../../dummyData";
import "./Brand.css";
import LoadingFetchData from './../../Components/Loading Fetch Data/LoadingFetchData';

function Brand() {
  const [Brands, SetBrands] = useState([]);
  useEffect(() => {
    SetBrands(Brands_data);
  }, []);
  
  return (
    <React.Fragment>
      <div
        className="Brand"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          {Brands.length > 0 ? (
            <React.Fragment>
              <h1>Choose By Brand</h1>
              <div className="cards-container">
                {Brands.map((Brand, index) => (
                  <div className="card" key={index}>
                    <div className="left">
                      <img src={Brand.Brands_img} alt="Brand " />
                    </div>
                    <div className="right">
                      <h1>{Brand.Brands_name}</h1>
                      <p>{Brand.Brands_Des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ) : (
            <LoadingFetchData />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Brand;
