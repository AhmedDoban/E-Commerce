import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";
import ProductsSlice from "./Slice/ProductsSlice";

const Store = configureStore({
  reducer: {
    User: UserSlice,
    Products: ProductsSlice,
  },
});

export default Store;
