import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Toast_Handelar from "../../Components/Toast_Handelar";

export const HandleRegister = createAsyncThunk("Register", async (USER) => {
  const Data = await axios.post(
    `${process.env.REACT_APP_API_URL}/Users/Register`,
    {
      email: USER.email,
      password: USER.password,
      FirstName: USER.FirstName,
      LastName: USER.LastName,
    }
  );
  return Data.data;
});

const RegisterSlice = createSlice({
  name: "Register",
  initialState: {
    loading: false,
    errors: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HandleRegister.pending, (State, Action) => {
      State.loading = true;
    });
    builder.addCase(HandleRegister.rejected, (State, Action) => {
      State.loading = false;
    });
    builder.addCase(HandleRegister.fulfilled, (State, Action) => {
      State.loading = false;
      State.errors = Action.payload.data;
      Toast_Handelar("error", Action.payload.message);
    });
  },
});

export const {} = RegisterSlice.actions;

export default RegisterSlice.reducer;
