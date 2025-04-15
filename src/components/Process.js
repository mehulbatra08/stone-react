import React from 'react';

const Process = () => {
  const processes = [
    {
      icon: "fa-search",
      title: "Market Research & Sourcing",
      description: "We carefully research and source the finest natural stones from the best quarries."
    },
    {
      icon: "fa-cogs",
      title: "Processing & Quality Control",
      description: "Our strict quality control ensures only the best products reach our customers."
    },
    {
      icon: "fa-shipping-fast",
      title: "Logistics & Global Distribution",
      description: "Our reliable logistics network ensures timely delivery around the world."
    }
  ];

  return (
    <section id="process" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Our Process</h2>
        <div className="row g-4">
          {processes.map((process, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                    <i className={`fas ${process.icon} fa-2x`}></i>
                  </div>
                  <h4>{process.title}</h4>
                  <p>{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 