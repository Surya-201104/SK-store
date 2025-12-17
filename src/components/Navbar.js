export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <h2>SK Store</h2>
      <button onClick={onCartClick}>Cart ({cartCount})</button>
    </nav>
  );
}
