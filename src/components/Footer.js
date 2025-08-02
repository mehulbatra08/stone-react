import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Get links from Navbar structure or define them here
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/products', text: 'Products' },
    { to: '/process', text: 'Our Process' },
    { to: '/contact', text: 'Contact Us' },
  ];

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {navLinks.map(link => (
                <li key={link.to} className="mb-2">
                  <Link to={link.to} className="text-white text-decoration-none">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="col-md-5">
            <h5>Address</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><strong>Office:</strong> chawanda marmonite , siyana , Rajsamand 313332</li>
              <li className="mb-2"><strong>Mines:</strong> Sai chawanda marble private limited Address- B-253, road no. 12 , mewar industrial, Udaipur 313001</li>
              <li className="mb-2"><strong>Factory:</strong> hans marble pvt ltd Aagriya choraha , amet 313332</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-phone me-2"></i> Phone: +91 9413172337 /+8755555605</li>
              <li className="mb-2"><i className="fas fa-envelope me-2"></i> Email: Info@chawandaexim.com</li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-4">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3 justify-content-center">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ 
                    fontSize: '24px', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#1877f2',
                    borderRadius: '50%',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  title="Follow us on Facebook"
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ 
                    fontSize: '24px', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#e4405f',
                    borderRadius: '50%',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  title="Follow us on Instagram"
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ 
                    fontSize: '24px', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#0077b5',
                    borderRadius: '50%',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  title="Follow us on LinkedIn"
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ 
                    fontSize: '24px', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#1da1f2',
                    borderRadius: '50%',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  title="Follow us on Twitter"
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="https://wa.me/919413172337" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ 
                    fontSize: '24px', 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#25d366',
                    borderRadius: '50%',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  title="Chat with us on WhatsApp"
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Placeholder for Logo/Brand */}
            <div className="mt-4 text-center text-md-start">
               {/* You can add a logo or brand name here later */}
               {/* <img src="/images/Chawanda-Logo-No-Bg.png" alt="Logo" height="50" /> */}
               {/* <h5 className="mt-2">Chawanda</h5> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Chawanda. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 