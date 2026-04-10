import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      <Link className="brand-link" to="/">
        <img src="/booklogo1.png" alt="Brand Logo" className="brand-logo" />
        <span>Book Store</span>
      </Link>
      
      <nav>
        <ul className="nav-links">
          <li>
            <Link className={`nav-link ${currentPath === '/' ? 'active' : ''}`} to="/">Home</Link>
          </li>
          <li>
            <Link className={`nav-link ${currentPath === '/about' ? 'active' : ''}`} to="/about">About</Link>
          </li>
          <li>
            <Link className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={`nav-link ${currentPath === '/mycart' ? 'active' : ''}`} to="/mycart">My Cart</Link>
          </li>
          <li>
            <Link className={`nav-link ${currentPath === '/login' ? 'active' : ''}`} to="/login">Login / Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
