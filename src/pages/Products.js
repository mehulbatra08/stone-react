import React from 'react';
import GraniteGallery from '../components/GraniteGallery';

const Products = () => {
  return (
    <div>
      <div className="py-5 bg-primary text-white">
        <div className="container">
          <h1 className="text-center mb-3">Our Products</h1>
          <p className="text-center lead mb-0">
            Discover our extensive collection of premium quality natural stones
          </p>
        </div>
      </div>
      <GraniteGallery />
    </div>
  );
};

export default Products; 