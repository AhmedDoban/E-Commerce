import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const [Category, SetCategory] = useState(false);
  const [Togle, SetTogle] = useState(false);

  const HandleLogout = () => {
    localStorage.clear();
    props.Setlogedin(false);
  };

  return (
    <React.Fragment>
      <div className="info">
        <div className="container">
          <div className="content">
            <i className="fa-solid fa-phone"></i>
            <p>01156526706</p>
          </div>
          <div className="content d-none">
            <p>Get 50% Off on Selected Items </p>
            <p> | </p>
            <p>Shop Now</p>
          </div>
          <div className="content">
            <div className="DropDown">
              <span>
                ENG <i className="fa-solid fa-chevron-down"></i>
              </span>
              <ul className="list">
                <li>Arabic</li>
                <li>English</li>
                <li>Japanese</li>
              </ul>
            </div>
            <div className="DropDown">
              <span>
                Loaction <i className="fa-solid fa-chevron-down"></i>
              </span>
              <ul className="list">
                <li>UK</li>
                <li>EG</li>
                <li>india</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="container">
          <Link className="content " to="/">
            <img src={require("../../../imgs/icon.svg").default} alt="icon" />
          </Link>

          <div className="togle-menu" onClick={() => SetTogle(!Togle)}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div
            className={Togle ? "content d-ap-mob active" : "content d-ap-mob"}
          >
            <ul>
              <li
                className={Category ? "Dropdown active" : "Dropdown"}
                onClick={() => SetCategory(!Category)}
              >
                <Link to="">
                  Category
                  <i
                    className={
                      Category
                        ? "fa-solid fa-chevron-up"
                        : "fa-solid fa-chevron-down"
                    }
                  ></i>
                </Link>
                <div
                  className={Category ? "other-links active" : "other-links"}
                >
                  <div className="header">
                    <h1>Popular Categories</h1>
                  </div>
                  <div className="body">
                    <div className="box">
                      <div className="left">
                        <img
                          src={require("../../../imgs/DropDown/Furniture.png")}
                          alt="Furniture"
                        />
                      </div>
                      <div className="right">
                        <h1>Furniture</h1>
                        <p>
                          <span>250</span>
                          <span>item</span>
                          <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="left">
                        <img
                          src={require("../../../imgs/DropDown/HandBag.png")}
                          alt="HandBag"
                        />
                      </div>
                      <div className="right">
                        <h1>Hand Bag</h1>
                        <p>
                          <span>250</span>
                          <span>item</span>
                          <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="left">
                        <img
                          src={require("../../../imgs/DropDown/Shoes.png")}
                          alt="Shoes"
                        />
                      </div>
                      <div className="right">
                        <h1>Shoes</h1>
                        <p>
                          <span>250</span>
                          <span>item</span>
                          <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="left">
                        <img
                          src={require("../../../imgs/DropDown/HeadPhone.png")}
                          alt="HeadPhone"
                        />
                      </div>
                      <div className="right">
                        <h1>HeadPhone</h1>
                        <p>
                          <span>250</span>
                          <span>item</span>
                          <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="left">
                        <img
                          src={require("../../../imgs/DropDown/Laptop.png")}
                          alt="Laptop"
                        />
                      </div>
                      <div className="right">
                        <h1>Furniture</h1>
                        <p>
                          <span>250</span>
                          <span>item</span>
                          <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="left">
                        <img
                          src={require("../../../imgs/DropDown/Books.png")}
                          alt="Books"
                        />
                      </div>
                      <div className="right">
                        <h1>Books</h1>
                        <p>
                          <span>250</span>
                          <span>item</span>
                          <span>Available</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="">Deals</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="">Delivery</Link>
              </li>
              <li className="mob-des">
                <Link to="">Account</Link>
              </li>
              <li className="mob-des">
                <Link to="/Cart">Cart</Link>
              </li>
              <li>
                <Link onClick={() => HandleLogout()}>logout</Link>
              </li>
            </ul>
          </div>
          <div className="content d-none">
            <input type="text" placeholder="Search proudact" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="content d-none2">
            <Link to="">
              <i className="fa-regular fa-user"></i>
              <span>Account</span>
            </Link>
            <Link to="/Cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
