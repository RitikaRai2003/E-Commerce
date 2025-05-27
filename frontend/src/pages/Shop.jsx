import React from "react";
import Hero from "../component/Hero/Hero.jsx";
import Popular from "../component/Popular/popular.jsx";
import Offers from "../component/offer/offer.jsx";
import NewCollections from "../component/NewCollection/NewCollection.jsx";
import NewsLetter from "../component/NewLetter/NewsLetter.jsx"

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter/>
    </div>
  );
};
export default Shop;
