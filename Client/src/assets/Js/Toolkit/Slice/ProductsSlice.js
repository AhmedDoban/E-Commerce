import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Get_All_Products = createAsyncThunk(
  "Products",
  async (arg, { getState }) => {
    const State = getState();
    const { Token, _id } = JSON.parse(localStorage.getItem("Token"));
    const Data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Products/Filter?Page=${State.Products.CurentPage}&Limit=8`,
      {
        SEARCH: State.Products.Filter.Search,
        MIN: State.Products.Filter.Min,
        MAX: State.Products.Filter.Max,
        RATE: State.Products.Filter.StarRate,
        CATEGORY: State.Products.Filter.CategoryFilter,
        _id: _id,
      },
      {
        headers: {
          Authorization: Token,
        },
      }
    );
    return Data.data;
  }
);
export const Get_All_Category = createAsyncThunk("Category", async () => {
  const { Token } = JSON.parse(localStorage.getItem("Token"));
  const Data = await axios.post(
    `${process.env.REACT_APP_API_URL}/Products/Category?ALL=true`,
    {},
    {
      headers: {
        Authorization: Token,
      },
    }
  );
  return Data.data;
});

const Products_Slice = createSlice({
  name: "ProductsSlice",
  initialState: {
    Loading: false,
    Products: [],
    Category: [],
    Pages: 1,
    CurentPage: 1,
    Filter: {
      Search: "",
      Min: "",
      Max: "",
      StarRate: "",
      CategoryFilter: "",
    },
  },
  reducers: {
    HandelFilter: (State, action) => {
      State.Filter = action.payload;
      console.log(action.payload);
    },
    ResetCurrentPage: (State, action) => {
      State.CurentPage = 1;
    },
    SeeNext: (State, action) => {
      if (State.CurentPage < State.Pages) {
        State.CurentPage += 1;
      } else {
        return;
      }
    },
    SeePrev: (State, action) => {
      if (State.CurentPage !== 0) {
        State.CurentPage -= 1;
      } else {
        State.CurentPage = 1;
      }
    },
    HandleProductIsInCart: (State, action) => {
      const NewProductsState = [...State.Products];
      const SingleProduct = NewProductsState.filter(
        (product) => product._id == action.payload._id
      )[0];
      const ProudactId = NewProductsState.indexOf(SingleProduct);
      NewProductsState[ProudactId] = {
        ...SingleProduct,
        IsinCart: action.payload.IsinCart,
      };
      State.Products = [...NewProductsState];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Get_All_Products.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(Get_All_Products.fulfilled, (State, action) => {
      State.Loading = false;
      console.log(action.payload);
      if (action.payload.Status === "Faild") {
        return;
      } else {
        State.Products = action.payload.Data;
        State.Pages = action.payload.No_Pages;
      }
    });
    builder.addCase(Get_All_Products.rejected, (State, action) => {
      State.Loading = false;
    });
    builder.addCase(Get_All_Category.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(Get_All_Category.fulfilled, (State, action) => {
      State.Loading = false;
      State.Category = action.payload.Data;
    });
    builder.addCase(Get_All_Category.rejected, (State, action) => {
      State.Loading = true;
    });
  },
});

export const {
  SeeNext,
  SeePrev,
  HandleProductIsInCart,
  HandelFilter,
  ResetCurrentPage,
} = Products_Slice.actions;

export default Products_Slice.reducer;
