import { useState } from 'react';

const products = [
  { id: 1, title: 'Cabbage', price: 1.5, isFruit: false, popular: false },
  { id: 2, title: 'Garlic', price: 2.0, isFruit: false, popular: true },
  { id: 3, title: 'Apple', price: 3.25, isFruit: true, popular: true },
  { id: 4, title: 'Mango', price: 4.0, isFruit: true, popular: false },
];

// 1. Capitalized name 'ProductCard' & destructuring props
function ProductCard({ product, onAddToCart }) {
  return (
    // 2. Single root element
    <div className="product-card">
      {/* 3. Dynamic title */}
      <h3>
        {product.title} {product.popular && <span>⭐</span>}
      </h3>

      {/* 4. Dynamic price and style (magenta for fruits, darkgreen for veggies) */}
      <p style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
        ${product.price.toFixed(2)}
      </p>

      {/* 5. Add to cart button with click listener */}
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  // 6. Shared cart counter state
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="shop">
      <h1>Mini Fruit & Veg Stand</h1>

      {/* 7. Dynamic cart status */}
      <p>{cartCount === 0 ? 'Cart is empty' : `${cartCount} items in cart`}</p>

      {/* 8. Render products using .map() */}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}