import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Leadership from './components/Leadership';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <CoreValues />
      <Leadership />
      <Services />
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