import React from 'react';
import About from '../components/About';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/#contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">About Us</h1>
          <p className="lead mb-4">Discover our journey, values, and what makes us a global leader in natural stone exports.</p>
          <a href="#about" className="btn btn-light btn-lg px-4 shadow text fw-semibold">Explore More</a>
        </div>
      </section>

      {/* About Section (from component) */}
      <About />

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