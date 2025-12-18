import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home({ cart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => {
        const isInCart = cart.find((item) => item.id === product.id);

        return (
          <ProductCard
            key={product.id}
            product={product}
            isInCart={isInCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart} // ✅ PASS HERE
          />
        );
      })}
    </div>
  );
}
