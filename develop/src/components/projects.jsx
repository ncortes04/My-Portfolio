import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/projects.css'
const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://via.placeholder.com/500x300',
    'https://via.placeholder.com/500x300',
    'https://via.placeholder.com/500x300',
    'https://via.placeholder.com/500x300',
    'https://via.placeholder.com/500x300',
  ];

  const setting = {
    centerMode: true,
    arrows: false,
    centerPadding: '250px',
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerPadding: '150',
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
        }
      }
    ]

  }
  const renderSlides = () =>
  images.map((num, index) => (
    <div key={index}>
            <h3>dadddd</h3>
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
    <div className='project-header-div'>
            <div className='project-title-div'>
              <h3 className='project-title'>
              Featured Projects
              </h3>
            </div>
     
            <div className='header-subtitle-div'>
                <p className='header-subtitle'>Heres 5 of my 30 projects. These projects were created during my time in my coding bootcamp and some were personal projects. I believe these projects demonstrate my knowledge of relevent frameworks, languages, and technologies.</p>
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
