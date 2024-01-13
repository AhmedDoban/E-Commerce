import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Order.css";

function Order() {
  const Products = useSelector((state) => state.Cart.Cart);
  const USER = useSelector((state) => state.User.user);
  const [PaymentMethod, SetPaymentMethod] = useState("CashOnDelivery");
  const [TotalPrice, SetTotalPrice] = useState(0);
  const [TotalTax, SetTotalTax] = useState(0);

  useEffect(() => {
    let total = 0;

    Products.map((item) => {
      total += item.price * item.Count;
      return SetTotalPrice(total);
    });
    SetTotalTax(TotalPrice * 0.01);
  }, [TotalPrice, Products]);

  return (
    <React.Fragment>
      <div className="Order">
        <div className="box">
          <div className="card">
            <h3>Order Summary </h3>
          </div>
          <div className="card Coupon">
            <input type="text" placeholder="Enter Coupon Code" maxLength={8} />
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
                checked={PaymentMethod === "CashOnDelivery" ? true : false}
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
                checked={PaymentMethod === "CreditDebitCard" ? true : false}
              />
              <label htmlFor="CreditDebitCard"> Credit Debit Card </label>
            </div>
            {PaymentMethod === "CreditDebitCard" ? (
              <div className="cards-Method">
                <div className="card-input">
                  <input type="radio" name="Otherpayment" id="amazon" />
                  <label htmlFor="amazon">
                    <img
                      src={require("../../../../imgs/Footer/footer(4).png")}
                      alt="amazon"
                    />
                  </label>
                </div>
                <div className="card-input">
                  <input type="radio" name="Otherpayment" id="paypal" />
                  <label htmlFor="paypal">
                    <img
                      src={require("../../../../imgs/Footer/footer(6).png")}
                      alt="paypal"
                    />
                  </label>
                </div>
                <div className="card-input">
                  <input type="radio" name="Otherpayment" id="visa" />
                  <label htmlFor="visa">
                    <img
                      src={require("../../../../imgs/Footer/footer(2).png")}
                      alt="visa"
                    />
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
                value={USER.email}
                disabled
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
            src={require("../../../../imgs/Card Cash back/CardCashback1.png")}
            alt="CardCashback1"
          />
          <div className="info">
            <h3>Earn 5% Cash Back on Shopcart </h3>
            <Link>Learn More</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Order;
