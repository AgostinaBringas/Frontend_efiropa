import React from "react";
import { useCart } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, total, clearCart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;
