import React from 'react';
import Products from '../components/Products';

const ProductsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">Our Products</h1>
          <p className="lead mb-4">Discover our journey, values, and what makes us a global leader in natural stone exports.</p>
          
        </div>
      </section>

      {/* Products Grid Section */}
      <Products />

      {/* Call to Action Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(90deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Order?</h2>
          <p className="lead mb-4">Contact us for a quote or to discuss your requirements with our experts.</p>
          <a href="/#contact" className="btn btn-lg btn-light px-5 py-3 text fw-semibold shadow">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 