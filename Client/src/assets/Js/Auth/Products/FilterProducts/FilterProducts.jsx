import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandelSearch } from "../../../Toolkit/Slice/ProductsSlice";
import "./FilterProducts.css";

function FilterProducts() {
  const Category = useSelector((state) => state.Products.Category);
  const Dispatch = useDispatch();
  const [SearchInput, SetSearchInput] = useState("");

  useEffect(() => {
    Dispatch(HandelSearch(SearchInput));
  }, [SearchInput]);

  return (
    <React.Fragment>
      <div className="FilterProducts">
        <div className="Filter"></div>
        <div className="action">
          <input
            type="search"
            name="Search"
            id="Search"
            value={SearchInput}
            placeholder="Search Product"
            onChange={(e) => SetSearchInput(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default FilterProducts;
