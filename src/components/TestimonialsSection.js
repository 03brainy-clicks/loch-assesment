import { motion } from "framer-motion";
import React from "react";
import Slider from "./Slider";

const testimonialsData = [
  {
    name: "Jack F",
    title: "Ex Blackrock PM",
    quote:
      "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
    delay: 1.6,
    width: "22rem",
  },
  {
    name: "Yash P",
    title: "Research, 3poch Crypto Hedge Fund",
    quote:
      "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
    delay: 1.8,
    width: "22rem",
  },
  {
    name: "Shiv S",
    title: "Co-Founder Magik Labs",
    quote:
      "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
    delay: 2,
    width: "33.125rem",
  },
];

const TestimonialsSection = () => {
  return (
    <Slider>
      {testimonialsData.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: testimonial.delay }}
          className={`p-5 mr-5 w-[${testimonial.width}] shrink-0 flex flex-col gap-5 bg-white rounded-xl testimonials`}
        >
          <h4 className="flex items-center font-semibold gap-2">
            {testimonial.name}{" "}
            <span className="text-gray-400 font-medium text-[.813rem]">
              {testimonial.title}
            </span>
          </h4>
          <p className="text-[#1D2129] font-medium">{testimonial.quote}</p>
        </motion.div>
      ))}
    </Slider>
  );
};

export default TestimonialsSection;
