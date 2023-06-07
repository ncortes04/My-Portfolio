import React, {useRef, useState, useEffect} from 'react';
import Slider from 'react-slick';
import shoppay from'../../assets/macbook-shop-pay.png'
import cannabinode from '../../assets/macbook-cannabinode.png'
import carrental from '../../assets/macbook-carrental.png'
import techys from '../../assets/macbook-techy.png'
import arrow from "../../assets/right-arrow-svgrepo-com.svg";
import TiltedImageSlide from './TiltedImage';



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/projects.css'
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      img: carrental,
      title: 'Rental-Car',
      description: 'A Full Stack web application with user authentication and authorization. This application allows users to rent cars that are available. This website is fully functional with a search feature, likes, recent, popular, leave a comment and review, a functional booked days calendar, checkout, and an admin page. This app displays my ability to comprehensively create a beautiful front and back end that is efficient and easy to manage.',
      technologies: ['React', 'Express', 'MySQL', 'JWT', 'Redux', 'Node.js', 'Bcrypt'],
      type: 'CAR-RENTAL APPLICATION',
      link: 'https://github.com/ncortes04/car-rental',
    },
     {img: shoppay,
    title: 'Shop-Pay',
    description: "Shop-Pay is a full-stack website that offers a convenient platform for purchasing products. This application includes user authentication, authorization, reviews, hot trends, featured products, best sellers, and checkout. The application calculates analytics based on models and routes created on the server. It also showcases my ability to quickly develop applications using Bootstrap.",
    technologies: ['React', 'Express', 'MongoDB', 'JWT', 'REDUX', 'Node.JS','Bcrypt' ],
    brief: 'Online Store For Purchasing Products',
    type: 'E-COMMERCE APPLICATION',
    link: 'https://github.com/ncortes04/shop-pay',
  },
  {img: techys,
    title: 'Techy',
    description: "A full stack Blog application with user authentication and authorization. This project allows users to communicate about tech. Users can comment, view others profiles, create comments, delete comments, view their own profile, create posts, and delete posts.",
    contribution: 'This was a collaborative project in which me and 3 other classmates were assigned. We started with an idea and turned it into an application. I was in charge of the front end and helped with the back end. I created the models for Redux and handled the filtering and display of the product',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', 'Sequelize', 'Node.JS','Bcrypt'],
    brief: 'Online Blog For Tech News',
    type: "BLOG APPLICATION",
    link: 'https://github.com/ncortes04/tech-blog',
  },
  {img: cannabinode,
    title: 'Shop-Pay',
    description: 'Cannabinode is a website that allows the user to view and purchase marijuana products. The home page contains all of the inventory. The user also has the option to click on an individual item to view more information about that particular item. This project uses the MERN stack along with GraphQL and Stripe. This was a collaborative project in which me and 3 other classmates were assigned.',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', 'GraphQl', 'Stripe', 'Node.JS', 'REDUX','Bcrypt'],
    brief: 'Online Store For Selling Cannabis',
    type: "E-commerce",
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
  images.map((card, index) => {
    const isCurrentSlide = currentSlide === index;
    const isPrevSlide = currentSlide === index + 1;
    const isNextSlide = currentSlide === index - 1;

    const slideClass = `project-about-div ${
      isCurrentSlide ? '' : isPrevSlide ? 'animate-prev' : 'animate-next'
    }`;

    return (
      <div key={index}>
        <div className='flex-container'>
          <div className='project-card-upper'>
            <div className={slideClass}>
              <div>
                <h3 className='project-type'>{card.type}</h3>
                <h2 className='project-title light'>{card.title}</h2>
                <p className='project-brief light'>{card.brief}</p>
                <p className='project-brief dark'>
                  <b>Technologies Used</b>
                </p>
                <div className='tech-flex'>
                  {card.technologies.map((tech) => (
                    <span className='tech-card' key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className='project-description'>{card.description}</p>
              </div>
              <div className='project-links'>
                <div className='contact-btn'>
                  <a href={card.link} target='none'>
                    Source Code
                  </a>
                  <img src={arrow} alt='Arrow' className='arrow-icon' />
                </div>
              </div>
            </div>
            <TiltedImageSlide card={card} />
          </div>
        </div>
      </div>
    );
  });
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
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1250);
    };

    handleResize(); // Check initial window size
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(componentRef.current);
  }, []);
return (
  <div className={`projects-parent-container ${isVisible ? 'animate-fade-in' : ''}`} ref={componentRef}>
  <span id="projects" className='link-tag'></span>
  <div className='project-header-div'>
    <div className='project-title-div'>
      <p className='header-intro m-0'>Heres 4 of my 28 projects</p>
      <h3 className='timeline-header'>My Projects.</h3>
    </div>
  </div>
  <div className='projects-carousel'>
    <Slider beforeChange={handleSlideChange} ref={sliderRef} {...setting} dots={true}>
      {renderSlides()}
    </Slider>
  </div>
    {isMobile 
    ?(<>
      <div className='arrow-mid-left'>
        <button
          className='arrowbuttons-mid'
          type='button'
          onClick={handlePrevClick}
          disabled={currentSlide === 0}>
          <span>&#8249;</span>
        </button>
      </div>
      <div className='arrow-mid-right'>
        <button
            className='arrowbuttons-mid'
            type='button'
            onClick={handleNextClick}
            disabled={currentSlide === images.length - 1}>
            <span>&#8250;</span>
        </button>
      </div>
      </>
    ) : (
      <>  
        <div className='carousel-button-container'>
            <p className='current-slide-index'>
              <span className='current-number'>0{currentSlide + 1} </span>
              <span className='limit-number'>/ 0{images.length}</span>
            </p>
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
              disabled={currentSlide === images.length - 1}>
              <span>&#8250;</span>
            </button>
          </div>
      </>
    )
  }
  

</div>
);
};

export default Projects;
