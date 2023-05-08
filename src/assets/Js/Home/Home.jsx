import React from "react";
import Header from "../Components/Header/Header";
import Landing from "./../Home/Landing/Landing";
import TopCategories from "./Top Categories/TopCategories";
import BestDeals from "./Best Deals/BestDeals";
import Brand from "./Brand/Brand";
import Offers from "./Offers/Offers";
import PopularProducts from "./Popular Products/PopularProducts";
import CashBack from "./Cash Back/CashBack";
import TodaysBestDeals from "./Todays Best Deals/TodaysBestDeals";
import CardCashback from "./Card Cashback/CardCashback";
import MostSelling from "./Most Selling/MostSelling";
import TrendingProducts from "./Trending Products/TrendingProducts";
import BestSelling from "./Best Selling/BestSelling";
import Services from "./Services/Services";
import Footer from "./../Components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      {/**************** Header *************************/}
      <Header />
      {/**************** Landing *************************/}
      <Landing />
      {/**************** Top Categories *************************/}
      <TopCategories />
      {/**************** Best Deals*************************/}
      <BestDeals />
      {/**************** Brand *************************/}
      <Brand />
      {/**************** Offers *************************/}
      <Offers />
      {/**************** Popular Products *************************/}
      <PopularProducts />
      {/****************  Cash Back  *************************/}
      <CashBack />
      {/****************  Todays Best Deals  *************************/}
      <TodaysBestDeals />
      {/****************  Card Cash back  *************************/}
      <CardCashback />
      {/****************  Most Sellings  *************************/}
      <MostSelling />
      {/****************  Trending Products *************************/}
      <TrendingProducts />
      {/****************  Best Selling *************************/}
      <BestSelling />
      {/****************  Services  *************************/}
      <Services />
      {/****************  Footer  *************************/}
      <Footer />
    </React.Fragment>
  );
}
export default Home;
