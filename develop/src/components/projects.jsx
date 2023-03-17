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
    centerPadding: '50px',
    width: '200px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
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
  images.map(num => (
    <div>
        <div className='card'>
            <h3 c>dadddd</h3>
        </div>
    </div>
  ));

return (
  <div >
    <Slider {...setting} dots={true}>{renderSlides()}</Slider>
  </div>
);
};

export default Projects;
