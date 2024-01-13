import React, { useState, useEffect } from "react";
import "./BestSelling.css";
import { Best_Selling_Data } from "../../../../../dummyData";

function BestSelling() {
  const [Data, SetData] = useState([]);
  useEffect(() => {
    SetData(Best_Selling_Data);
  }, []);
  return (
    <React.Fragment>
      <div className="BestSelling" data-aos="fade-up">
        <div className="container">
          <h1>Best Selling Store</h1>
          <div className="cards-container">
            {Data.map((item, index) => (
              <div className="card" key={index}>
                <div className="header">
                  <img
                    src={item.BestSelling_arrive_img}
                    alt={item.BestSelling_name}
                  />
                </div>

                <div className="footer">
                  <div className="logo">
                    <img
                      src={item.BestSelling_arrive_logo}
                      alt={item.BestSelling_name}
                    />
                  </div>
                  <h5>{item.BestSelling_name}</h5>
                  <p>{item.BestSelling_arrive_contain}</p>
                  <span>
                    <i className="fa-solid fa-tag"></i>
                    {item.BestSelling_arrive_time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default BestSelling;
