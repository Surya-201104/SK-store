export default function CartModal({ cart, onClose, removeFromCart }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>
          X
        </button>
        <h3>Cart Items</h3>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>₹ {item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
