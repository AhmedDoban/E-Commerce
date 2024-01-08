import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";

const Store = configureStore({
  reducer: {
    User: UserSlice,
  },
});

export default Store;
