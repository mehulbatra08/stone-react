import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
            <h2 className="fw-bold mb-4">About Our Company</h2>
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