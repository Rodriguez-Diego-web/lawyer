import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import PracticeAreas from './components/PracticeAreas';
import AboutMe from './components/AboutMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Partners />
        <PracticeAreas />
        <AboutMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;