export default function MiniCart({ item, removeFromCart }) {
  return (
    <div className="mini-cart">
      <h4>Added to Cart</h4>
      <p>{item.title}</p>
      <p>Price: ₹ {item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
}
