import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandelSearch } from "../../../Toolkit/Slice/ProductsSlice";
import "./FilterProducts.css";
import { Select } from "react-dropdown-select";

function FilterProducts() {
  const Category = useSelector((state) => state.Products.Category);
  const Search = useSelector((state) => state.Products.Search);
  const Dispatch = useDispatch();
  const [SearchInput, SetSearchInput] = useState(Search);

  const [Value, SetValue] = useState({
    CategoryFilter: "",
    StarRate: "",
    Min: "",
    Max: "",
  });

  const CategoryOptions = Category.map((item) => ({
    label: <div className="CategoryFilter">{item}</div>,
    value: item,
  }));

  const StarRate = [
    {
      label: (
        <div className="StarRateFilter">
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star" />
          <i class="fa-solid fa-star" />
          <i class="fa-solid fa-star" />
          <i class="fa-solid fa-star" />
        </div>
      ),
      value: 1,
    },
    {
      label: (
        <div className="StarRateFilter">
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star" />
          <i class="fa-solid fa-star" />
          <i class="fa-solid fa-star" />
        </div>
      ),
      value: 2,
    },
    {
      label: (
        <div className="StarRateFilter">
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star" />
          <i class="fa-solid fa-star" />
        </div>
      ),
      value: 3,
    },
    {
      label: (
        <div className="StarRateFilter">
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star " />
        </div>
      ),
      value: 4,
    },
    {
      label: (
        <div className="StarRateFilter">
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
          <i class="fa-solid fa-star active" />
        </div>
      ),
      value: 5,
    },
  ];

  useEffect(() => {
    Dispatch(HandelSearch(SearchInput));
  }, [SearchInput]);

  return (
    <React.Fragment>
      <div className="FilterProducts">
        <div className="Filter">
          <Select
            options={CategoryOptions}
            onChange={(OptionValue) =>
              SetValue({
                ...Value,
                CategoryFilter:
                  OptionValue[0] === undefined ? "" : OptionValue[0].value,
              })
            }
            placeholder="Select an Category"
            multi={false}
            dropdownPosition="auto"
            separator={false}
            className="SelectELEMENT"
            clearable={true}
          />
          <Select
            options={StarRate}
            onChange={(OptionValue) =>
              SetValue({ ...Value, StarRate: OptionValue[0].value })
            }
            placeholder="Select an Star Rate"
            dropdownPosition="auto"
            separator={false}
            className="SelectELEMENT"
            searchBy="value"
          />
          <div className="input-box">
            <input
              type="number"
              placeholder="MIN"
              value={Value.Min}
              onChange={(e) => SetValue({ ...Value, Min: e.target.value })}
              min={0}
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="MAX"
              value={Value.Max}
              onChange={(e) => SetValue({ ...Value, Max: e.target.value })}
              min={1}
            />
          </div>
        </div>
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
