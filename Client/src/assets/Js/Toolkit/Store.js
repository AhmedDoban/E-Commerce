import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";
import ProductsSlice from "./Slice/ProductsSlice";
import SingleProductSlice from "./Slice/SingleProductSlice";
import CartSlice from "./Slice/CartSlice";

const Store = configureStore({
  reducer: {
    User: UserSlice,
    Products: ProductsSlice,
    SingleProduct: SingleProductSlice,
    Cart: CartSlice,
  },
});

export default Store;
