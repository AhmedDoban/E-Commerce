import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FilterProducts() {
  const Category = useSelector((state) => state.Products.Category);
  const Dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="FilterProducts">
        <div className="Filter"></div>
        <div className="action">
          <input type="search" name="Search" id="Search" />
          <button>Search</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default FilterProducts;
