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