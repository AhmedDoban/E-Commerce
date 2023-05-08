import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          {/************************  First Card  ********************************** */}
          <div className="card">
            <div className="header-logo">
              <img src={require("../../../imgs/icon.svg").default} alt="" />
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="AcceptedPayments">
              <h5>Accepted Payments</h5>
              <div className="imgs-container">
                <div className="img-card">
                  <img
                    src={require("../../../imgs/Footer/footer(1).png")}
                    alt="1"
                  />
                </div>
                <div className="img-card">
                  <img
                    src={require("../../../imgs/Footer/footer(2).png")}
                    alt="2"
                  />
                </div>
                <div className="img-card">
                  <img
                    src={require("../../../imgs/Footer/footer(3).png")}
                    alt="3"
                  />
                </div>
                <div className="img-card">
                  <img
                    src={require("../../../imgs/Footer/footer(4).png")}
                    alt="4"
                  />
                </div>
                <div className="img-card">
                  <img
                    src={require("../../../imgs/Footer/footer(5).png")}
                    alt="5"
                  />
                </div>
                <div className="img-card">
                  <img
                    src={require("../../../imgs/Footer/footer(6).png")}
                    alt="6"
                  />
                </div>
                <div className="img-card">
                  <img
                    src={require("../../../imgs/Footer/footer(7).png")}
                    alt="7"
                  />
                </div>
                <div className="img-card">
                  <img
                    src={require("../../../imgs/Footer/footer(8).png")}
                    alt="8"
                  />
                </div>
              </div>
            </div>
          </div>
          {/************************  2'nd Card  ********************************** */}
          <div className="card">
            <div className="header">Department</div>
            <ul>
              <li>
                <Link>Fashion</Link>
              </li>
              <li>
                <Link>Education Product</Link>
              </li>
              <li>
                <Link>Frozen Food</Link>
              </li>
              <li>
                <Link>Beverages</Link>
              </li>
              <li>
                <Link>Organic Grocery</Link>
              </li>
              <li>
                <Link>Office Supplies</Link>
              </li>
              <li>
                <Link>Beauty Products</Link>
              </li>
              <li>
                <Link>Books</Link>
              </li>
              <li>
                <Link>Electronics & Gadget</Link>
              </li>
              <li>
                <Link>Travel Accessories</Link>
              </li>
              <li>
                <Link>Fitness</Link>
              </li>
              <li>
                <Link>Sneakers</Link>
              </li>
              <li>
                <Link>Toys</Link>
              </li>
              <li>
                <Link>Furniture</Link>
              </li>
            </ul>
          </div>
          {/************************  3'nd Card  ********************************** */}
          <div className="card">
            <div className="header">About Us</div>
            <ul>
              <li>
                <Link>About Shopcart</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>News & Blog</Link>
              </li>
              <li>
                <Link>Help</Link>
              </li>
              <li>
                <Link>Press Center</Link>
              </li>
              <li>
                <Link>Shop By Location</Link>
              </li>
              <li>
                <Link>Shopcart Brands</Link>
              </li>
              <li>
                <Link>Affiliate & Partners</Link>
              </li>
              <li>
                <Link>Ideas & Guides</Link>
              </li>
            </ul>
          </div>
          {/************************  4'nd Card  ********************************** */}
          <div className="card">
            <div className="header">Services</div>
            <ul>
              <li>
                <Link>Gift Card</Link>
              </li>
              <li>
                <Link>Mobile App</Link>
              </li>
              <li>
                <Link>Shipping & Delivery</Link>
              </li>
              <li>
                <Link>Order Pickup</Link>
              </li>
              <li>
                <Link>Account Signup</Link>
              </li>
            </ul>
          </div>
          {/************************  4'nd Card  ********************************** */}
          <div className="card">
            <div className="header">Help</div>
            <ul>
              <li>
                <Link>Shopcart Help</Link>
              </li>
              <li>
                <Link>Returns</Link>
              </li>
              <li>
                <Link>Track Orders</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Feedback</Link>
              </li>
              <li>
                <Link>Security & Fraud</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="card">
            <p>
              <i className="fa-solid fa-suitcase"></i>
              <span>Become Seller</span>
            </p>
            <p>
              <i className="fa-solid fa-gift"></i>
              <span>Gift Cardss</span>
            </p>
            <p>
              <i class="fa-solid fa-circle-info"></i>
              <span>Help Center</span>
            </p>
          </div>
          <div className="card">
            <p>Terms of Service</p>
            <p>Privacy & Policy</p>
          </div>
          <div className="card">
            <p>All Right reserved by Musemind | 2022</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
