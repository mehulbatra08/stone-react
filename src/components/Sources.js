import React, { memo, useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';

// Use a reliable TopoJSON source
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Animation for counting up numbers
const AnimatedNumber = ({ value, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepValue = value / steps;
    const stepTime = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(Math.min(Math.floor(stepValue * current), value));
      if (current >= steps) clearInterval(timer);
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <div className="card border-0 shadow-sm h-100 number-card">
      <div className="card-body">
        <div className="display-4 fw-bold text-primary mb-2">{count}{value.toString().includes('+') ? '+' : ''}</div>
        <h5 className="text-muted mb-0">{label}</h5>
      </div>
    </div>
  );
};

const MapChart = memo(() => {
  // Source point (India)
  const source = { coordinates: [78.9629, 20.5937], name: "India" };

  // Export destinations grouped by region
  const destinations = [
    { coordinates: [15, 45], name: "Europe", region: "Europe" },
    { coordinates: [51, 25], name: "Middle East", region: "Middle East" }
  ];

  return (
    <div style={{ width: "100%", height: "600px", background: "#F8F9FA" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 200,
          center: [65, 30]
        }}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E5E5E5"
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: "#D6D6DA",
                      outline: "none",
                      transition: "all 0.3s ease-in-out"
                    },
                    pressed: { outline: "none" }
                  }}
                />
              ))
            }
          </Geographies>

          {/* Source Marker */}
          <Marker coordinates={source.coordinates}>
            <g transform="translate(-12, -24)">
              <path
                d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                fill="#E63946"
                fillRule="evenodd"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <text
              textAnchor="middle"
              y={-30}
              style={{
                fontFamily: "system-ui",
                fill: "#E63946",
                fontSize: "14px",
                fontWeight: "bold"
              }}
            >
              {source.name}
            </text>
          </Marker>

          {/* Destination Markers and Lines */}
          {destinations.map((destination, index) => (
            <React.Fragment key={index}>
              <Line
                from={source.coordinates}
                to={destination.coordinates}
                stroke="#E63946"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="6,4"
                style={{
                  opacity: 0.6
                }}
              />
              <Marker coordinates={destination.coordinates}>
                <g transform="translate(-6, -12)">
                  <path
                    d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                    fill="#E63946"
                    fillRule="evenodd"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transform: "scale(0.75)" }}
                  />
                </g>
                <text
                  textAnchor="middle"
                  y={-20}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#E63946",
                    fontSize: "16px",
                    fontWeight: "bold"
                  }}
                >
                  {destination.name}
                </text>
              </Marker>
            </React.Fragment>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
});

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

          .map-container {
            transition: all 0.3s ease;
            transform-style: preserve-3d;
            perspective: 1000px;
          }

          .map-container:hover {
            transform: rotateX(5deg) rotateY(5deg);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
        `}
      </style>
      <div className="container">
        {/* Our Numbers Section */}
        <div className={`row mb-5 ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-5 fade-in-up">
            <h2 className="fw-bold">Our Numbers</h2>
            <p className="text-muted">Our achievements in numbers</p>
          </div>
          <div className="col-md-3 text-center mb-4 mb-md-0 fade-in-up delay-1">
            <AnimatedNumber value={1995} label="Established Year" />
          </div>
          <div className="col-md-3 text-center mb-4 mb-md-0 fade-in-up delay-2">
            <AnimatedNumber value={12} label="Countries of Import" />
          </div>
          <div className="col-md-3 text-center mb-4 mb-md-0 fade-in-up delay-3">
            <AnimatedNumber value={25} label="Countries of Export" />
          </div>
          <div className="col-md-3 text-center fade-in-up delay-4">
            <AnimatedNumber value={5000} label="Orders Fulfilled" />
          </div>
        </div>

        {/* Our Global Reach Section */}
        <h2 className="text-center fw-bold mb-5 fade-in-up">Our Global Reach</h2>
        <div className="row mb-5">
          <div className="col-md-6 fade-in-up delay-1">
            <div className="card border-0 shadow-sm h-100 floating">
              <div className="card-body">
                <h3 className="card-title h4 mb-4">Our Sources</h3>
                <p className="text-muted">
                  We source our premium quality stones from the finest quarries across India, including:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    South India - Known for Black Galaxy, Absolute Black, and Premium Black Granite
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    North India - Famous for Imperial Red, Alaska White, and Crystal Yellow Granite
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    Rajasthan - Source of premium Marbles and unique Granite varieties
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 fade-in-up delay-2">
            <div className="card border-0 shadow-sm h-100 floating">
              <div className="card-body">
                <h3 className="card-title h4 mb-4">Export Destinations</h3>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <h4 className="h5 mb-3">Europe</h4>
                      <p className="text-muted mb-0">Major exports to various European countries including Germany, France, and Italy.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-4">
                      <h4 className="h5 mb-3">Middle East</h4>
                      <p className="text-muted mb-0">Strong presence in Middle Eastern markets including UAE, Saudi Arabia, and Qatar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card border-0 shadow-sm map-container fade-in-up delay-3">
          <div className="card-body p-0">
            <MapChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources; 