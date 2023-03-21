import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import shoppingAvail from'../assets/projects/populated.webp'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/projects.css'
const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {img: shoppingAvail,
    description: 'A full stack E-commerce application with user authentication and authorization. This is a rather simplistic project that focused more on my ability to not only authenticate users but authorize them. This projects uses middleware and conditional statements to ensure the user has access to admin role page. The admin role allows the user to create posts, and categories.',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', ],
    link: 'https://github.com/ncortes04/shopping-avail',
  }, {img: shoppingAvail,
    description: 'A full stack E-commerce application with user authentication and authorization. This is a rather simplistic project that focused more on my ability to not only authenticate users but authorize them. This projects uses middleware and conditional statements to ensure the user has access to admin role page. The admin role allows the user to create posts, and categories.',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', ],
    link: 'https://github.com/ncortes04/shopping-avail',
  }, {img: shoppingAvail,
    description: 'A full stack E-commerce application with user authentication and authorization. This is a rather simplistic project that focused more on my ability to not only authenticate users but authorize them. This projects uses middleware and conditional statements to ensure the user has access to admin role page. The admin role allows the user to create posts, and categories.',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', ],
    link: 'https://github.com/ncortes04/shopping-avail',
  }, {img: shoppingAvail,
    description: 'A full stack E-commerce application with user authentication and authorization. This is a rather simplistic project that focused more on my ability to not only authenticate users but authorize them. This projects uses middleware and conditional statements to ensure the user has access to admin role page. The admin role allows the user to create posts, and categories.',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', ],
    link: 'https://github.com/ncortes04/shopping-avail',
  },

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
        <div className='img-container'>
          <img src={card.img}loading="lazy"></img>
          <a 
          href="https://github.com/ncortes04/shopping-avail"
          target="_blank"
          className='repo-button'>View Code</a>
        </div>
        <div className='text-container'>
          <h3>ABOUT THIS PROJECT</h3>
          <p>{card.description}</p>
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
    <a id="projects" className='link-tag'></a>
    <div className='project-header-div'>
     <div className='project-title-div'>
          <h3 className='project-title'>Projects</h3>
          <p className='project-description'>Heres 5 of my 30 projects. These projects were created during my time in my coding bootcamp and some were personal projects. I believe these projects demonstrate my knowledge of relevent frameworks, languages, and technologies.</p>
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
