import React, { useState } from 'react';

const Hero = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section 
      className="hero-section position-relative"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 0',
        overflow: 'hidden',
        background: videoError ? 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/hero-bg.jpg) no-repeat center center' : 'none',
        backgroundSize: 'cover'
      }}
    >
      {/* Video Background */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2
          }}
        >
          <source src="/images/Hero-Section/stone-website.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1
        }}
      />

      <div className="container position-relative">
        <div className="row justify-content-center text-center text-white">
          <div className="col-lg-10">
            <h1 className="mb-4 display-4 fw-bold">
              Delivering Excellence in Natural Stones
            </h1>
            <p className="mb-5 lead">
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