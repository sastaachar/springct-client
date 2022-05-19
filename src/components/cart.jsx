import React from "react";

import "./cart.css";

const CartItem = (props) => {
  const { quantity, product } = props;

  return (
    <tr className="cart-item">
      <td className="cart-item-small">{quantity}</td>
      <td className="cart-item-small">x</td>
      <td className="cart-item-large">{product.name}</td>
      <td className="cart-item-large">{product.price}</td>{" "}
      <td className="cart-item-small"> = </td>
      <td className="cart-item-large">$ {product.price * quantity}</td>
    </tr>
  );
};

export default function Cart(props) {
  const { products, cartItems } = props;

  const total = Object.keys(cartItems)
    .reduce((prevVal, id) => {
      const curProduct = products.find((e) => e.id.toString() === id);
      const curCost = cartItems[id] * curProduct.price;
      return prevVal + curCost;
    }, 0)
    .toFixed(2);

  return (
    <div className="cart-wrapper">
      <span className="cart-top-title">
        Your cart (cart is saved in browser)
      </span>
      <span className="cart-top-total">
        Total Items : {Object.keys(cartItems).length}
      </span>
      <table>
        <tr className="cart-item">
          <td className="cart-item-small">Quantity</td>
          <td className="cart-item-small"> </td>
          <td className="cart-item-large">Name</td>
          <td className="cart-item-large">Per Price</td>
          <td className="cart-item-small"> </td>
          <td className="cart-item-large">Total</td>
        </tr>
        {Object.keys(cartItems).map((id) => {
          return (
            <CartItem
              key={id}
              quantity={cartItems[id]}
              product={products.find((e) => e.id.toString() === id)}
            />
          );
        })}
      </table>
      <span>{`Total : $ ${total}`}</span>
    </div>
  );
}
