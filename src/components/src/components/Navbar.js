import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        🛍️ <span>SK Store</span>
      </div>

      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}
