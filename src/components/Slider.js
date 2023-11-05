import React, { useRef } from "react";

function Testimonials({ children }) {
  const containerRef = useRef(null);
  let isDown = false;
  let startX = null;
  let scrollLeft = null;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="w-full flex gap-5 overflow-hidden rounded-l-xl"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={containerRef}
      style={{ overflowX: "auto" }}
    >
      <div style={{ display: "flex" }}>
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
