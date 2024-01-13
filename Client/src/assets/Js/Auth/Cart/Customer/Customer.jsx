import React, { useEffect, useState } from "react";
import "./Customer.css";
import { useSelector } from "react-redux";

function Customer() {
  const GetUSer = useSelector((state) => state.User.user);
  const [ReturnCustomer, SetReturnCustomer] = useState(false);
  const [USER, Setuser] = useState({});

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

  useEffect(() => {
    Setuser(GetUSer);
  }, [GetUSer]);

  return (
    <React.Fragment>
      <div className="return-customer">
        <input
          type="checkbox"
          name="ReturnCustomer"
          id="ReturnCustomer"
          checked={ReturnCustomer}
          onChange={() => SetReturnCustomer(!ReturnCustomer)}
        />
        <label htmlFor="ReturnCustomer">Return Customer ?</label>
      </div>
      <div className="delvery-information">
        <h3>
          delvery information
          {ReturnCustomer ? (
            <button onClick={() => SetReturnCustomer(!ReturnCustomer)}>
              Edit
            </button>
          ) : (
            <button>Save Informaion</button>
          )}
        </h3>
        {ReturnCustomer ? (
          <div className="ReturnCustomer-true">
            <h2>
              {USER.FirstName} {USER.LastName}
            </h2>
            <p>
              {USER.Address?.location.trim() !== ""
                ? USER.Address?.location - USER.Address?.City
                : "Address is required*"}
            </p>
            <p>
              {USER.Mobile !== 0 ? USER.Mobile : "mobile number is required*"}
            </p>
            <p>{USER.email}</p>
          </div>
        ) : (
          <div className="ReturnCustomer-false">
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
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
export default Customer;
