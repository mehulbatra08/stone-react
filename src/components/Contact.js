import React from 'react';

const Contact = () => {
  return (
    <>
<section id="contact" className="py-5 bg-light">
    <div className="container">
        <div className="row">
            {/* Contact Form Card */}
            <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title mb-4">Send us a message</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="query" className="form-label">Your Query</label>
                                <textarea className="form-control" id="query" rows="3" required></textarea>
                            </div>
                            <button type="submit" className="btn" style={{backgroundColor: '#b78f59', borderColor: '#b78f59', color: 'white'}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Address and Contact Info Card */}
            <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title mb-4">Our Locations</h3>
                        
                        <div className="mb-4">
                            <h5 className="fw-bold">Office</h5>
                            <p className="mb-1">Chawanda Marmonite</p>
                            <p className="mb-1">Siyana, Rajsamand</p>
                            <p>313332</p>
                        </div>
                        
                        <div className="mb-4">
                            <h5 className="fw-bold">Mines</h5>
                            <p className="mb-1">Sai Chawanda Marble Private Limited</p>
                            <p className="mb-1">B-253, Road No. 12</p>
                            <p className="mb-1">Mewar Industrial Area, Udaipur</p>
                            <p>313001</p>
                        </div>
                        
                        <div className="mb-4">
                            <h5 className="fw-bold">Factory</h5>
                            <p className="mb-1">Hans Marble Pvt Ltd</p>
                            <p className="mb-1">Aagriya Choraha, Amet</p>
                            <p>313332</p>
                        </div>
                        
                        <div className="mt-4 pt-3 border-top">
                            <h4 className="fw-bold mb-3">Contact Info</h4>
                            <p className="mb-1"><i className="bi bi-telephone me-2"></i> Phone: +91 9413172337 / +8755555605</p>
                            <p className="mb-0"><i className="bi bi-envelope me-2"></i> Email: Info@chawandaexim.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      {/* Connect with Stone Expert Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Connect with a Stone Expert</h2>
              <p className="lead mb-4">Get personalized guidance from our experienced stone specialists to find the perfect solution for your project.</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a 
                  href="https://wa.me/919413172337?text=Hello! I would like to connect with a stone expert for my project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg px-4 py-3 fw-semibold shadow"
                  style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: 'white' }}
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  Chat on WhatsApp
                </a>
                <a 
                  href="tel:+919413172337"
                  className="btn btn-lg btn-outline-primary px-4 py-3 fw-semibold shadow"
                  style={{ borderColor: '#b78f59', color: '#b78f59' }}
                >
                  <i className="fas fa-phone me-2"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    <hr style={{border: '1px solid white'}} />

      {/* Google Maps Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="section-title mb-4 text-center">Our Location</h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="ratio ratio-16x9 rounded-bottom overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3609.8672336472628!2d73.86556227538213!3d25.207699477704143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEyJzI3LjciTiA3M8KwNTInMDUuMyJF!5e0!3m2!1sen!2sin!4v1754586049280!5m2!1sen!2sin"
                      style={{ border: 0, width: '100%', height: '100%', minHeight: '350px' }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our Location on Google Maps"
                    ></iframe>
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
