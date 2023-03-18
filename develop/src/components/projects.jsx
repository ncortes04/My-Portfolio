import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/projects.css'
const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
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
    centerPadding: '300px',
    infinite: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          centerPadding: '50px',
          centerMode: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
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
    setCurrentSlide(newIndex + 1);
  };
  console.log(currentSlide)
return (
  <div className='projects-parent-container'>
    <div className='project-header-div'>
        <div className='project-title-div'>
            <h3 className='project-title'></h3>
        </div>
    </div>
    <div className='projects-carousel'>
      <Slider beforeChange={handleSlideChange} ref={sliderRef} {...setting} dots={true}>{renderSlides()}</Slider>
    </div>
    <div className='carousel-button-container'>
        <p>{currentSlide}/{images.length}</p>
       <button 
        className='arrowbuttons' 
        type='button'
        onClick={handlePrevClick} 
        disabled={currentSlide === 1}>
          <span>&#8249;</span>
        </button>
       <button 
        className='arrowbuttons' 
        type='button'
        onClick={handleNextClick} 
        disabled={currentSlide === images.length}>
          <span>&#8250;</span>
        </button>
    </div>
  </div>
);
};

export default Projects;
