import React, { useState } from 'react';

const Sidebar = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [seating, setSeating] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    onFilter({ name, type, seating, minPrice, maxPrice });
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Search by Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter car name"
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Car Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select Type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Coupe">Coupe</option>
          <option value="Luxury">Luxury</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Seating Capacity</label>
        <input
          type="number"
          value={seating}
          onChange={(e) => setSeating(e.target.value)}
          placeholder="e.g., 5"
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Price Range</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className="w-1/2 border rounded p-2"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className="w-1/2 border rounded p-2"
          />
        </div>
      </div>

      <button
        onClick={handleFilterChange}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Sidebar;
