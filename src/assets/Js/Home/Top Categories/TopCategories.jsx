import React, { useState, useEffect } from "react";
import "./TopCategories.css";
import { Categories_data } from "../../../../dummyData";

function TopCategories() {
  const [Categories, SetCategorie] = useState([]);
  useEffect(() => {
    SetCategorie(Categories_data);
  }, []);

  return (
    <React.Fragment>
      <div
        className="TopCategories"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <h1>Shop Our Top Categories</h1>
          <div className="cards-container">
            {Categories.map((Categorie, index) => (
              <div className="card" key={index}>
                <h5>{Categorie.Categorie_name}</h5>
                <img src={Categorie.Categorie_img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TopCategories;
