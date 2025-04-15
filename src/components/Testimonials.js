import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The quality of granite we received exceeded our expectations. Delivery was on time, and the customer service was exceptional.",
      name: "John Smith",
      position: "Architectural Firm, USA"
    },
    {
      quote: "We've been working with Global Stone Exports for over 5 years, and they consistently deliver premium quality natural stones. Highly recommended!",
      name: "Maria Rodriguez",
      position: "Interior Design Studio, Spain"
    },
    {
      quote: "Their range of South Indian Granite is unmatched in quality. The team was helpful in selecting the perfect stone for our project.",
      name: "David Chen",
      position: "Construction Company, Singapore"
    }
  ];

  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Client Testimonials</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="card border-0 shadow">
                  <div className="card-body text-center p-5">
                    <p className="lead fst-italic mb-4">"{testimonial.quote}"</p>
                    <div className="d-flex justify-content-center">
                      <div>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <p className="text-muted mb-0">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 