import React, { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const cursorGlowStyle = {
    left: cursorPosition.x,
    top: cursorPosition.y,
    position: 'fixed',
    background: 'radial-gradient(rgba(29, 78, 216, 0.15), transparent 80%)',
  };

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return null; // Render nothing on mobile devices
  }

  return <div className="cursor-glow" style={cursorGlowStyle}></div>;
};

export default CursorGlow;
