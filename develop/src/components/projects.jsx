import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/projects.css'
const Projects = () => {
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
    centerPadding: '50px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

  }
  const renderSlides = () =>
  images.map((num, index) => (
    <div key={index}>
        <div className='card'>
            <h3>dadddd</h3>
        </div>
    </div>
  ));
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
return (
  <div className='projects-parent-container'>
    <div className='projects-carousel'>
      <Slider ref={sliderRef} {...setting} dots={true}>{renderSlides()}</Slider>
    </div>
    <div className='carousel-button-container'>
       <button onClick={handlePrevClick}>Prev</button>
       <button onClick={handleNextClick}>Next</button>
    </div>
  </div>
);
};

export default Projects;
