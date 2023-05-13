import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Cart.css";
import { ProudactContext } from "../Auth/Auth";
import { Player } from "@lottiefiles/react-lottie-player";
function Cart() {
  const Products = useContext(ProudactContext);
  const [ReturnCustomer, SetReturnCustomer] = useState(false);
  const [PaymentMethod, SetPaymentMethod] = useState("CashOnDelivery");
  const [TotalPrice, SetTotalPrice] = useState(0);
  const [TotalTax, SetTotalTax] = useState(0);

  useEffect(() => {
    let total = 0;
    Products.filter((data) => data.isInCard === true).map((item) => {
      total += item.price;
      SetTotalPrice(total);
    });
    SetTotalTax((TotalPrice * 10) / 100);
  }, [TotalPrice]);

  return (
    <React.Fragment>
      <Header />
      {Products.filter((data) => data.isInCard === true).length > 0 ? (
        <div className="Cart">
          <div className="container">
            <div className="left">
              <h3>review item and Shipping</h3>
              {Products.filter((data) => data.isInCard === true).map((data) => (
                <div className="product-details">
                  <div className="info">
                    <img src={data.image} alt="BestDeals" />
                    <div className="data">
                      <h4>{data.title}</h4>
                      <p>color: Black</p>
                    </div>
                  </div>
                  <div className="price">
                    <h2>${data.price}</h2>
                    <p>Quantity : 1</p>
                  </div>
                </div>
              ))}

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
                    <button>Edit</button>
                  ) : (
                    <button>Save Informaion</button>
                  )}
                </h3>
                {ReturnCustomer ? (
                  <div className="ReturnCustomer-true">
                    <h2>Ahmed Doban</h2>
                    <p>02 St El-data Street</p>
                    <p>011********</p>
                    <p>Ahmed********@gmail.com</p>
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
                        />
                      </div>
                      <div className="card-input">
                        <label htmlFor="LasttName">Last Name *</label>
                        <input
                          type="text"
                          name="LasttName"
                          id="LasttName"
                          placeholder="Lastt Name"
                        />
                      </div>
                    </div>
                    <div className="card-input">
                      <label htmlFor="Address">Address *</label>
                      <input
                        type="text"
                        name="Address"
                        id="Address"
                        placeholder="Address"
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
                        />
                      </div>
                      <div className="card-input">
                        <label htmlFor="ZipCode">Zip Code *</label>
                        <input
                          type="text"
                          name="ZipCode"
                          id="ZipCode"
                          placeholder="Zip Code"
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
                        />
                      </div>
                      <div className="card-input">
                        <label htmlFor="Email">Email *</label>
                        <input
                          type="Email"
                          name="Email"
                          id="Email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="right">
              <div className="box">
                <div className="card">
                  <h3>Order Summary </h3>
                </div>
                <div className="card Coupon">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    maxLength={8}
                  />
                  <button> Apply Coupon</button>
                </div>
                <div className="card">
                  <h4>Payment Details </h4>
                </div>

                <div className="card">
                  <div className="card-input">
                    <input
                      type="radio"
                      name="payment"
                      id="CashOnDelivery"
                      onChange={(e) => SetPaymentMethod(e.target.id)}
                      checked={
                        PaymentMethod === "CashOnDelivery" ? true : false
                      }
                    />
                    <label htmlFor="CashOnDelivery"> Cash on Delivery </label>
                  </div>
                  <div className="card-input">
                    <input
                      type="radio"
                      name="payment"
                      id="ShopcartCard"
                      onChange={(e) => SetPaymentMethod(e.target.id)}
                      checked={PaymentMethod === "ShopcartCard" ? true : false}
                    />
                    <label htmlFor="ShopcartCard"> Shopcart Card </label>
                  </div>
                  <div className="card-input">
                    <input
                      type="radio"
                      name="payment"
                      id="Paypal"
                      onChange={(e) => SetPaymentMethod(e.target.id)}
                      checked={PaymentMethod === "Paypal" ? true : false}
                    />
                    <label htmlFor="Paypal"> Paypal </label>
                  </div>
                  <div className="card-input">
                    <input
                      type="radio"
                      name="payment"
                      id="CreditDebitCard"
                      onChange={(e) => SetPaymentMethod(e.target.id)}
                      checked={
                        PaymentMethod === "CreditDebitCard" ? true : false
                      }
                    />
                    <label htmlFor="CreditDebitCard"> Credit Debit Card </label>
                  </div>
                  {PaymentMethod === "CreditDebitCard" ? (
                    <div className="cards-Method">
                      <div className="card-input">
                        <input type="radio" name="Otherpayment" id="amazon" />
                        <label htmlFor="amazon">
                          <i className="fa-brands fa-cc-amazon-pay"></i>
                        </label>
                      </div>
                      <div className="card-input">
                        <input type="radio" name="Otherpayment" id="paypal" />
                        <label htmlFor="paypal">
                          <i className="fa-brands fa-cc-paypal"></i>
                        </label>
                      </div>
                      <div className="card-input">
                        <input type="radio" name="Otherpayment" id="visa" />
                        <label htmlFor="visa">
                          <i className="fa-brands fa-cc-visa"></i>
                        </label>
                      </div>
                    </div>
                  ) : null}
                  <div className="card-fields">
                    <label htmlFor="FirstName">Email *</label>
                    <input
                      type="Email"
                      name="Email"
                      id="Email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="card-fields">
                    <label htmlFor="CardHolderName">Card Holder Name *</label>
                    <input
                      type="text"
                      name="CardHolderName"
                      id="CardHolderName"
                      placeholder="Card Holder Name"
                    />
                  </div>
                  <div className="card-fields">
                    <label htmlFor="CardNumber">Card Number *</label>
                    <div className="p-ab">
                      <input
                        type="text"
                        name="CardNumber"
                        id="CardNumber"
                        placeholder="0000*****1245"
                        maxLength={14}
                      />
                      <i className="fa-regular fa-credit-card"></i>
                    </div>
                  </div>
                  <div className="box-fields">
                    <div className="card-fields">
                      <label htmlFor="Expiry">Expiry *</label>
                      <input
                        type="date"
                        name="Expiry"
                        id="Expiry"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="card-fields">
                      <label htmlFor="FirstName">CVC *</label>
                      <input
                        type="text"
                        name="CVC"
                        id="CVC"
                        placeholder="000"
                        maxLength={3}
                      />
                    </div>
                  </div>
                  <div className="box-price">
                    <h5>
                      <p>Sub Total </p> <span>{TotalPrice.toFixed(2)}$</span>
                    </h5>
                    <h5>
                      <p>Tax (10%) </p> <span>{TotalTax.toFixed(2)}$</span>
                    </h5>
                    <h5>
                      <p>Coupon Discount </p> <span>0$</span>
                    </h5>
                    <h5>
                      <p>Shipping Cost</p> <span>0$</span>
                    </h5>
                  </div>
                </div>
                <div className="card total-price">
                  <h3>
                    Total <span>=${(TotalPrice + TotalTax).toFixed(2)}</span>
                  </h3>
                  <button>pay ${(TotalPrice + TotalTax).toFixed(2)}</button>
                </div>
              </div>
              <div className="box cashback">
                <img
                  src={require("../../imgs/Card Cash back/CardCashback1.png")}
                  alt="CardCashback1"
                />
                <div className="info">
                  <h3>Earn 5% Cash Back on Shopcart </h3>
                  <Link>Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="No-data-inCart">
          <div className="container">
            <Player
              autoplay={true}
              loop={true}
              controls={false}
              src="https://assets1.lottiefiles.com/packages/lf20_iluqidyb.json"
              className="No-item-player"
            />
            <p>there is no items in cart</p>
          </div>
        </div>
      )}

      <Footer />
    </React.Fragment>
  );
}
export default Cart;
