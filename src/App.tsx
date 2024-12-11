import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Chatbot from './components/chatbot/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </div>
      <Chatbot />
    </div>
  );
}

export default App;