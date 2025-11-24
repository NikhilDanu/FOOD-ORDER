import React from "react";
import hero from "../assets/burger.png";
import { useCart } from "../CartContext";
import "./Menu.css";

export default function Menu() {
  const { addToCart } = useCart();

  const items = [
    { id: 1, name: "Burger", price: 120, img: hero },
    { id: 2, name: "Pizza", price: 200, img: hero },
    { id: 3, name: "Pasta", price: 180, img: hero },
    { id: 4, name: "Sandwich", price: 150, img: hero },
  ];

  return (
    <section className="menu-page">
      <h1 className="menu-title">Our Menu</h1>

      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.img} className="menu-img" />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button className="menu-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
