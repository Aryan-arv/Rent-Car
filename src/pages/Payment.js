import React, { useState } from 'react';

const Payment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto p-4">
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded">
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p>Your payment has been processed successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <h1 className="text-2xl font-bold">Payment Details</h1>
          <input type="text" placeholder="Name" className="border p-2" required />
          <input type="text" placeholder="Pickup Location" className="border p-2" required />
          <input type="text" placeholder="Drop-off Location" className="border p-2" required />
          <input type="date" className="border p-2" required />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Payment;
