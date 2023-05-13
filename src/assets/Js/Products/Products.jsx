import React, { useState, useContext, useEffect } from "react";
import "./Products.css";
import Header from "../Components/Header/Header";
import Stars from "./Stars";
import { ProudactContext } from "../Auth/Auth";
import axios from "axios";
import { Link } from "react-router-dom";
import PopularProducts from "../Home/Popular Products/PopularProducts";
import Footer from "../Components/Footer/Footer";
import Services from "../Home/Services/Services";

function Products(props) {
  const Products = useContext(ProudactContext);
  const [ShowMore, SetShowMore] = useState(8);
  const [filters, setFilters] = useState([]);
  const [Chosen, SetChosen] = useState("");

  useEffect(() => {
    const fetchcategories = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products/categories")
          .then((data) => setFilters(data.data));
      } catch (err) {
        throw err;
      }
    };
    fetchcategories();
  }, []);

  const HandleFilter = (data) => {
    SetChosen(data);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="Products">
        <div className="header">
          <div className="container">
            <div className="data">
              <h5>Grab Upto 50% Off On Selected HeadPhone </h5>
              <button>Buy Now</button>
            </div>
            <div className="data">
              <img
                src={require("../../imgs/bacgroundProudacts.png")}
                alt="bacgroundProudacts"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="nav-menu">
            <li>
              <span
                className={Chosen === "" ? "active" : ""}
                onClick={() => HandleFilter("")}
              >
                All
              </span>
            </li>
            {filters.map((Catego, index) => (
              <li key={index}>
                <span
                  className={Chosen === Catego ? "active" : ""}
                  onClick={() => HandleFilter(Catego)}
                >
                  {Catego}
                </span>
              </li>
            ))}
          </ul>

          <div className="cards-container">
            {Products.filter((data) =>
              Chosen === "" ? data : data.category === Chosen
            )
              .slice(0, ShowMore)
              .map((item, index) => (
                <div
                  className="card"
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  key={item.id}
                >
                  <div className="header">
                    <img src={item.image} alt="" />
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="footer">
                    <div className="info">
                      <span>{item.title.slice(0, 20)}...</span>
                      <span className="Price">{item.price}</span>
                    </div>
                    <div className="data">
                      <p>{item.description.slice(0, 60)}...</p>
                      <div className="stars">
                        <Stars rate={item.rating.rate} />
                      </div>

                      <div className="button-box">
                        <button
                          onClick={() => props.HandleIsInCart(index)}
                          className={item.isInCard ? "active" : ""}
                        >
                          {item.isInCard ? (
                            <React.Fragment>
                              <i className="fa-solid fa-trash"></i>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <i className="fa-solid fa-cart-shopping"></i>
                            </React.Fragment>
                          )}
                        </button>
                        <div className="counter">
                          <button
                            onClick={() => props.HandleDecrement(item.id - 1)}
                          >
                            -
                          </button>
                          {item.CountInCart}
                          <button
                            onClick={() => props.HandleIncrement(item.id - 1)}
                          >
                            +
                          </button>
                        </div>
                        <Link to={`${item.id}`}>
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {ShowMore >
          Products.filter((data) =>
            Chosen === "" ? data : data.category === Chosen
          ).length ? null : (
            <div className="see-more">
              <button onClick={() => SetShowMore(ShowMore + 8)}>
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
      <PopularProducts />
      <Services />
      <Footer />
    </React.Fragment>
  );
}
export default Products;
