import React from 'react';
import Header from './header';
import AboutMe from './aboutMe';
import Projects from './Projects/projects';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer';
import TimeLine from './TimeLine';
import StarsCanvas from './Stars';
import Loading from './Loading';

const Homepage = () => {
  return (
    <div className="homepage-container">
        <StarsCanvas />
        <Header />
        <Skills />
        <AboutMe />
        <TimeLine />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default Homepage;
