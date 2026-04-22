import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Services from './components/Services';
import Projects from './components/Projects';
import Partnerships from './components/Partnerships';
import WhyAESPL from './components/WhyAESPL';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <About />
      <CoreValues />
      <Services />
      <Projects />
      <Partnerships />
      <WhyAESPL />
      <Testimonials />
      <Benefits />
      <Careers />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
