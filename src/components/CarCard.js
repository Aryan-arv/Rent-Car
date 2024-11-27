// src/components/CarCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CarCard = ({ car }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow-lg flex flex-col">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover mb-4"
        
        style={{ objectFit: 'cover' }}
      />
      <h2 className="text-xl font-bold">{car.name}</h2>
      <p className="text-gray-600">{car.type}</p>
      <p className="text-green-600 font-semibold">{car.price}</p>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => addToCart(car)}
        >
          Add to Cart
        </button>
        <Link
          to={`/details/${car.id}`}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
