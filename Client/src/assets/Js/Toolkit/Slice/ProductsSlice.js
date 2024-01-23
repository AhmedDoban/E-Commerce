import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Get_All_Products = createAsyncThunk(
  "Products",
  async (arg, { getState }) => {
    const { Token, _id } = JSON.parse(localStorage.getItem("Token"));
    const State = getState();

    const Data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Products?Page=${State.Products.CurentPage}&Limit=8`,
      { _id },
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
    `${process.env.REACT_APP_API_URL}/Products/Category`,
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
    Search: "",
  },
  reducers: {
    HandelSearch: (State, action) => {
      State.Search = action.payload;
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
      if (action.payload.Status === "Faild") {
        return;
      } else {
        State.Products = action.payload.Data;
        State.Pages = action.payload.No_Pages;
      }
    });
    builder.addCase(Get_All_Products.rejected, (State, action) => {
      State.Loading = true;
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

export const { SeeNext, SeePrev, HandleProductIsInCart, HandelSearch } =
  Products_Slice.actions;

export default Products_Slice.reducer;
