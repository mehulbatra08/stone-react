import React from 'react';

const Hero = () => {
  return (
    <section 
      className="hero-section"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(images/hero-bg.jpg) no-repeat center center',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center text-white">
          <div className="col-lg-10">
            <h1 className="mb-4">
              Delivering Excellence in Natural Stones
            </h1>
            <p className="mb-5">
              Premium quality stones sourced from the finest quarries, delivered worldwide with precision and care
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a 
                href="#contact" 
                className="btn btn-primary btn-lg px-5 py-3"
                style={{ backgroundColor: '#b78f59', borderColor: '#b78f59' }}
              >
                Request a Quote
              </a>
              <a 
                href="#about" 
                className="btn btn-outline-light btn-lg px-5 py-3"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 