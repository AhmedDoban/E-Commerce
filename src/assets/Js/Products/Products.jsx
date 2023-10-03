import React, { useState, useContext, useEffect } from "react";
import "./Products.css";
import Header from "../Components/Header/Header";
import { ProudactContext } from "../Auth/Auth";
import axios from "axios";
import { Link } from "react-router-dom";
import PopularProducts from "../Home/Popular Products/PopularProducts";
import Footer from "../Components/Footer/Footer";
import Services from "../Home/Services/Services";
import Stars from "./Stars";

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
              .map((item) => (
                <div className="card" key={item.id}>
                  <Link to={`${item.id}`} className="header">
                    <img src={item.image} alt="" />
                    <div className="icons">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                  </Link>
                  <div className="footer">
                    <div className="info-box">
                      <span>{item.title.slice(0, 25)}... </span>
                      <Stars rate={item.rating?.rate} />
                    </div>
                    <div className="action-price">
                      <span className="Price">
                        {item.price.toString().split(".")[0]}
                      </span>
                      <button
                        onClick={() => props.HandleIsInCart(item.id)}
                        className={item.isInCard ? "active" : ""}
                      >
                        {item.isInCard ? (
                          <React.Fragment>
                            <i className="fa-solid fa-xmark"></i>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <i className="fa-solid fa-cart-arrow-down"></i>
                          </React.Fragment>
                        )}
                      </button>
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
