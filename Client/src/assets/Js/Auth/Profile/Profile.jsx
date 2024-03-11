import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Toast_Handelar from "../../Components/Toast_Handelar";
import RecentlyShown from "./RecentlyShown/RecentlyShown";
import Footer from "../../Components/Footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  ChangeStatus,
  Change_User_Avatar,
  HandleChandeAvatar,
  UpdateLocalData,
  UpdateUserChanges,
  UpdateUserPassword,
} from "../../Toolkit/Slice/UserSlice";
import "./Profile.css";

function Profile() {
  const UserData = useSelector((User) => User.User.user);
  const ChangedAvatar = useSelector((user) => user.User.changeAvatar);
  const Errors = useSelector((data) => data.User.UpdateErrors);

  const [USER, Setuser] = useState({});
  const [ImageFile, SetImageFile] = useState(null);
  const Dispatch = useDispatch();
  const [NewPassword, SetNewPassword] = useState({
    OldPassword: "",
    NewPassword: "",
    ReNewPassword: "",
  });
  const [PasswordMatch, SetPasswordMatch] = useState(false);

  // to check all inputs not equal to null or empty before make request
  const handleNotNull = () => {
    const { FirstName, LastName, Mobile, email } = USER;
    if (
      [
        FirstName,
        LastName,
        Mobile,
        email,
        USER.Address?.City,
        USER.Address?.ZipCode,
        USER.Address?.location,
      ].includes(null) ||
      [
        FirstName,
        LastName,
        Mobile,
        email,
        USER.Address?.City,
        USER.Address?.ZipCode,
        USER.Address?.location,
      ].includes("")
    ) {
      return true;
    } else {
      return false;
    }
  };

  // update user data from API
  const Update_Changes = () => {
    if (handleNotNull()) {
      Toast_Handelar("error", "Some fields must be filled !");
      return;
    }
    Dispatch(UpdateUserChanges(USER));
    Dispatch(UpdateLocalData(USER));
  };

  // to change inputs data with the user value
  const HandleChangeInput = (e) => {
    const { name, value } = e.target;
    Setuser({ ...USER, [name]: value });
  };

  const HandleChangePhoneNumber = (e) => {
    Setuser({ ...USER, Mobile: e });
  };

  const HandleChangeAddress = (e) => {
    const { name, value } = e.target;
    Setuser({
      ...USER,
      Address: {
        ...USER.Address,
        [name]: value,
      },
    });
  };

  // handel change file input
  const UploadAvatar = (e) => {
    const File = e.target.files[0];
    if (File.type.split("/")[0] === "image") {
      if ((File.size / 1000).toFixed(0) >= 1028) {
        Toast_Handelar("error", "File size cannot exceed more than 1MB");
      } else {
        SetImageFile(File);
        Dispatch(ChangeStatus(true));
        Dispatch(HandleChandeAvatar(URL.createObjectURL(File)));
      }
    } else {
      Toast_Handelar("error", "File Must be an image !");
    }
  };

  const HandeAvatarGlobal = () => {
    Dispatch(Change_User_Avatar(ImageFile));
    Dispatch(ChangeStatus(false));
    Dispatch(HandleChandeAvatar(URL.createObjectURL(ImageFile)));
  };

  // Handel Change password inputs
  const HandleChangePasswordInput = (e) => {
    const { name, value } = e.target;
    SetNewPassword({ ...NewPassword, [name]: value });
  };

  const HandelChangePassword = () => {
    const Pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    if (
      NewPassword.NewPassword === NewPassword.ReNewPassword &&
      NewPassword.NewPassword.match(Pattern)
    ) {
      SetPasswordMatch(false);
      Dispatch(
        UpdateUserPassword({
          password: NewPassword.OldPassword,
          NewPassword: NewPassword.NewPassword,
        })
      );
    } else {
      SetPasswordMatch(true);
    }
  };

  useEffect(() => {
    Setuser(UserData);
  }, [UserData]);

  return (
    <React.Fragment>
      <Header />
      <div className="profile">
        <div className="container">
          <div className="left">
            <div className="imgHandler">
              <input
                type="file"
                name="UserImage"
                id="UserImage"
                hidden
                onChange={(e) => UploadAvatar(e)}
              />
              <label htmlFor="UserImage">
                <img
                  src={
                    ChangedAvatar.status ? ChangedAvatar.path : UserData.Avatar
                  }
                  alt="User"
                />
              </label>
            </div>
            {ChangedAvatar.status && (
              <button
                onClick={() => HandeAvatarGlobal()}
                className="buttonStyle"
              >
                Update
              </button>
            )}
          </div>
          <div className="right">
            <div className="StyleBoxProfile BasicUserInfo">
              <div className="box">
                <div className="card-input">
                  <label htmlFor="FirstName">
                    First Name *
                    {Errors.includes("FirstName") && (
                      <span className="errors">First Name is required !</span>
                    )}
                  </label>
                  <input
                    className={Errors.includes("FirstName") ? "Error" : ""}
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="First Name"
                    value={USER.FirstName}
                    onChange={(e) => HandleChangeInput(e)}
                  />
                </div>
                <div className="card-input">
                  <label htmlFor="LastName">
                    Last Name *
                    {Errors.includes("LastName") && (
                      <span className="errors">Last Name is required !</span>
                    )}
                  </label>
                  <input
                    className={Errors.includes("LastName") ? "Error" : ""}
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="Lastt Name"
                    value={USER.LastName}
                    onChange={(e) => HandleChangeInput(e)}
                  />
                </div>
              </div>
              <div className="card-input">
                <label htmlFor="location">
                  Address *
                  {Errors.includes("location") && (
                    <span className="errors">Location is required !</span>
                  )}
                </label>
                <input
                  className={Errors.includes("location") ? "Error" : ""}
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Address"
                  value={USER.Address?.location}
                  onChange={(e) => HandleChangeAddress(e)}
                />
              </div>
              <div className="box">
                <div className="card-input">
                  <label htmlFor="City">
                    City / Town *
                    {Errors.includes("City") && (
                      <span className="errors">City is required !</span>
                    )}
                  </label>
                  <input
                    className={Errors.includes("City") ? "Error" : ""}
                    type="text"
                    name="City"
                    id="City"
                    placeholder="City / town"
                    value={USER.Address?.City}
                    onChange={(e) => HandleChangeAddress(e)}
                  />
                </div>
                <div className="card-input">
                  <label htmlFor="ZipCode">
                    Zip Code *
                    {Errors.includes("ZipCode") && (
                      <span className="errors">must be from 5-10 numbers</span>
                    )}
                  </label>
                  <input
                    className={Errors.includes("ZipCode") ? "Error" : ""}
                    type="text"
                    name="ZipCode"
                    id="ZipCode"
                    placeholder="Zip Code"
                    value={USER.Address?.ZipCode}
                    onChange={(e) => HandleChangeAddress(e)}
                    maxlength="10"
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>
              <div className="box">
                <div className="card-input">
                  <label htmlFor="Mobile">
                    Mobile *
                    {Errors.includes("Mobile") && (
                      <span className="errors">must be 11 numbers</span>
                    )}
                  </label>

                  <PhoneInput
                    className={Errors.includes("Mobile") ? "Error" : ""}
                    value={`${USER.Mobile}`}
                    onChange={(e) => HandleChangePhoneNumber(e)}
                  />
                </div>
                <div className="card-input">
                  <label htmlFor="email">
                    Email *
                    {Errors.includes("email") && (
                      <span className="errors">
                        email is required and you can't change it
                      </span>
                    )}
                  </label>
                  <input
                    className={Errors.includes("email") ? "Error" : ""}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={USER.email}
                    onChange={(e) => HandleChangeInput(e)}
                  />
                </div>
              </div>
              <button className="buttonStyle" onClick={() => Update_Changes()}>
                Save Changes
              </button>
            </div>
            <div className="StyleBoxProfile ChangePassword">
              <div className="card-input">
                <label htmlFor="OldPassword">Password *</label>
                <input
                  type="text"
                  name="OldPassword"
                  id="OldPassword"
                  placeholder="Password"
                  value={NewPassword.OldPassword}
                  onChange={(e) => HandleChangePasswordInput(e)}
                />
              </div>
              <div className="card-input">
                <label htmlFor="NewPassword">
                  New Password *
                  {PasswordMatch && (
                    <span className="errors">The password doesn't match</span>
                  )}
                </label>
                <input
                  className={PasswordMatch ? "Error" : ""}
                  type="text"
                  name="NewPassword"
                  id="NewPassword"
                  placeholder="Enter New Password"
                  value={NewPassword.NewPassword}
                  onChange={(e) => HandleChangePasswordInput(e)}
                />
              </div>
              <div className="card-input">
                <label htmlFor="ReNewPassword">
                  Re-New Password *
                  {PasswordMatch && (
                    <span className="errors">The password doesn't match</span>
                  )}
                </label>
                <input
                  className={PasswordMatch ? "Error" : ""}
                  type="text"
                  name="ReNewPassword"
                  id="ReNewPassword"
                  placeholder="New Password"
                  value={NewPassword.ReNewPassword}
                  onChange={(e) => HandleChangePasswordInput(e)}
                />
              </div>
              <button
                className="buttonStyle"
                onClick={() => HandelChangePassword()}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <RecentlyShown />
      <Footer />
    </React.Fragment>
  );
}
export default Profile;
