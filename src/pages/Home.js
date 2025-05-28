import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    { name: 'Rajasthan Black Granite', image: '/images/granite_images/1.-RAJASTHAN-BLACK-GRANITE-1-1-300x300.jpeg' }, // Placeholder image
    { name: 'Alaska gold granite', image: '/images/granite_images/2.-ALASKA-WHITE-GRANITE-1-300x300.jpg' }, // Placeholder image
    { name: 'P White Granite', image: '/images/granite_images/3.-P-WHITE-GRANITE-1-300x300.jpg' }, // Placeholder image
    { name: 'Black Markino Granite', image: '/images/granite_images/7.-BLACK-MARCINO-GRANITE-300x300.jpeg' }, // Placeholder image
  ];

  return (
    <div>
      <Hero />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      {/* Featured Products Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Explore Wide range of Products</h2>
          <div className="row g-4 justify-content-center">
            {featuredProducts.map((product, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link 
              to="/products"
              className="btn btn-lg btn-primary px-5 py-3 fw-semibold shadow"
              style={{ backgroundColor: '#b78f59', borderColor: '#b78f59' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-5 text-white" style={{ background: 'linear-gradient(90deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
          <p className="lead mb-4">Reach out to us for any inquiries or to discuss your needs.</p>
          <Link 
            to="/contact" 
            className="btn btn-lg btn-light px-5 py-3 text fw-semibold shadow"
          >
            Get in touch with us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 