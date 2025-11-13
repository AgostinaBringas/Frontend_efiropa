import React from "react";
import { useCart } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width={80} />
      <div>
        <h4>{item.name}</h4>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio: ${item.price * item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
