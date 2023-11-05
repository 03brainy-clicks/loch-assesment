import React, { useRef, useState } from "react";

function Testimonials({ children }) {
  const containerRef = useRef(null);
  const [state, setState] = useState({
    isDown: false,
    startX: null,
    scrollLeft: null,
  });

  const { isDown, startX, scrollLeft } = state;

  const handleMouseDown = (e) => {
    setState({
      ...state,
      isDown: true,
      startX: e.pageX - containerRef.current.offsetLeft,
      scrollLeft: containerRef.current.scrollLeft,
    });
  };

  const handleMouseLeave = () => {
    setState({ ...state, isDown: false });
  };

  const handleMouseUp = () => {
    setState({ ...state, isDown: false });
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the multiplier to control scroll speed
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
