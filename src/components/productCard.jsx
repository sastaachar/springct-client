import React, { useCallback } from "react";

import "./product.css";

export default function ProductCard(props) {
  const { product, updateCart, cartItems, userid } = props;

  const handleAddItem = useCallback(() => {
    const newCart = cartItems;
    if (!newCart[product.id]) newCart[product.id] = 0;
    newCart[product.id] += 1;
    updateCart({ ...newCart });

    localStorage.setItem(`cartItems-${userid}`, JSON.stringify({ ...newCart }));
  }, [cartItems, product.id, updateCart]);

  const handleRemoveItem = useCallback(() => {
    const newCart = cartItems;
    if (newCart[product.id]) {
      newCart[product.id] -= 1;

      if (newCart[product.id] === 0) delete newCart[product.id];

      updateCart({ ...newCart });

      localStorage.setItem(
        `cartItems-${userid}`,
        JSON.stringify({ ...newCart })
      );
    }
  }, [cartItems, product.id, updateCart]);

  console.log(userid);

  return (
    <div className="product-crd-wrapper">
      <img
        className="product-crd-img"
        src={product.image}
        alt={`Imagine an ${product.name} here !`}
      />

      <span className="product-crd-title">{product.name}</span>
      <span className="product-crd-price">${product.price}</span>
      <span>Quantity : {cartItems[product.id] || 0}</span>
      <div className="product-crd-ctrls">
        <div>
          <button onClick={handleAddItem}>+</button>
        </div>
        <div>
          <button onClick={handleRemoveItem}>-</button>
        </div>
      </div>
    </div>
  );
}
