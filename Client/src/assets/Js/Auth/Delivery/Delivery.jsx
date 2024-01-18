import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Services from "../Home/Services/Services";
import HowDeliveryWorks from "./How Delivery Works/HowDeliveryWorks";
import DeliveryLanding from "./DeliveryLanding/DeliveryLanding";
import DeliveryMap from "./DeliveryMap/DeliveryMap";
import Contact from "./Contact/Contact";

function Delivery() {
  return (
    <React.Fragment>
      <Header />
      <div className="Delivery">
        {/**************************************** Delivery Landing************************************** */}
        <DeliveryLanding />
        {/**************************************** How Delivery Works************************************** */}
        <HowDeliveryWorks />
        {/**************************************** Delivery Map ************************************** */}
        <DeliveryMap />
        {/**************************************** Contact ************************************** */}
        <Contact />
        {/**************************************** Services ************************************** */}
        <Services />
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Delivery;
