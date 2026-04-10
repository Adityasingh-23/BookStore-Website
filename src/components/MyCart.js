import { useState, useEffect } from "react";
import "./MyCart.css";

export default function MyCart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    calculateTotal(savedCart);
  }, []);

  // Function to remove book from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    calculateTotal(newCart);
  };

  // Function to calculate total price and book count
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(sum);
    setTotalBooks(items.length);
  };

  return (
    <div className="cart-page-container">
      <div className="cart-header">
        <h2><span role="img" aria-label="cart">🛒</span> My Cart</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-msg">Your cart is empty! <span role="img" aria-label="shopping bags">🛍️</span></div>
      ) : (
        <div className="cart-layout">
          {/* Cart Items Section */}
          <div className="cart-items-container">
            {cart.map((product) => (
              <div key={product.id} className="cart-item-card">
                <img
                  className="cart-item-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{product.title}</h4>
                  <p className="cart-item-desc">{product.description}</p>
                  <p className="cart-item-price">₹{product.price}</p>
                  <button className="btn-remove" onClick={() => removeFromCart(product.id)}>
                    <span role="img" aria-label="cross">❌</span> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="order-summary-wrapper">
            <div className="order-summary-card">
              <h3 className="summary-title"><span role="img" aria-label="book">📖</span> Order Summary</h3>
              <table className="summary-table">
                <thead>
                  <tr>
                    <th>Book Name</th>
                    <th style={{textAlign: "right"}}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td style={{textAlign: "right"}}>₹{product.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td><strong>Total Books</strong></td>
                    <td style={{textAlign: "right"}}><strong>{totalBooks}</strong></td>
                  </tr>
                </tbody>
              </table>

              <div className="total-row">
                <span>Total Price</span>
                <span className="total-price">₹{totalPrice}</span>
              </div>

              <button className="btn-checkout">✅ Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
