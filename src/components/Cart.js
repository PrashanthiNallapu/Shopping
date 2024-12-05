import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cartContext";
import Header from "./Header";
import "../App.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const USD_TO_INR = 82; // Conversion rate

  // Function to convert price
  const convertToINR = (priceInUSD) => priceInUSD * USD_TO_INR;

  // Calculate overall total price in INR
  const overallTotalPrice = cart.reduce(
    (sum, item) => sum + convertToINR(item.price) * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="header">
        <h1 className="heading">Cart</h1>
        <button onClick={() => navigate("/")} className="back-button">
          Back to Products
        </button>
      </div>
      <div className="cart-container">
        {cart.length > 0 ? (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price (per item in INR)</th>
                  <th>Quantity</th>
                  <th>Total Price (in INR)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>₹{convertToINR(item.price).toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>₹{(convertToINR(item.price) * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" style={{ textAlign: "right" }}>
                    <strong>Overall Bill:</strong>
                  </td>
                  <td colSpan="2">
                    <strong>₹{overallTotalPrice.toFixed(2)}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
