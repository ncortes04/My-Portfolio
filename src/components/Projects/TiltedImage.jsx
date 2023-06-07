import React, { useRef } from 'react';

const TiltedImageSlide = ({ card }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  let rafId = null;
  let currentX = 0;
  let currentY = 0;

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const x = e.clientX - containerRect.left - containerRect.width / 2;
    const y = (e.clientY - containerRect.top - containerRect.height / 2) * -1;

    currentX = x;
    currentY = y;

    if (!rafId) {
      rafId = requestAnimationFrame(updateTilt);
    }
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafId);
    rafId = null;
    const image = imageRef.current;
    image.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    image.style.transition = 'transform 0.3s';
  };

  const updateTilt = () => {
    const image = imageRef.current;
    image.style.transform = `perspective(1000px) rotateY(${currentX / 10}deg) rotateX(${currentY / 10}deg)`;
    image.style.transition = 'transform 0.3s';
    rafId = requestAnimationFrame(updateTilt);
  };

  return (
    <div className="tilted-image-slide" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <img
        ref={imageRef}
        className="card-img"
        src={card.img}
        loading="lazy"
      />
    </div>
  );
};

export default TiltedImageSlide;
