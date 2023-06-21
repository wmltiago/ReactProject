import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Itens do Carrinho</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="subtotal">
          <h2>Subtotal: R${totalAmount.toLocaleString()}</h2>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/")}>Continuar Comprando</button>
            <button onClick={() => {checkout(); navigate("/checkout");}}>
              Ir para Pagamento
            </button>
          </div>
        </div>

      ) : (
        <h1> Ops! Seu carrinho está vazio :(</h1>
      )}
    </div>
  );
};