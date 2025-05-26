import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Animation for counting up numbers
const AnimatedNumber = ({ value, label, color = '#b78f59' }) => {
  const [count, setCount] = useState(0);
  const hasPlus = typeof value === 'string' && value.includes('+');
  const numericValue = hasPlus ? parseInt(value) : value;
  
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepValue = numericValue / steps;
    const stepTime = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(Math.min(Math.floor(stepValue * current), numericValue));
      if (current >= steps) clearInterval(timer);
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [numericValue]);
  
  return (
    <div className="card border-0 shadow-sm h-100 number-card">
      <div className="card-body">
        <div className="display-4 fw-bold mb-2" style={{ color }}>{count}{hasPlus ? '+' : ''}</div>
        <h5 className="text-muted mb-0">{label}</h5>
      </div>
    </div>
  );
};

const Sources = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="sources" className="py-5 bg-light">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px) rotateX(0deg);
            }
            50% {
              transform: translateY(-10px) rotateX(5deg);
            }
            100% {
              transform: translateY(0px) rotateX(0deg);
            }
          }

          .number-card {
            transition: all 0.3s ease;
            animation: scaleIn 0.5s ease forwards;
            transform-style: preserve-3d;
            perspective: 1000px;
          }

          .number-card:hover {
            transform: translateY(-10px) rotateX(10deg);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          }

          .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
          }

          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
          .delay-4 { animation-delay: 0.8s; }

          .floating {
            animation: float 3s ease-in-out infinite;
          }

          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
            border-radius: 0.5rem;
          }

          .process-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 0.5rem;
            transition: transform 0.3s ease;
          }

          .process-image:hover {
            transform: scale(1.05);
          }
        `}
      </style>
      <div className="container">
        {/* Hero Image with Overlay */}
        <div className="position-relative mb-5 rounded overflow-hidden fade-in-up" style={{ height: '300px' }}>
          <img 
            src="/images/Hero-Section/company-build.jpg" 
            alt="Global Operations" 
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
          <div className="image-overlay"></div>
          <div className="position-absolute bottom-0 start-0 p-4 text-white">
            <h2 className="fw-bold mb-2">Our Global Presence</h2>
            <p className="lead mb-0">Delivering excellence across continents</p>
          </div>
        </div>

        {/* Our Numbers Section */}
        <div className={`row g-4 mb-5 ${isVisible ? 'visible' : ''}`}>
          <div className="col-md-4 pt-2 text-center mb-4 mb-md-0 fade-in-up delay-1">
            <AnimatedNumber value={1995} label="Established Year" style={{color: '#b78f59'}} />
          </div>
          <div className="col-md-4 pt-2 text-center mb-4 mb-md-0 fade-in-up delay-2">
            <AnimatedNumber value={25} label="Countries of Export" style={{color: '#b78f59'}} />
          </div>
          <div className="col-md-4 pt-2 text-center mb-4 mb-md-0 fade-in-up delay-3">
            <AnimatedNumber value="5000+" label="Orders Fulfilled" style={{color: '#b78f59'}} />
          </div>
          <div className="col-md-4 pt-2 text-center mb-4 mb-md-0 fade-in-up delay-1">
            <AnimatedNumber value={12} label="Countries of Import" style={{color: '#b78f59'}} />
          </div>
          <div className="col-md-4 pt-2 text-center mb-4 mb-md-0 fade-in-up delay-2">
            <AnimatedNumber value={15} label="Mining Units" style={{color: '#b78f59'}} />
          </div>
          <div className="col-md-4 pt-2 text-center mb-4 mb-md-0 fade-in-up delay-3">
            <AnimatedNumber value={8} label="Manufacturing Units" style={{color: '#b78f59'}} />
          </div>
        </div>

        {/* Process Images Grid */}
        <div className="row g-4 mb-5">
          <div className="col-md-4 fade-in-up delay-1">
            <div className="card border-0 shadow-sm h-100">
              <img 
                src="/images/process-images/Mining.jpg" 
                alt="Mining Process" 
                className="process-image"
                onError={(e) => {
                  console.error('Error loading Mining image');
                  e.target.style.display = 'none';
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Mining Excellence</h5>
                <p className="card-text text-muted">Advanced mining techniques ensuring premium quality stone extraction.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 fade-in-up delay-2">
            <div className="card border-0 shadow-sm h-100">
              <img 
                src="/images/process-images/manufacturing.jpg" 
                alt="Manufacturing Process" 
                className="process-image"
                onError={(e) => {
                  console.error('Error loading Manufacturing image');
                  e.target.style.display = 'none';
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Precision Manufacturing</h5>
                <p className="card-text text-muted">State-of-the-art facilities for perfect stone processing.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 fade-in-up delay-3">
            <div className="card border-0 shadow-sm h-100">
              <img 
                src="/images/process-images/packaging.jpg" 
                alt="Packaging Process" 
                className="process-image"
                onError={(e) => {
                  console.error('Error loading Packaging image');
                  e.target.style.display = 'none';
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Secure Packaging</h5>
                <p className="card-text text-muted">Custom packaging solutions for safe global delivery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Process Images */}
        <div className="row g-4 mb-5">
          <div className="col-md-4 fade-in-up delay-1">
            <div className="card border-0 shadow-sm h-100">
              <img 
                src="/images/process-images/export.jpg" 
                alt="Export Process" 
                className="process-image"
                onError={(e) => {
                  console.error('Error loading Export image');
                  e.target.style.display = 'none';
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Global Export</h5>
                <p className="card-text text-muted">Efficient logistics and worldwide delivery network.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 fade-in-up delay-2">
            <div className="card border-0 shadow-sm h-100">
              <img 
                src="/images/process-images/team.jpg" 
                alt="Quality Team" 
                className="process-image"
                onError={(e) => {
                  console.error('Error loading Team image');
                  e.target.style.display = 'none';
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Expert Team</h5>
                <p className="card-text text-muted">Skilled professionals ensuring quality at every step.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 fade-in-up delay-3">
            <div className="card border-0 shadow-sm h-100">
              <img 
                src="/images/process-images/technology.jpg" 
                alt="Technology" 
                className="process-image"
                onError={(e) => {
                  console.error('Error loading Technology image');
                  e.target.style.display = 'none';
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Advanced Technology</h5>
                <p className="card-text text-muted">Cutting-edge equipment for precision processing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Machines Section */}
        <div className="container mb-5">
          <h2 className="text-center mb-5 fw-bold">Our State-of-the-Art Machinery</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 fade-in-up delay-1">
              <div className="card border-0 shadow-sm h-100">
                <img 
                  src="/images/our-machines/1.-Granite-Multiwire-Gangsaw.png" 
                  alt="Granite Multiwire Gangsaw" 
                  className="process-image"
                  onError={(e) => {
                    console.error('Error loading Granite Multiwire Gangsaw image');
                    e.target.style.display = 'none';
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Granite Multiwire Gangsaw</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fade-in-up delay-2">
              <div className="card border-0 shadow-sm h-100">
                <img 
                  src="/images/our-machines/2.-Gangsaw-Sawing-Machine.jpg" 
                  alt="Gangsaw Sawing Machine" 
                  className="process-image"
                  onError={(e) => {
                    console.error('Error loading Gangsaw Sawing Machine image');
                    e.target.style.display = 'none';
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Gangsaw Sawing Machine</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fade-in-up delay-3">
              <div className="card border-0 shadow-sm h-100">
                <img 
                  src="/images/our-machines/3.-Vertical-Slab-Multi-Cutter.jpg" 
                  alt="Vertical Slab Multi Cutter" 
                  className="process-image"
                  onError={(e) => {
                    console.error('Error loading Vertical Slab Multi Cutter image');
                    e.target.style.display = 'none';
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Vertical Slab Multi Cutter</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fade-in-up delay-1">
              <div className="card border-0 shadow-sm h-100">
                <img 
                  src="/images/our-machines/4.-Resin-Line.jpg" 
                  alt="Resin Line" 
                  className="process-image"
                  onError={(e) => {
                    console.error('Error loading Resin Line image');
                    e.target.style.display = 'none';
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Resin Line</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fade-in-up delay-2">
              <div className="card border-0 shadow-sm h-100">
                <img 
                  src="/images/our-machines/5.-Single-Blade-Auto-Bridge-Cutting-Machine.jpg" 
                  alt="Single Blade Auto Bridge Cutting Machine" 
                  className="process-image"
                  onError={(e) => {
                    console.error('Error loading Single Blade Auto Bridge Cutting Machine image');
                    e.target.style.display = 'none';
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Single Blade Auto Bridge Cutting Machine</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fade-in-up delay-3">
              <div className="card border-0 shadow-sm h-100">
                <img 
                  src="/images/our-machines/6.-Auto-Polisher.jpg" 
                  alt="Auto Polisher" 
                  className="process-image"
                  onError={(e) => {
                    console.error('Error loading Auto Polisher image');
                    e.target.style.display = 'none';
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Auto Polisher</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center mt-4">
          <Link 
            to="/process" 
            className="btn btn-primary px-4 py-2 fade-in-up delay-3"
            style={{ backgroundColor: '#b78f59', borderColor: '#b78f59' }}
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sources; 