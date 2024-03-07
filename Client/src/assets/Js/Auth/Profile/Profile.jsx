import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Toast_Handelar from "../../Components/Toast_Handelar";
import { useDispatch, useSelector } from "react-redux";
import { Change_User_Avatar } from "../../Toolkit/Slice/UserSlice";
import "./Profile.css";
import Footer from "../../Components/Footer/Footer";

function Profile() {
  const UserData = useSelector((User) => User.User.user);
  const [USER, Setuser] = useState({});
  const [ImageFile, SetImageFile] = useState(null);
  const [NewAvatarUrl, SetNewAvatarUrl] = useState(false);
  const Dispatch = useDispatch();
  const [NewPassword, SetNewPassword] = useState({
    OldPassword: "",
    NewPassword: "",
    ReNewPassword: "",
  });

  const HandleChangeInput = (e) => {
    const { name, value } = e.target;
    Setuser({ ...USER, [name]: value });
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
        SetNewAvatarUrl(URL.createObjectURL(File));
      }
    } else {
      Toast_Handelar("error", "File Must be an image !");
    }
  };

  // Handel Change password inputs
  const HandleChangePasswordInput = (e) => {
    const { name, value } = e.target;
    SetNewPassword({ ...NewPassword, [name]: value });
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
                  src={NewAvatarUrl ? NewAvatarUrl : UserData.Avatar}
                  alt="User"
                />
              </label>
            </div>
            {NewAvatarUrl && (
              <button
                onClick={() => Dispatch(Change_User_Avatar(ImageFile))}
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
                  <label htmlFor="FirstName">First Name *</label>
                  <input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="First Name"
                    value={USER.FirstName}
                    onChange={(e) => HandleChangeInput(e)}
                  />
                </div>
                <div className="card-input">
                  <label htmlFor="LastName">Last Name *</label>
                  <input
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
                <label htmlFor="location">Address *</label>
                <input
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
                  <label htmlFor="City">City / Town *</label>
                  <input
                    type="text"
                    name="City"
                    id="City"
                    placeholder="City / town"
                    value={USER.Address?.City}
                    onChange={(e) => HandleChangeAddress(e)}
                  />
                </div>
                <div className="card-input">
                  <label htmlFor="ZipCode">Zip Code *</label>
                  <input
                    type="text"
                    name="ZipCode"
                    id="ZipCode"
                    placeholder="Zip Code"
                    value={USER.Address?.ZipCode}
                    onChange={(e) => HandleChangeAddress(e)}
                  />
                </div>
              </div>
              <div className="box">
                <div className="card-input">
                  <label htmlFor="Mobile">Mobile *</label>
                  <input
                    type="text"
                    name="Mobile"
                    id="Mobile"
                    placeholder="Mobile"
                    value={USER.Mobile}
                    onChange={(e) => HandleChangeInput(e)}
                  />
                </div>
                <div className="card-input">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={USER.email}
                    onChange={(e) => HandleChangeInput(e)}
                  />
                </div>
              </div>
              <button className="buttonStyle">Save Changes</button>
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
                <label htmlFor="NewPassword">New Password *</label>
                <input
                  type="text"
                  name="NewPassword"
                  id="NewPassword"
                  placeholder="Enter New Password"
                  value={NewPassword.NewPassword}
                  onChange={(e) => HandleChangePasswordInput(e)}
                />
              </div>
              <div className="card-input">
                <label htmlFor="ReNewPassword">Re-New Password *</label>
                <input
                  type="text"
                  name="ReNewPassword"
                  id="ReNewPassword"
                  placeholder="New Password"
                  value={NewPassword.ReNewPassword}
                  onChange={(e) => HandleChangePasswordInput(e)}
                />
              </div>
              <button className="buttonStyle">Change Password</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Profile;
