import React, { useEffect, useState } from "react";
import Cart from "./cart";
import Products from "./products";

import "./mainpage.css";

export default function Mainpage(props) {
  const { user } = props;

  const [products, updateProducts] = useState([]);
  const [cartItems, updateCart] = useState(
    JSON.parse(localStorage.getItem(`cartItems-${user.userid}`)) || {}
  );
  const [contentState, updateContentState] = useState("products");

  useEffect(() => {
    const headers = new Headers();
    //no need for these stupid header
    headers.append("Content-Type", "application/json");
    headers.append("Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");

    fetch("http://localhost:5000/products", {
      method: "GET",
      credentials: "include",
      headers: headers,
    })
      .then((data) => data.json())
      .then((res) => {
        updateProducts(res);
      });
  }, [JSON.stringify(products)]);

  return (
    <div className="mainpage-wrapper">
      <div className="mainpage-header">
        <div className="mainpage-header-title">SpringCt Shop</div>
        <div className="userinfo">
          <span>Userid : {user.userid}</span>
          <span>User type : {user.admin ? "Admin" : "Normal user"}</span>
        </div>
        <div className="navbar">
          <span
            className={contentState === "products" && "navbaractive"}
            onClick={() => updateContentState("products")}
          >
            Products
          </span>
          <span
            className={contentState === "cart" && "navbaractive"}
            onClick={() => updateContentState("cart")}
          >
            Cart
          </span>
        </div>
      </div>

      <div className="mainpage-content">
        {contentState === "products" && (
          <Products
            products={products}
            updateCart={updateCart}
            cartItems={cartItems}
            userid={user.userid}
          />
        )}

        {contentState === "cart" && (
          <div className="mainpage-cart">
            <Cart products={products} cartItems={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
}
