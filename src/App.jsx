import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='overflow-x-hidden bg-black text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Background div */}
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
        </div>
      </div>


        {/* Fixed div for backdrop */}
        {/* <div className='fixed top-0 z-[-10] h-full w-full'></div> */}

        {/* Main content */}
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
    </div>
  );
}

// npm run dev to start server.
export default App;


