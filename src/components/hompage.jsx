import React from 'react'
import Header from './header';
import AboutMe from './aboutMe';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer';

const Hompage = () => {
  return (
    <>
        <Header/>
        <Skills/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Hompage