import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const slideshowImages = [
    '/images/process-images/technology.jpg',
    '/images/process-images/team.jpg',
    '/images/process-images/packaging.jpg',
    '/images/process-images/Mining.jpg',
    '/images/process-images/manufacturing.jpg',
    '/images/process-images/export.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <section id="process" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <img 
                src="/images/Hero-Section/company-build.jpg" 
                alt="About Our Company" 
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6">
            {/* Slideshow Background for Heading */}
            <div className="position-relative mb-4">
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 rounded"
                style={{
                  backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(3px) brightness(0.3)',
                  transition: 'background-image 0.5s ease-in-out'
                }}
              ></div>
              {/* <h2 className="fw-bold mb-4 position-relative text-white" style={{ zIndex: 1 }}>
                About Our Company
              </h2> */}
            </div>
            <p className="lead mb-4">We specialize in importing and exporting high-quality natural stones, delivering premium products to customers worldwide on schedule.</p>
            <p className="mb-4">With over two decades of experience in the natural stone industry, we have established ourselves as a trusted name in the global market. Our commitment to excellence, quality, and customer satisfaction has made us a preferred choice for architects, builders, and homeowners worldwide.</p>
            <p className="mb-4">Our extensive collection includes premium granite, marble, limestone, sandstone, and slate, sourced from the finest quarries across India. Each stone is carefully selected, processed, and finished to meet international standards, ensuring that our clients receive nothing but the best.</p>
            <Link 
              to="/about" 
              className="btn btn-primary px-4 py-2"
              style={{ backgroundColor: '#b78f59', borderColor: '#b78f59' }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 