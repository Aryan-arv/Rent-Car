import React, { useState } from 'react';
import cars from '../data/cars.json';
import CarCard from '../components/CarCard';
import Sidebar from '../components/Sidebar';

function SearchResults() {
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilter = (filter) => {
    let updatedCars = cars;

    if (filter.name) {
      updatedCars = updatedCars.filter((car) =>
        car.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }
    if (filter.type) {
      updatedCars = updatedCars.filter((car) => car.type === filter.type);
    }
    if (filter.seating) {
      updatedCars = updatedCars.filter((car) => car.seating === parseInt(filter.seating, 10));
    }
    if (filter.minPrice) {
      updatedCars = updatedCars.filter((car) =>
        parseFloat(car.price.replace(/[^0-9.-]+/g, '')) >= parseFloat(filter.minPrice)
      );
    }
    if (filter.maxPrice) {
      updatedCars = updatedCars.filter((car) =>
        parseFloat(car.price.replace(/[^0-9.-]+/g, '')) <= parseFloat(filter.maxPrice)
      );
    }

    setFilteredCars(updatedCars);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        <Sidebar onFilter={handleFilter} />
      </div>

      {/* Car results */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Search Results</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {filteredCars.map((car) => (
            <div key={car.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
