import React from 'react';



const processSteps = [
  {
    title: '1. Sourcing Raw Materials',
    description: 'Carefully selecting the finest natural stones from trusted quarries.',
    icon: 'fa-mountain',
  },
  {
    title: '2. Quality Inspection',
    description: 'Rigorous quality checks to ensure only premium stones are processed.',
    icon: 'fa-search',
  },
  {
    title: '3. Cutting & Shaping',
    description: 'Precision cutting and shaping using advanced machinery.',
    icon: 'fa-cut',
  },
  {
    title: '4. Finishing & Polishing',
    description: 'Applying various finishes and polishing for a flawless look.',
    icon: 'fa-gem',
  },
  {
    title: '5. Packaging & Shipping',
    description: 'Secure packaging and timely shipping to destinations worldwide.',
    icon: 'fa-shipping-fast',
  },
];

const ProcessPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">Our Process</h1>
          <p className="lead mb-4">Discover our detailed workflow from raw material to finished product.</p>
        </div>
      </section>
      {/* Main Content */}
      <div className="bg-light min-vh-100 py-5">
        <div className="container">
          {/* Chawanda Process Overview Section - Expanded Narrative */}
          <section className="py-5 bg-light">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-8 text-center">
                  <h2 className="display-5 fw-bold mb-3">From Quarry to Perfection: The Chawanda Process</h2>
                  <div className="mx-auto mb-4" style={{width: '80px', height: '4px', backgroundColor: '#b78f59'}}></div>
                  <p className="lead text-muted">Discover our meticulous 6-step process that transforms raw stone into premium products</p>
                </div>
              </div>

              <div className="row g-4">
                {/* Mining */}
                <div className="col-12 col-lg-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-5">
                        <img 
                          src="/images/process-images/Mining.jpg" 
                          alt="Mining Process - Granite Quarry Operations" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                          style={{minHeight: '200px'}}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-3">Mining</h4>
                          <p className="text-muted mb-3">With 25+ years of expertise, we extract premium granite blocks using advanced techniques and sustainable practices from carefully selected quarries.</p>
                          <span className="badge rounded-pill text-white px-3 py-2" style={{backgroundColor: '#b78f59'}}>Step 1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manufacturing */}
                <div className="col-12 col-lg-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-5">
                        <img 
                          src="/images/process-images/Manufacturing.jpg" 
                          alt="Manufacturing Process - Stone Processing Facility" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                          style={{minHeight: '200px'}}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-3">Manufacturing</h4>
                          <p className="text-muted mb-3">Our three state-of-the-art facilities use precision gang saws, polishing machines, and CNC routers to create custom finishes and designs.</p>
                          <span className="badge rounded-pill text-white px-3 py-2" style={{backgroundColor: '#b78f59'}}>Step 2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Packaging */}
                <div className="col-12 col-lg-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-5">
                        <img 
                          src="/images/process-images/Packaging.jpg" 
                          alt="Packaging Process - Stone Protection and Crating" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                          style={{minHeight: '200px'}}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-3">Packaging</h4>
                          <p className="text-muted mb-3">Custom protection for every stone - from foam-lined boxes for tiles to reinforced wooden crates for large slabs, ensuring safe delivery.</p>
                          <span className="badge rounded-pill text-white px-3 py-2" style={{backgroundColor: '#b78f59'}}>Step 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Export */}
                <div className="col-12 col-lg-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-5">
                        <img 
                          src="/images/process-images/Export.jpg" 
                          alt="Export Process - Global Shipping and Logistics" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                          style={{minHeight: '200px'}}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-3">Export</h4>
                          <p className="text-muted mb-3">Global delivery to 25+ countries with comprehensive logistics, real-time tracking, and sustainable shipping practices.</p>
                          <span className="badge rounded-pill text-white px-3 py-2" style={{backgroundColor: '#b78f59'}}>Step 4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quality & Team */}
                <div className="col-12 col-lg-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-5">
                        <img 
                          src="/images/process-images/team.jpg" 
                          alt="Quality Control and Team - Testing and Inspection" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                          style={{minHeight: '200px'}}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-3">Quality & Team</h4>
                          <p className="text-muted mb-3">Multi-layered quality control with advanced testing equipment and a passionate team committed to excellence and continuous improvement.</p>
                          <span className="badge rounded-pill text-white px-3 py-2" style={{backgroundColor: '#b78f59'}}>Step 5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology & Equipment */}
                <div className="col-12 col-lg-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-5">
                        <img 
                          src="/images/process-images/Technology.jpg" 
                          alt="Technology and Equipment - Advanced Machinery" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                          style={{minHeight: '200px'}}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-3">Technology & Equipment</h4>
                          <p className="text-muted mb-3">Industry-leading machinery including multiwire gang saws, CNC routers, and automated handling systems for precision and efficiency.</p>
                          <span className="badge rounded-pill text-white px-3 py-2" style={{backgroundColor: '#b78f59'}}>Step 6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <h2 className="fw-bold text-center mb-5">Our Process Journey</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="position-relative" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                {/* Vertical line */}
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', background: 'linear-gradient(180deg, #b78f59 0%, #fffbe6 100%)', transform: 'translateX(-50%)', zIndex: 0 }}></div>
                {processSteps.map((step, idx) => (
                  <div key={idx} className="row mb-5 align-items-center" style={{ position: 'relative', zIndex: 1 }}>
                    <div className={`col-md-6 ${idx % 2 === 0 ? '' : 'order-md-2'}`}> {/* Left or right */}
                      <div className="bg-white shadow-sm rounded p-4 mb-3 mb-md-0">
                        <h5 className="fw-bold mb-2">{step.title}</h5>
                        <p className="mb-0 text-muted">{step.description}</p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column" style={{ position: 'relative' }}>
                      <div className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <div className="bg-white border border-3 border-warning rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px', zIndex: 2 }}>
                          <i className={`fas ${step.icon} fa-lg text-warning`}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology & Equipment Section */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container">
            <h3 className="fw-bold text-center mb-4">Our Technology & Equipment</h3>
            <div className="row g-4 justify-content-center">
              <div className="col-md-4 text-center">
                <div className="p-4 shadow rounded h-100 bg-light">
                  <i className="fas fa-industry fa-2x mb-3 text-warning"></i>
                  <h5 className="fw-bold mb-2">State-of-the-Art Machinery</h5>
                  <p className="text-muted">We use advanced cutting, polishing, and finishing machines for precision and efficiency.</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="p-4 shadow rounded bg-light h-100">
                  <i className="fas fa-microscope fa-2x mb-3 text-info"></i>
                  <h5 className="fw-bold mb-2">Laboratory Testing</h5>
                  <p className="text-muted">Every batch is tested for strength, durability, and finish in our in-house labs.</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="p-4 shadow rounded bg-light h-100">
                  <i className="fas fa-truck-loading fa-2x mb-3 text-success"></i>
                  <h5 className="fw-bold mb-2">Efficient Logistics</h5>
                  <p className="text-muted">Our logistics team ensures safe, on-time delivery to clients worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Machines Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h3 className="fw-bold text-center mb-4">Our Advanced Machinery</h3>
                <p className="lead text-muted">State-of-the-art equipment powering precision stone processing and manufacturing excellence</p>
              </div>
            </div>

            <div className="row g-4">
              {/* Granite Multiwire Gangsaw */}
              <div className="col-12 col-lg-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <img 
                        src="/images/our-machines/1.-Granite-Multiwire-Gangsaw.png" 
                        alt="Granite Multiwire Gangsaw - High Precision Block Cutting" 
                        className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <h4 className="fw-bold mb-3">Granite Multiwire Gangsaw</h4>
                        <p className="text-muted mb-3">Advanced multiwire technology for precise granite block cutting, ensuring minimal waste and maximum yield with superior edge quality.</p>
                        <div className="d-flex align-items-center">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gangsaw Sawing Machine */}
              <div className="col-12 col-lg-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <img 
                        src="/images/our-machines/2.-Gangsaw-Sawing-Machine.jpg" 
                        alt="Gangsaw Sawing Machine - Industrial Stone Processing" 
                        className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <h4 className="fw-bold mb-3">Gangsaw Sawing Machine</h4>
                        <p className="text-muted mb-3">Heavy-duty gangsaw for large-scale stone processing, delivering consistent thickness and smooth surfaces for premium slabs.</p>
                        <div className="d-flex align-items-center">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Slab Multi Cutter */}
              <div className="col-12 col-lg-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <img 
                        src="/images/our-machines/3.-Vertical-Slab-Multi-Cutter.jpg" 
                        alt="Vertical Slab Multi Cutter - Multi-Blade Stone Cutting" 
                        className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <h4 className="fw-bold mb-3">Vertical Slab Multi Cutter</h4>
                        <p className="text-muted mb-3">Multi-blade vertical cutting system for producing uniform tiles and custom-sized pieces with exceptional accuracy and speed.</p>
                        <div className="d-flex align-items-center">
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resin Line */}
              <div className="col-12 col-lg-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <img 
                        src="/images/our-machines/Resin_line.jpg" 
                        alt="Resin Line - Stone Enhancement and Treatment" 
                        className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <h4 className="fw-bold mb-3">Resin Line</h4>
                        <p className="text-muted mb-3">Advanced resin treatment system for enhancing stone durability, color consistency, and surface quality through specialized coating processes.</p>
                        <div className="d-flex align-items-center">
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single Blade Auto Bridge Cutting Machine */}
              <div className="col-12 col-lg-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <img 
                        src="/images/our-machines/Single_Blade.jpg" 
                        alt="Single Blade Auto Bridge Cutting Machine - Automated Precision Cutting" 
                        className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <h4 className="fw-bold mb-3">Single Blade Auto Bridge Cutting Machine</h4>
                        <p className="text-muted mb-3">Automated bridge cutting technology for precise shaping, edge profiling, and custom cuts with computer-controlled accuracy.</p>
                        <div className="d-flex align-items-center">
                      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Auto Polisher */}
              <div className="col-12 col-lg-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <img 
                        src="/images/our-machines/Auto_Polisher.jpg" 
                        alt="Auto Polisher - Automated Stone Polishing System" 
                        className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <h4 className="fw-bold mb-3">Auto Polisher</h4>
                        <p className="text-muted mb-3">Automated polishing system delivering mirror-like finishes with consistent quality, multiple polish levels, and optimal surface treatment.</p>
                        <div className="d-flex align-items-center">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Additional Info Section */}
            <div className="row justify-content-center mt-5">
              <div className="col-lg-10">
                <div className="card border-0 shadow-sm bg-light">
                  <div className="card-body p-4 p-lg-5 text-center">
                    <h4 className="fw-bold mb-3">Technology Excellence</h4>
                    <p className="text-muted mb-4">Our machinery represents the pinnacle of stone processing technology, combining traditional craftsmanship with modern automation to deliver unmatched quality and precision in every product.</p>
                    <div className="row g-3 justify-content-center">
                      <div className="col-6 col-md-3">
                        <div className="text-center">
                          <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fas fa-cogs fa-2x"></i>
                          </div>
                          <h6 className="fw-bold mb-1">Advanced Tech</h6>
                          <small className="text-muted">Latest machinery</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="text-center">
                          <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fas fa-award fa-2x"></i>
                          </div>
                          <h6 className="fw-bold mb-1">Premium Quality</h6>
                          <small className="text-muted">Consistent results</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="text-center">
                          <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fas fa-tachometer-alt fa-2x"></i>
                          </div>
                          <h6 className="fw-bold mb-1">High Efficiency</h6>
                          <small className="text-muted">Maximum output</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="text-center">
                          <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fas fa-shield-alt fa-2x"></i>
                          </div>
                          <h6 className="fw-bold mb-1">Reliability</h6>
                          <small className="text-muted">Proven performance</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Process Stands Out Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h3 className="fw-bold text-center mb-4">Why Our Process Stands Out</h3>
            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-body text-center">
                    <i className="fas fa-award fa-2x mb-3 text-warning"></i>
                    <h5 className="fw-bold mb-2">Unmatched Quality</h5>
                    <p className="text-muted">Our multi-stage quality checks guarantee only the best stones reach our customers.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-body text-center">
                    <i className="fas fa-leaf fa-2x mb-3 text-success"></i>
                    <h5 className="fw-bold mb-2">Sustainable Practices</h5>
                    <p className="text-muted">We prioritize eco-friendly methods and responsible sourcing in every step.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-body text-center">
                    <i className="fas fa-users fa-2x mb-3 text-info"></i>
                    <h5 className="fw-bold mb-2">Customer Focus</h5>
                    <p className="text-muted">We work closely with clients to deliver tailored solutions and exceptional service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProcessPage; 