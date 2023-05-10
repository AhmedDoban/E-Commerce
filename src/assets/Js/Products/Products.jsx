import React, { useState, useContext, useEffect } from "react";
import "./Products.css";
import Header from "../Components/Header/Header";
import Stars from "./Stars";
import { ProudactContext } from "../Auth/Auth";
import axios from "axios";
import { Link } from "react-router-dom";

function Products(props) {
  const Products = useContext(ProudactContext);
  const [ShowMore, SetShowMore] = useState(8);
  const [filters, setFilters] = useState([]);
  const [Chosen, SetChosen] = useState("");

  useEffect(() => {
    const fetchcategories = async () => {
      try {
        await axios
          .get("http://fakestoreapi.com/products/categories")
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
        <div className="container">
          <p> All proudacts From Fake Store Api </p>
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
                <Link
                  className="card"
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  key={item.id}
                  to={`${item.id}`}
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
                      <button
                        onClick={() => props.HandleIsInCart(index)}
                        className={item.isInCard ? "active" : ""}
                      >
                        {item.isInCard ? (
                          <React.Fragment>
                            <span>Remove From Cart</span>
                            <i className="fa-solid fa-trash"></i>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <span>Add To Cart</span>
                            <i className="fa-solid fa-cart-shopping"></i>
                          </React.Fragment>
                        )}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          {ShowMore > Products.length ? null : (
            <div className="see-more">
              <button onClick={() => SetShowMore(ShowMore + 8)}>
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Products;
