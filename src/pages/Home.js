import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <section className="py-5 text-white" style={{ background: 'linear-gradient(90deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
          <p className="lead mb-4">Reach out to us for any inquiries or to discuss your needs.</p>
          <Link 
            to="/contact" 
            className="btn btn-lg btn-light px-5 py-3 text fw-semibold shadow"
          >
            Get in touch with us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 