import React from "react";
import ProductCard from "./productCard";

import "./product.css";

export default function Products(props) {
  const { products, updateCart, cartItems, userid } = props;

  return (
    <div>
      <span className="products-header">Avilable products</span>
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            updateCart={updateCart}
            cartItems={cartItems}
            userid={userid}
          />
        ))}
      </div>
    </div>
  );
}
