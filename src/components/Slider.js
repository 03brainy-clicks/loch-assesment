import React, { useRef, useEffect, useState } from "react";

function Testimonials({ children }) {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const stepSize = containerWidth / (children.length * 2); // Multiply the length by 2

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        // Only scroll if not hovered
        const nextScrollPosition = scrollPosition + stepSize;
        if (containerRef.current) {
          containerRef.current.scrollTo({
            left: nextScrollPosition >= containerWidth ? 0 : nextScrollPosition,
            behavior: "smooth",
          });
          setScrollPosition(
            nextScrollPosition >= containerWidth ? 0 : nextScrollPosition
          );
        }
      }
    }, 2000); // Auto-scroll interval: 2 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [scrollPosition, containerWidth, isHovered, children.length, stepSize]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full flex gap-5 overflow-hidden rounded-l-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex gap-5"
        style={{ overflowX: "scroll" }}
        ref={containerRef}
      >
        <div style={{ display: "flex" }}>
          {children}
          {children} {/* Duplicate the children to create the seamless loop */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
