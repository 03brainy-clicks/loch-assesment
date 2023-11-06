import React from "react";
import { motion } from "framer-motion";
import { Square } from "../assets";
import { Link } from "react-router-dom";

const Landing = () => {
  const containerVariants = {
    initial: { opacity: 0, width: "10%", height: "10%" },
    animate: { opacity: 1, width: "100%", height: "100%", borderRadius: "0px" },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <motion.div
        initial={containerVariants.initial}
        animate={containerVariants.animate}
        transition={{ duration: 1, delay: 0.0 }}
        className="h-20 w-20 rounded-full bg-black flex items-center justify-center p-9"
      >
        <div className="flex flex-col items-center gap-5">
          <motion.div
            initial={contentVariants.initial}
            whileInView={contentVariants.whileInView}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={Square} alt="Square Logo" />
          </motion.div>
          <motion.h2
            initial={contentVariants.initial}
            whileInView={contentVariants.whileInView}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-3xl text-white font-medium"
          >
            Loch Assessment
          </motion.h2>
          <motion.div
            initial={contentVariants.initial}
            whileInView={contentVariants.whileInView}
            transition={{ duration: 1, delay: 1.4 }}
            className="div w-full flex md:flex-row gap-3 flex-col"
          >
            <Link to={"/home"} className="w-full">
              <button className="py-2 w-full bg-white text-black cursor-pointer rounded font-medium text-sm hover:bg-gray-100 transition-all duration-300">
                Demo
              </button>
            </Link>
            <a
              href="https://github.com/03brainy-clicks/loch-assesment/"
              target="_black"
              className="w-full"
            >
              <button className="py-2 w-full bg-white text-black cursor-pointer rounded font-medium text-sm hover:bg-gray-100 transition-all duration-300">
                Repo
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
