import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-section position-relative overflow-hidden">
      <style>
        {`
          .hero-section {
            min-height: 100vh;
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            align-items: center;
            perspective: 1000px;
          }

          .hero-content {
            transform-style: preserve-3d;
            transition: transform 0.3s ease;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 40px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          .floating-element {
            animation: float 6s ease-in-out infinite;
          }

          .fade-in-up {
            opacity: 0;
            animation: fadeInUp 1s ease forwards;
          }

          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }

          .parallax-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transform: translateZ(-10px) scale(2);
          }

          .geometric-shape {
            position: absolute;
            opacity: 0.1;
            transform-style: preserve-3d;
            transition: all 0.3s ease;
          }

          .shape-1 {
            top: 20%;
            left: 10%;
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #ffffff, transparent);
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            animation: rotate3D 15s linear infinite;
          }

          .shape-2 {
            top: 60%;
            right: 15%;
            width: 150px;
            height: 150px;
            background: linear-gradient(-45deg, #ffffff, transparent);
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
            animation: rotate3D 20s linear infinite reverse;
          }

          @keyframes rotate3D {
            from {
              transform: rotate3d(1, 1, 1, 0deg);
            }
            to {
              transform: rotate3d(1, 1, 1, 360deg);
            }
          }

          .hero-title {
            font-size: 4rem;
            font-weight: 800;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            transform-style: preserve-3d;
          }

          .hero-subtitle {
            font-size: 1.5rem;
            transform-style: preserve-3d;
          }

          .hero-button {
            transform-style: preserve-3d;
            transition: all 0.3s ease;
          }

          .hero-button:hover {
            transform: translateY(-5px) translateZ(20px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <div className="parallax-bg">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
      </div>

      <div 
        className="container hero-content"
        style={{
          transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg) translateZ(50px)`
        }}
      >
        <div className="row justify-content-center text-center text-white">
          <div className="col-lg-10">
            <h1 className="hero-title mb-4 floating-element fade-in-up">
              Delivering Excellence in Natural Stones
            </h1>
            <p className="hero-subtitle mb-5 fade-in-up delay-1">
              Premium quality stones sourced from the finest quarries, delivered worldwide with precision and care
            </p>
            <div className="fade-in-up delay-2">
              <a 
                href="#contact" 
                className="btn btn-primary btn-lg hero-button px-5 py-3"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 