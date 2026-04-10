import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import allProduct from "./Data.json";
import "./Home.css"; // Make sure to import the new CSS

export default function Home() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Function to add book to cart
  const addToCart = (i) => {
    let curProduct = allProduct[i];

    // Check if product already exists in cart
    const isExist = cart.some((item) => item.id === curProduct.id);

    if (!isExist) {
      const newCart = [...cart, curProduct];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      alert(`${curProduct.title} added to cart!`);
    } else {
      alert(`${curProduct.title} is already in the cart.`);
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h2 className="title">Featured Books</h2>
        <Link to="/mycart" className="btn-primary">
          <span role="img" aria-label="cart">🛒</span> View Cart ({cart.length})
        </Link>
      </div>
      
      <div className="books-grid">
        {allProduct.map((product, i) => (
          <div key={product.id} className="book-card">
            <div className="book-image-wrapper">
              <img className="book-image" src={product.image} alt={product.title} />
            </div>
            <div className="book-info">
              <h3 className="book-title">{product.title}</h3>
              <p className="book-author">By {product.author}</p>
              <p className="book-price">₹{product.price}</p>
              <p className="book-desc">{product.description}</p>
            </div>
            <button className="btn-add-cart" onClick={() => addToCart(i)}>
              <span role="img" aria-label="add">➕</span> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
