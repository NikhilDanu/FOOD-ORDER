import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-text">
          Have questions? Want to book an order?  
          Send us a message — we’ll reply ASAP!
        </p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea placeholder="Message" className="contact-textarea"></textarea>

        <button className="contact-btn">Send Message</button>
      </form>
    </section>
  );
}
