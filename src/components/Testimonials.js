import { motion } from "framer-motion";
import React from "react";
import { Square } from "../assets";
import TestimonialsSection from "./sub-components/TestimonialsSection";

const Testimonials = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-[1.375rem] sm:px-[3.75rem] px-9"
      >
        <p className="text-[#f2f2f2] text-right text-2xl font-medium">
          Testimonials
        </p>
        <div className="h-[1px] bg-gray-50 mt-5 opacity-50"></div>
      </motion.section>
      <section className="mt-10 sm:pl-[3.75rem] pl-9 flex md:flex-row flex-col gap-10 md:items-end">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="shrink-0"
        >
          <img src={Square} alt="" />
        </motion.div>
        <TestimonialsSection />
      </section>
    </>
  );
};

export default Testimonials;
