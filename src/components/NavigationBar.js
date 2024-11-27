// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const NavigationBar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-700 text-white p-4 mb-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" className="text-lg font-bold hover:text-gray-400">Home</Link>
        </li>
        <li className="flex space-x-4">
          <Link to="/search" className="hover:text-gray-400">Search</Link>
          <Link to="/payment" className="hover:text-gray-400">Payment</Link>
          <div className="relative">
            <Link to="/cart" className="hover:text-gray-400">
              <span className="material-icons">shopping_cart</span>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
