import React from 'react';
import Contact from '../components/Contact';

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead mb-4">Get in touch with us for inquiries, quotes, or collaborations.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default ContactUs; 