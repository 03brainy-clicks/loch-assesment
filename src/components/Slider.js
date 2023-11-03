import React, {
  useRef,
  useState,
  useEffect,
  Children,
  cloneElement,
} from "react";

const InfiniteSlider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = Children.count(children);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the autoplay speed (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, [totalSlides]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 gap-5"
        style={{
          transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
        }}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            className: `flex-shrink-0 flex items-center justify-center ${
              child.props.className || ""
            }`,
          });
        })}
        {cloneElement(children[0], {
          className: `flex-shrink-0  flex items-center justify-center ${
            children[0].props.className || ""
          }`,
        })}
      </div>
    </div>
  );
};

export default InfiniteSlider;
