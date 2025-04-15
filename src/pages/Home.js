import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Sources from '../components/Sources';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Process />
      <Sources />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home; 