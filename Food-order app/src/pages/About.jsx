import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">

      <div className="about-left">
        <h1 className="about-title">About Our Restaurant</h1>
        <p className="about-text">
          We provide premium quality food with fast delivery and amazing taste.
          Your satisfaction is our top priority.  
          Our team ensures fresh ingredients, fast service, and a memorable dining experience.
        </p>
      </div>

      <div className="about-image-box">
        {/* SAME IMAGE YOU USE EVERYWHERE */}
        <img
          src={require("../assets/ChatGPT Image Nov 19, 2025, 08_30_14 PM.png")}
          alt="Food"
          className="about-img"
        />
      </div>

    </section>
  );
}
