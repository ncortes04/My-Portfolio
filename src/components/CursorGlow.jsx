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

  const calculateHue = () => {
    const { innerWidth, innerHeight } = window;
    const { x, y } = cursorPosition;
    const percentX = (x / innerWidth) * 100;
    const percentY = (y / innerHeight) * 100;
    const hue = Math.atan2(percentY, percentX) * (180 / Math.PI) + 180;
    return hue;
  };
  const cursorGlowStyle = {
    left: cursorPosition.x,
    top: cursorPosition.y,
    position: 'fixed',
    background: 'radial-gradient(rgba(29, 78, 216, 0.15), transparent 80%)',
};

  return <div className="cursor-glow" style={cursorGlowStyle}></div>;
};

export default CursorGlow;
