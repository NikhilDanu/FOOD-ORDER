import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import React from "react";
import hero from "../assets/burger.png";
import "./Home.css";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Enjoy healthy and <br /> delicious food.
          </h1>

          <div className="hero-btns">
            <button className="btn">Order Now</button>
            <button className="btn">Reservation</button>
          </div>

          <div className="hero-detail">
            <p>WE ARE OPEN FROM</p>
            <p>Mon–Sat: 09:00 AM – 02:00 PM</p>
            <p>Sunday: 04:00 PM – 06:00 PM</p>
          </div>

          <div className="hero-stats">
            <p>250+<br />Food Items</p>
            <p>75+<br />Restaurants</p>
            <p>15k+<br />Happy Customers</p>
          </div>
        </div>

        <div className="hero-right">
          <img src={hero} alt="Food Banner" className="hero-img" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="cat-grid">
          {["Pizza", "Burger", "Pasta", "Drinks", "Snacks", "Combo", "Rolls", "Dessert"].map((c, i) => (
            <Link to="/menu" key={i}>
              <div className="cat-card">
                <img src={hero} alt="" />
                <p>{c}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* POPULAR ITEMS */}
      <section className="popular">
        <h2>Popular Items</h2>

        <div className="popular-grid">
          {[1, 2, 3, 4].map((i) => (
            <div className="p-card" key={i}>
              <img src={hero} alt="" />
              <h3>Food Item {i}</h3>
              <p>₹{i * 120}</p>
              <button
                className="menu-btn"
                onClick={() =>
                  addToCart({ id: i, name: `Food Item ${i}`, price: i * 120, img: hero })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Us</h2>

        <div className="why-box">
          <div className="why-card">
            <div className="icon">🍃</div>
            <h3>Fresh Ingredients</h3>
            <p>Top quality items used.</p>
          </div>

          <div className="why-card">
            <div className="icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Super quick & reliable.</p>
          </div>

          <div className="why-card">
            <div className="icon">⭐</div>
            <h3>Premium Taste</h3>
            <p>Restaurant-grade flavours.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
