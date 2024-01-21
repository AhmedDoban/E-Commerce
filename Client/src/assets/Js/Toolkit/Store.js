import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";
import ProductsSlice from "./Slice/ProductsSlice";
import SingleProductSlice from "./Slice/SingleProductSlice";
import CartSlice from "./Slice/CartSlice";
import RegisterSlice from "./Slice/RegisterSlice";
import BestRateSlice from "./Slice/BestRateSlice";

const Store = configureStore({
  reducer: {
    Register: RegisterSlice,
    User: UserSlice,
    Products: ProductsSlice,
    BestRate: BestRateSlice,
    SingleProduct: SingleProductSlice,
    Cart: CartSlice,
  },
});

export default Store;
