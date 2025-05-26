import React from 'react';

const Contact = () => {
  return (
    <>
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
                    <button type="submit" className="btn" style={{backgroundColor: '#b78f59', borderColor: '#b78f59'}}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-4">Our Office</h4>
                  <div className="d-flex mb-3">
                    <i className="fas fa-map-marker-alt me-3 mt-1" style={{color: '#b78f59'}}></i>
                    <p>123 Stone Street, Granite City, 12345, Country</p>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fas fa-phone me-3 mt-1" style={{color: '#b78f59'}}></i>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fas fa-envelope me-3 mt-1" style={{color: '#b78f59'}}></i>
                    <p>info@globalstoneexports.com</p>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fas fa-clock me-3 mt-1" style={{color: '#b78f59'}}></i>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="mt-4">
                    <h5>Follow Us</h5>
                    <div className="d-flex">
                      <a href="https://facebook.com" className="me-3 fs-4" style={{color: '#b78f59'}}><i className="fab fa-facebook"></i></a>
                      <a href="https://instagram.com" className="me-3 fs-4" style={{color: '#b78f59'}}><i className="fab fa-instagram"></i></a>
                      <a href="https://linkedin.com" className="me-3 fs-4" style={{color: '#b78f59'}}><i className="fab fa-linkedin"></i></a>
                      <a href="https://twitter.com" className="fs-4" style={{color: '#b78f59'}}><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="section-title mb-4 text-center">Our Location</h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="ratio ratio-16x9 rounded-bottom overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14612.975409527537!2d90.497437!3d23.7029844!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589867989634!5m2!1sen!2sbd" style={{border:0, width:'100%', height:'100%', minHeight:'350px'}} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Our Location on Google Maps"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 