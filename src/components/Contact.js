import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Get in Touch</h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Contact Us</h4>
                <p>Please feel free to contact us and we will reach out to you within 24 hrs.</p>
                <form id="contactForm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" required/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Our Office</h4>
                <div className="d-flex mb-3">
                  <i className="fas fa-map-marker-alt text-primary me-3 mt-1"></i>
                  <p>123 Stone Street, Granite City, 12345, Country</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="fas fa-phone text-primary me-3 mt-1"></i>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="fas fa-envelope text-primary me-3 mt-1"></i>
                  <p>info@globalstoneexports.com</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="fas fa-clock text-primary me-3 mt-1"></i>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
                <div className="mt-4">
                  <h5>Follow Us</h5>
                  <div className="d-flex">
                    <a href="#" className="me-3 text-dark fs-4"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="me-3 text-dark fs-4"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="me-3 text-dark fs-4"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-dark fs-4"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 