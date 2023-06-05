import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import shoppingAvail from'../assets/projects/shoppingavail.png'
import techblog from '../assets/projects/techblog.png'
import cannabinode from '../assets/projects/cannabinode.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/projects.css'
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {img: techblog,
    description: 'A full stack Blog application with user authentication and authorization. This project allows users to communicate about tech. Users can view other profiles, create comments, delete comments, view their own profile, create posts, and delete posts.',
    properties: 'This application was created with express, node and react. When a user makes a request, their token is passed and decrypted to identify them. This application uses custom middleware to ensure the user has access to only their things.',
    stack: 'This application uses the SERN stack. I chose this stack because of its relational architechture. This application has multiple tables that reference another. Users have posts, posts have comments, comments have users ect. The relational aspect of MySQL made the most sense',
    technologies: ['React', 'Express', 'MySQL', 'JWT' ],
    link: 'https://github.com/ncortes04/Tech-Blog',
  },  {img: shoppingAvail,
    description: 'A full stack E-commerce application with user authentication and authorization. This is a rather simplistic project that focused more on my ability to not only authenticate users but authorize them. This projects uses middleware and conditional statements to ensure the user has access to admin role page. The admin role allows the user to create posts, and categories.',
    properties: 'This application was created with express, node and react. When a user submits a request it is passed to the server and handled with my controllers then routed with the routes folder. This application uses custom middleware to check if the user has certain permissions.',
    stack: 'This application uses the MERN stack. I chose this stack because of its lightweight and easy to read architechture. This application only uses three collections. With very few collections referencing eachother, it made more sense using a non relational database',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', ],
    link: 'https://github.com/ncortes04/shopping-avail',
  },
  {img: cannabinode,
    description: 'A full stack E-commerce application with user authentication. This project is an online dispensary website with stripe. Users can browse the catalog and add products to their cart. A user can filter what they are looking for and checkout.',
    contribution: 'This was a collaborative project in which me and 3 other classmates were assigned. We started with an idea and turned it into an application. I was in charge of the front end and helped with the back end. I created the models for Redux and handled the filtering and display of the product',
    stack: 'This application uses the MERN stack. We chose this stack because of it was the most familiar to us at the time. There was only a few collections being used so i believe Mongo was a great choice',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', 'GraphQl'],
    link: 'https://github.com/ncortes04/cannabinode',
  }
  ];

  const setting = {
    centerMode: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          arrows: false,
          centerPadding: '100px',
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '5px',
        }
      }
    ]

  }
  const renderSlides = () =>
  images.map((card, index) => (
    <div key={index}>
      <div className='flex-container'>
        <div className='project-card-upper'>
            <div className='img-container'>
            <img className='card-img' src={card.img} loading="lazy" alt='project demonstration'></img>
          
          </div>
          <div className='project-about-div'>
            <div>
              <h3>ABOUT THIS PROJECT</h3>
              <p>{card.description}</p>
            </div>
              <div className='project-links'>
              <a 
                href={card.link}
                rel="noreferrer"
                target="_blank"
                className='repo-button'>
                Source Code
              </a> 
              
              </div>   
          </div>
          </div>
        <div className='text-container'>
         {card.properties ? <h3>How It Works </h3> : <h3>My Contribution</h3>}
         {card.properties ? <p>{card.properties}</p> : <p>{card.contribution}</p>}
          <h3>Tech Stack</h3>
          <p>{card.stack}</p>
          <h3>TECHNOLOGIES</h3>
          <div className='technologies-flex'>
            {card.technologies.map(item => {
              return(<div className='technologies-card'><p>{item}</p></div>)
            })}
          </div>
        </div>
      </div>
    </div>
  ));
  const sliderRef = useRef(null);

  const handlePrevClick = async () => {
    sliderRef.current.slickPrev();

  };

  const handleNextClick = async () => {
    await sliderRef.current.slickNext();
   
  };
  const handleSlideChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };
  console.log(currentSlide)
  
return (
  <div className='projects-parent-container'>
    <span id="projects" className='link-tag'></span>
    <div className='project-header-div'>
     <div className='project-title-div'>
          <h3 className='project-title'>Projects</h3>
          <p className='project-description'>Heres 3 of my 30 projects. These projects were created during my time in my coding bootcamp and some were personal projects. I believe these projects demonstrate my knowledge of relevent frameworks, languages, and technologies.</p>
    </div>
    </div>
    <div className='projects-carousel'>
      <Slider beforeChange={handleSlideChange} ref={sliderRef} {...setting} dots={true}>{renderSlides()}</Slider>
    </div>
    <div className='carousel-button-container'>
        <p className='current-slide-index'>
          <span className='current-number'>0{currentSlide + 1} </span>
          <span className='limit-number'>/ 0{images.length}</span></p>
       <button 
        className='arrowbuttons' 
        type='button'
        onClick={handlePrevClick} 
        disabled={currentSlide === 0}>
          <span>&#8249;</span>
        </button>
       <button 
        className='arrowbuttons' 
        type='button'
        onClick={handleNextClick} 
        disabled={currentSlide === images.length -1}>
          <span>&#8250;</span>
        </button>
    </div>
  </div>
);
};

export default Projects;
