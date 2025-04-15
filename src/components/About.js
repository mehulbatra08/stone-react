import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-4">About Our Company</h2>
            <p className="lead">We specialize in importing and exporting high-quality natural stones, delivering premium products to customers worldwide on schedule.</p>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="fas fa-bullseye fa-lg"></i>
                  </div>
                  <h3 className="mb-0">Our Mission</h3>
                </div>
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
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <i className="fas fa-eye fa-lg"></i>
                  </div>
                  <h3 className="mb-0">Our Vision</h3>
                </div>
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
  );
};

export default About; 