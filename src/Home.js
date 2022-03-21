import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="/images/amazon-banner.jpg" alt="" className="home__image" />

        <div className="home__row">
          <Product
            id="11111"
            title="The lean Startup"
            price={19.25}
            rating={3}
            image="/images/amazon-img1.jpg"
          />
          <Product
            id="22222"
            title="RockDove Men's Original Two-Tone Memory Foam Slipper"
            price={21.45}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/715rfN9D20L._AC_UL450_SR450,320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="22222"
            title="2021 Panini Score Football Jumbo Fat Pack Sealed 40 Card Pack - Look for Trevor Lawrence and Justin Fields Rookie and Autogra..."
            price={19.05}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/612yffVQQVL._AC_UL450_SR450,320_.jpg"
          />
          <Product
            id="33333"
            title="Hanes Men's Pullover EcoSmart Hooded Sweatshirt"
            price={15.05}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61GiJTR9PjL._AC_UL450_SR450,320_.jpg"
          />
          <Product
            id="44444"
            title="Magazine Kite Issue #10 [King Von Cover]"
            price={13.15}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71tBoHu1sXL._AC_UL450_SR450,320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="44444"
            title="100 Vintage Football Cards in Old Sealed Wax Packs - Perfect for New Collectors"
            price={18.35}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61ix1lvC6WL._AC_UL450_SR450,320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
