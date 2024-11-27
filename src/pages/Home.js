import React from 'react';
import cars from '../data/cars.json';
import CarCard from '../components/CarCard';


function Home() {
  return (
    <div className="container mx-auto p-4">

      <h1 className="text-2xl font-bold text-center mb-4">Available Cars</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {cars.map((car) => (
          <div key={car.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
