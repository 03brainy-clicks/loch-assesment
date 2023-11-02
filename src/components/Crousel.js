import React, { useState, useEffect, useRef } from 'react';

const InfiniteCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const itemWidth = 300; // Adjust the width of each item as needed
  const gap = 20; // Gap between items

  useEffect(() => {
    const container = containerRef.current;

    const handleResize = () => {
      container.style.width = `${(children.length + 2) * (itemWidth + gap)}px`;
      container.style.transform = `translateX(-${(currentIndex + 1) * (itemWidth + gap)}px)`;
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex, children]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const startX = e.clientX;
    const handleDragMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - startX;
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(-${(currentIndex + 1) * (itemWidth + gap) + deltaX}px)`;
      }
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      containerRef.current.style.transition = 'transform 0.3s ease-in-out';
      const deltaX = e.clientX - startX;
      if (deltaX < -50) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
      } else if (deltaX > 50) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
      }
      containerRef.current.style.transform = `translateX(-${(currentIndex + 1) * (itemWidth + gap)}px)`;
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
    };

    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform ease-in-out duration-300"
        style={{ width: `${(children.length + 2) * (itemWidth + gap)}px` }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${itemWidth}px`,
              marginRight: `${gap}px`,
            }}
            onMouseDown={handleDragStart}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
