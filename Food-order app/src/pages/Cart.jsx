import React from "react";
import { useCart } from "../CartContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cart, updateQty, removeItem, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0)
    return <h2 className="empty-cart">Your cart is empty 😕</h2>;

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.img} />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <div className="qty-box">
                <button
                  onClick={() =>
                    updateQty(item.id, Math.max(1, item.qty - 1))
                  }
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button onClick={() => updateQty(item.id, item.qty + 1)}>
                  +
                </button>
              </div>
            </div>

            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>Total: ₹{total}</h2>
        <button className="place-order" onClick={() => navigate("/success")}>
          Place Order
        </button>
      </div>
    </div>
  );
}
