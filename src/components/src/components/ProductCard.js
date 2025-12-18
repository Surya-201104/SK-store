import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  isInCart,
  addToCart,
  removeFromCart,
}) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="price">₹ {product.price}</p>
      <p className="description">{product.description}</p>

      <div className="card-buttons">
        {!isInCart ? (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        ) : (
          <button
            className="remove-btn"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        )}

        <button
          className="buy-btn"
          onClick={() => navigate(`/buy/${product.id}`)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
