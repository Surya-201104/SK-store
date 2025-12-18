import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BuyNow({ cart, addToCart, removeFromCart, clearCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);

  const cartItem = cart.find((item) => item.id === Number(id));

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  useEffect(() => {
    if (!product) return;

    fetch(`https://fakestoreapi.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelated(data.filter((p) => p.id !== product.id));
      });
  }, [product]);

  if (!product) return <p>Loading...</p>;

  const discountPercent = 10;
  const discountAmount = (product.price * discountPercent) / 100;
  const finalPrice = (product.price - discountAmount).toFixed(2);

 
  const placeOrder = () => {
    setLoading(true);

    setTimeout(() => {
      alert(
        `✅ Order placed successfully!\n\nFinal Amount Paid: ₹ ${finalPrice}`
      );

      if (typeof clearCart === "function") {
        clearCart();
      }

      navigate("/");
    }, 1500);
  };

 
  if (loading) {
    return (
      <div className="page-loader">
        <div className="spinner"></div>
        <p>Placing your order...</p>
      </div>
    );
  }

  return (
    <div className="buy-now-page">

      <div className="buy-product">
        <img src={product.image} alt={product.title} />

        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>

          <div className="price-box">
            <p className="original-price">MRP: ₹ {product.price}</p>
            <p className="discount">
              Discount: {discountPercent}% (-₹ {discountAmount.toFixed(2)})
            </p>
            <h3 className="final-price">Final Price: ₹ {finalPrice}</h3>
          </div>

          {cartItem ? (
            <button
              className="remove-btn"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          )}

          {/* Place order does NOT depend on cart */}
          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>

      <h3 className="related-title">Related Products</h3>

      <div className="related-grid">
        {related.map((item) => {
          const isInCart = cart.find((c) => c.id === item.id);

          return (
            <div key={item.id} className="related-card">
              <img src={item.image} alt={item.title} />
              <p className="title">{item.title}</p>
              <p className="price">₹ {item.price}</p>

              <div className="card-buttons">
                {!isInCart ? (
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                ) : (
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                )}

                <button
                  className="buy-btn"
                  onClick={() => navigate(`/buy/${item.id}`)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
