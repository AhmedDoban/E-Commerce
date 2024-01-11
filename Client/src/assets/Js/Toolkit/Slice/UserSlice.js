import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toast_Handelar from "./../../Components/Toast_Handelar";

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
    RememberMe: false,
  },
  reducers: {
    Handle_RemmberMe: (State, action) => {
      State.RememberMe = !State.RememberMe;
    },
    Login_Local: (State, action) => {
      const CheckLogin = JSON.parse(localStorage.getItem("E-commerce-login"));
      const sessionLogin = JSON.parse(
        sessionStorage.getItem("E-commerce-login")
      );
      if (CheckLogin !== null) {
        State.IsLogin = true;
        State.RememberMe = true;
        return;
      } else {
        State.IsLogin = false;
        State.RememberMe = false;
        if (sessionLogin !== null) {
          State.IsLogin = true;
          State.RememberMe = false;
        } else {
          State.IsLogin = false;
          State.RememberMe = false;
        }
      }
    },
    Handle_Logout: (State, action) => {
      State.IsLogin = false;
      State.RememberMe = false;
      State.user = {};
      State.Token = "";
      sessionStorage.clear();
      localStorage.clear();
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
      if (action.payload.Status !== "Faild") {
        State.IsLogin = true;
        State.user = action.payload.Data;
        State.Token = action.payload.Data.Token;
        if (State.RememberMe) {
          localStorage.setItem("E-commerce-login", JSON.stringify(true));
          localStorage.setItem(
            "Token",
            JSON.stringify({
              Token: action.payload.Data.Token,
              _id: action.payload.Data._id,
            })
          );
        } else {
          sessionStorage.setItem("E-commerce-login", JSON.stringify(true));
          sessionStorage.setItem(
            "Token",
            JSON.stringify({
              Token: action.payload.Data.Token,
              _id: action.payload.Data._id,
            })
          );
        }
      } else {
        Toast_Handelar("error", action.payload.message);
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
        Toast_Handelar("error", action.payload.message);
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

export const { Login_Local, Handle_RemmberMe, Handle_Logout } =
  UserSlice.actions;

export default UserSlice.reducer;
