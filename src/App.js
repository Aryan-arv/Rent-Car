// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import CarDetails from './pages/CarDetails';
import Payment from './pages/Payment';
import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <NavigationBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/details/:id" element={<CarDetails />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
