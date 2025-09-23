"use client";

import { useState, useEffect } from 'react';

const GlowingCursor = () => {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPoints(prevPoints => [...prevPoints, { x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animationFrame = requestAnimationFrame(function animate() {
      setPoints(prevPoints => {
        if (prevPoints.length > 1) {
          return prevPoints.slice(1);
        }
        return prevPoints;
      });
      requestAnimationFrame(animate);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  // Don't render on server
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {points.map((point, index) => (
        <div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-primary"
          style={{
            left: `${point.x - 4}px`,
            top: `${point.y - 4}px`,
            opacity: (index / points.length),
            transform: `scale(${index / points.length})`,
            boxShadow: '0 0 8px hsl(var(--primary))'
          }}
        />
      ))}
    </div>
  );
};

export default GlowingCursor;
