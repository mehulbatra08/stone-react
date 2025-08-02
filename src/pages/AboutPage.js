import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sources from '../components/Sources';

const AboutPage = () => {
  const navigate = useNavigate();

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
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/#contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-white position-relative" style={{ minHeight: '40vh' }}>
        {/* Slideshow Background */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
            transition: 'background-image 0.5s ease-in-out'
          }}
        ></div>
        {/* Overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            // background: 'linear-gradient(120deg, rgba(183, 143, 89, 0.8) 60%, rgba(255, 251, 230, 0.8) 100%)'
          }}
        ></div>
        <div className="container text-center py-5">
          <div className="position-relative" style={{ zIndex: 1 }}>
            <h1 className="display-4 fw-bold mb-3">About Us</h1>
            <p className="lead mb-4">Discover our journey, values, and what makes us a global leader in natural stone exports.</p>
          </div>
        </div>
      </section>

        {/* Global Reach Section */}
        <Sources />

      {/* Mission and Vision Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '60px', height: '60px', backgroundColor: '#b78f59'}}>
                      <i className="fas fa-bullseye fa-2x"></i>
                    </div>
                    <h3 className="mb-0 fw-bold">Our Mission</h3>
                  </div>
                  <p className="lead mb-4">To be the global leader in natural stone exports, delivering excellence in every project.</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 bg-transparent d-flex align-items-center">
                      <i className="fas fa-check-circle text-success me-3"></i>
                      <span>Provide highest possible quality stones at most competitive price possible.</span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent d-flex align-items-center">
                      <i className="fas fa-check-circle text-success me-3"></i>
                      <span>Re-define lifestyle standards by discovering natural stones and delivering exquisite monuments, cobbles, slabs, etc.</span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent d-flex align-items-center">
                      <i className="fas fa-check-circle text-success me-3"></i>
                      <span>Strive towards growth and being recognized as the most reliable exporter in the world.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '60px', height: '60px', backgroundColor: '#b78f59'}}>
                      <i className="fas fa-eye fa-2x"></i>
                    </div>
                    <h3 className="mb-0 fw-bold">Our Vision</h3>
                  </div>
                  <p className="lead mb-4">To transform spaces with natural beauty while maintaining sustainable practices.</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 bg-transparent d-flex align-items-center">
                      <i className="fas fa-star text-warning me-3"></i>
                      <span>Always keep our core values at forefront and preserve a safe, friendly environment for our employees.</span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent d-flex align-items-center">
                      <i className="fas fa-star text-warning me-3"></i>
                      <span>Constantly prioritize customer satisfaction and maintain customer relations and loyalty.</span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent d-flex align-items-center">
                      <i className="fas fa-star text-warning me-3"></i>
                      <span>Thrive towards becoming a sustainable business and improving people's lives.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    

      {/* About Us Image Gallery */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Our Journey in Pictures</h2>
          <div className="row g-4 justify-content-center">
            {[
              'WhatsApp Image 2025-05-06 at 7.12.05 PM.jpeg',
              'WhatsApp Image 2025-05-06 at 7.12.04 PM.jpeg',
              'WhatsApp Image 2025-05-06 at 7.12.06 PM (1).jpeg',
              'WhatsApp Image 2025-05-06 at 7.12.06 PM.jpeg',
            ].map((img, idx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={img}>
                <div className="card shadow-sm h-100 border-0">
                  <img src={`/about-us-images/${img}`} alt={`About Us ${idx + 1}`} className="card-img-top rounded" style={{ objectFit: 'cover', height: '220px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights Section */}
      <section className="py-5 bg-white border-top border-bottom" style={{ background: 'linear-gradient(90deg, #fffbe6 60%, #b78f59 100%)' }}>
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold mb-3 text" style={{ color: '#000000' }}>Why Choose Us?</h2>
            <p className="lead text-muted">Our commitment to quality, innovation, and customer satisfaction sets us apart.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 shadow rounded h-100 bg-light">
                <i className="fas fa-gem fa-2x mb-3 text-warning"></i>
                <h5 className="fw-bold mb-2">Premium Quality</h5>
                <p className="text-muted">We source only the finest stones and maintain strict quality control at every stage.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow rounded h-100 bg-light">
                <i className="fas fa-globe fa-2x mb-3 text-info"></i>
                <h5 className="fw-bold mb-2">Global Reach</h5>
                <p className="text-muted">Our network spans over 25 countries, ensuring timely delivery and local expertise.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow rounded h-100 bg-light">
                <i className="fas fa-handshake fa-2x mb-3 text-success"></i>
                <h5 className="fw-bold mb-2">Trusted Partnerships</h5>
                <p className="text-muted">We build long-term relationships with our clients, focusing on trust and transparency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(90deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Work With Us?</h2>
          <p className="lead mb-4">Contact us today to discuss your project or request a quote for our premium natural stones.</p>
          <button onClick={handleContactClick} className="btn btn-lg btn-light px-5 py-3 text fw-semibold shadow">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 