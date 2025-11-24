import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import React from "react";
import hero from "../assets/burger.png";
import "./Home.css";


export default function Home() {
  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-left">
          <div className="hero-p">
          <p>
            Enjoy helathy and  <br /> delicious food.
          </p>
          </div>
          <div className="hero-btn">
          <button className="btn">Order Now</button>
           <button className="btn">Reservation</button>
          </div>
         <div className="hero-detail"> 
          <p>WE ARE OPEN FROM</p>
          <p>Mon-Sat: 09:00am-2:00pm</p>
          <p>Sunday: 04:00pm-06:00pm</p>
         </div>
         <div className="detail">
          <p>250+<br/>Food item</p>
          <p>75+<br/>Resturant</p>
          <p>15k+<br/>Happy customer</p>
         </div>
        </div>

    
          <img src={hero} alt="Food Banner" className="hero-img" />
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="cat-grid">
         <Link className="hlo" to="/menu"> <div className="cat-card"><img src={hero} /><p>Pizza</p></div></Link>
         <Link to="/menu"><div className="cat-card"><img src={hero} /><p>Burger</p></div></Link>
         <Link to="/menu"> <div className="cat-card"><img src={hero} /><p>Pasta</p></div></Link>
         <Link to="/menu"> <div className="cat-card"><img src={hero} /><p>Pizza</p></div></Link>
         <Link to="/menu"> <div className="cat-card"><img src={hero} /><p>Burger</p></div></Link>
         <Link to="/menu"><div className="cat-card"><img src={hero} /><p>Pasta</p></div></Link>
         <Link to="/menu"> <div className="cat-card"><img src={hero} /><p>Pizza</p></div></Link>
         <Link to="/menu"><div className="cat-card"><img src={hero} /><p>Burger</p></div></Link>
        
        </div>
      </section>

      {/* POPULAR ITEMS */}
      <section className="popular">
        <h2>Popular Items</h2>
        <div className="popular-grid">
          {[1,2,3,4].map((i)=>(
            <div className="p-card" key={i}>
              <img src={hero} />
              <h3>Food Item {i}</h3>
              <p>₹{i * 120}</p>
               <button className="menu-btn" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

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

