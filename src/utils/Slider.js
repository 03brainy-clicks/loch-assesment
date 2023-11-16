import React, { useRef } from "react";

function Slider({ children }) {
  // Reference to the main container div
  const containerRef = useRef(null);

  // Variables to track mouse events
  let isDown = false;
  let startX = null;
  let scrollLeft = null;

  // Mouse down event handler
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Mouse up event handler
  const handleMouseUp = () => {
    isDown = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Mouse move event handler
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

export default Slider;
