export default function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeFromCart,
}) {

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountedPrice = (totalPrice * 0.9).toFixed(2); 

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />

              <div className="item-details">
                <h4>{item.title}</h4>
                <p>Price: ₹ {item.price}</p>

                <div className="quantity-control">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Total: ₹ {(item.price * item.quantity).toFixed(2)}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}

          <hr />
          <h3>Total Price: ₹ {totalPrice.toFixed(2)}</h3>
          <h3>Price after 10% Discount: ₹ {discountedPrice}</h3>
        </div>
      )}
    </div>
  );
}
