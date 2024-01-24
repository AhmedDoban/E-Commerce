import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_All_Products,
  HandelFilter,
  ResetCurrentPage,
} from "../../../Toolkit/Slice/ProductsSlice";
import "./FilterProducts.css";
import { Select } from "react-dropdown-select";

function FilterProducts() {
  const Category = useSelector((state) => state.Products.Category);
  const Search = useSelector((state) => state.Products.Filter.Search);
  const Dispatch = useDispatch();
  const [ShowFilter, SetShowFilter] = useState(true);

  const [Filter, SetFilter] = useState({
    Search: Search,
    Min: "",
    Max: "",
    StarRate: "",
    CategoryFilter: "",
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
    Dispatch(HandelFilter(Filter));
  }, [Filter]);

  return (
    <React.Fragment>
      <div className="FilterProducts">
        {ShowFilter && (
          <div className="Filter">
            <div className="select-box">
              <Select
                options={CategoryOptions}
                onChange={(OptionValue) =>
                  SetFilter({
                    ...Filter,
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
                  SetFilter({
                    ...Filter,
                    StarRate:
                      OptionValue[0] === undefined ? "" : OptionValue[0].value,
                  })
                }
                placeholder="Select an Star Rate"
                dropdownPosition="auto"
                separator={false}
                className="SelectELEMENT"
                searchBy="value"
                clearable={true}
              />
            </div>
            <div className="input-action">
              <div className="input-box">
                <input
                  type="number"
                  placeholder="MIN"
                  value={Filter.Min}
                  onChange={(e) =>
                    SetFilter({ ...Filter, Min: e.target.value })
                  }
                  min={0}
                />
              </div>
              <div className="input-box">
                <input
                  type="number"
                  placeholder="MAX"
                  value={Filter.Max}
                  onChange={(e) =>
                    SetFilter({ ...Filter, Max: e.target.value })
                  }
                  min={1}
                />
              </div>
            </div>
          </div>
        )}

        <div className="action">
          <i
            className={
              ShowFilter
                ? "fa-solid fa-filter-circle-xmark"
                : "fa-solid fa-filter active"
            }
            onClick={() => SetShowFilter((prev) => !prev)}
          ></i>
          <div className="Search-box">
            <input
              type="search"
              name="Search"
              id="Search"
              value={Filter.Search}
              placeholder="Search Product"
              onChange={(e) => SetFilter({ ...Filter, Search: e.target.value })}
            />
            <button
              onClick={() => {
                Dispatch(ResetCurrentPage());
                Dispatch(Get_All_Products());
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default FilterProducts;
