// src/pages/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, setCart } = useCart();

  const removeFromCart = (index) => {
    // Remove item at the specified index
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="border-b py-2 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
