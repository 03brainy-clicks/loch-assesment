import React, { useState } from "react";

const Marquee = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-gray-200 w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`marquee ${hovered ? "paused" : ""}`}>
        {/* Map through the children to create the marquee */}
        {React.Children.map(children, (child) => (
          <div className="inline-block">{child}</div>
        ))}
        {/* Repeat the children or adjust as needed */}
      </div>
    </div>
  );
};

export default Marquee;
