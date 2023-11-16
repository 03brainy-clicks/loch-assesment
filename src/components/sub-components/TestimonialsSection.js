import { motion } from "framer-motion";
import React from "react";
import Slider from "../../utils/Slider";

const TestimonialsSection = () => {
  const cardVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <Slider>
      <motion.div
        {...cardVariants}
        transition={{ duration: 1, delay: 1.6 }}
        className="p-5 mr-5 w-[22rem] shrink-0 flex flex-col gap-5 bg-white rounded-xl testimonials"
      >
        <h4 className="flex items-center font-semibold gap-2">
          Jack F{" "}
          <span className="text-gray-400 font-medium text-[.813rem]">
            Ex Blackrock PM
          </span>
        </h4>
        <p className="text-[#1D2129] font-medium">
          “Love how Loch integrates portfolio analytics and whale watching into
          one unified app.”
        </p>
      </motion.div>
      <motion.div
        {...cardVariants}
        transition={{ duration: 1, delay: 1.8 }}
        className="p-5  mr-5 w-[22rem] shrink-0 flex flex-col gap-5 bg-white rounded-xl testimonials"
      >
        <h4 className="flex items-center font-semibold gap-2">
          Yash P{" "}
          <span className="text-gray-400 font-medium text-[.813rem]">
            Research, 3poch Crypto Hedge Fund{" "}
          </span>
        </h4>
        <p className="text-[#1D2129] font-medium">
          “I use Loch everyday now. I don't think I could analyze crypto whale
          trends markets without it. I'm addicted!”
        </p>
      </motion.div>
      <motion.div
        {...cardVariants}
        transition={{ duration: 1, delay: 2 }}
        className="p-5 w-[33.125rem] shrink-0 flex flex-col gap-5 mr-5 bg-white rounded-xl testimonials"
      >
        <h4 className="flex items-center font-semibold gap-2">
          Shiv S
          <span className="text-gray-400 font-medium text-[.813rem]">
            Co-Founder Magik Labs
          </span>
        </h4>
        <p className="text-[#1D2129] font-medium">
          “Managing my own portfolio is helpful and well designed. What’s really
          interesting is watching the whales though. No one else has made whale
          tracking so simple.”
        </p>
      </motion.div>
    </Slider>
  );
};

export default TestimonialsSection;
