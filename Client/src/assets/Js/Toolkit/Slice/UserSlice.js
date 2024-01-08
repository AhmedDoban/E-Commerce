import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Login_Thunk = createAsyncThunk("User/Login", async (USER) => {
  const Data = await axios.post(
    `${process.env.REACT_APP_API_URL}/Users/Login`,
    {
      email: USER.email,
      password: USER.password,
    }
  );
  return Data.data;
});

export const Login_Local_Thunk = createAsyncThunk(
  "User/Login_Local",
  async () => {
    const { Token: TOKEN, _id: _ID } = JSON.parse(
      localStorage.getItem("Token")
    );

    const Data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Users/${_ID}`,
      { _id: _ID, Token: TOKEN },
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
    return Data.data;
  }
);

const UserSlice = createSlice({
  name: "User",
  initialState: {
    user: {},
    loading: false,
    Token: "",
    IsLogin: false,
  },
  reducers: {
    Login_Local: (State, action) => {
      State.IsLogin = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Login_Thunk.pending, (State, action) => {
      State.loading = true;
    });
    builder.addCase(Login_Local_Thunk.pending, (State, action) => {
      State.loading = true;
    });
    builder.addCase(Login_Thunk.fulfilled, (State, action) => {
      State.loading = false;
      console.log(action.payload);
      if (action.payload.Status !== "Faild") {
        State.IsLogin = true;
        State.user = action.payload.Data;
        State.Token = action.payload.Data.Token;
        localStorage.setItem("E-commerce-login", JSON.stringify(true));
        localStorage.setItem(
          "Token",
          JSON.stringify({
            Token: action.payload.Data.Token,
            _id: action.payload.Data._id,
          })
        );
      }
    });
    builder.addCase(Login_Local_Thunk.fulfilled, (State, action) => {
      State.loading = false;
      if (action.payload.Status !== "Faild") {
        State.IsLogin = true;
        State.user = action.payload.Data;
        State.Token = action.payload.Data.Token;
      } else {
        State.IsLogin = false;
        localStorage.clear();
      }
    });
    builder.addCase(Login_Thunk.rejected, (State, action) => {
      State.loading = true;
    });
    builder.addCase(Login_Local_Thunk.rejected, (State, action) => {
      State.loading = true;
    });
  },
});

export const { Login_Local } = UserSlice.actions;

export default UserSlice.reducer;
