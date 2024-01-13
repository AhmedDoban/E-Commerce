import React from "react";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import "./Cart.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useSelector } from "react-redux";
import Customer from "./Customer/Customer";
import Order from "./Order/Order";

function Cart(props) {
  const Products = useSelector((state) => state.Cart.Cart);

  return (
    <React.Fragment>
      <Header />
      {Products.length > 0 ? (
        <div className="Cart">
          <div className="container">
            <div className="left">
              <h3>review item and Shipping</h3>
              {Products.map((data) => (
                <div className="product-details" key={data._id}>
                  <div className="info">
                    <img src={data.image} alt="BestDeals" />
                    <div className="data">
                      <h4>{data.name}</h4>
                      <p>{data.prand}</p>
                    </div>
                  </div>
                  <div className="price">
                    <h2>
                      ${data.price}
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => props.HandleIsInCart(data.id)}
                      ></i>
                    </h2>
                    <p>
                      <button onClick={() => props.HandleDecrement(data.id)}>
                        -
                      </button>
                      {data.Count}
                      <button onClick={() => props.HandleIncrement(data.id)}>
                        +
                      </button>
                    </p>
                  </div>
                </div>
              ))}

              <Customer />
            </div>
            <Order />
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
