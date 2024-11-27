// src/pages/CarDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import cars from '../data/cars.json'; // Assuming you have mock data available

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Car not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Car Details</h1>
      <div className="flex">
        <img src={car.image} alt={car.name} className="w-1/2 h-96 object-cover mr-4" />
        <div>
          <h2 className="text-xl font-bold">{car.name}</h2>
          <p className="text-gray-600">Type: {car.type}</p>
          <p className="text-gray-600">Seating Capacity: {car.seating}</p>
          <p className="text-gray-600">Price: {car.price}</p>
          <p className="mt-4">Additional details and reviews can be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
