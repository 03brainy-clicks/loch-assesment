import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

import { Bell, Cohorts, Eye, Square } from "../assets";
import SignupForm from "../components/SignupForm";
import TestimonialsSection from "../components/TestimonialsSection";
import NotificationCardsSection from "../components/NotificationCardsSection";

const Home = () => {
  return (
    <div className="w-screen md:h-screen min-h-screen flex xl:flex-row flex-col bg-black xl:overflow-hidden">
      <main className="order-1 gradient xl:w-[calc(100%-44.44%)] 2xl:flex bg-black 2xl:items-center my-auto w-full sm:py-14 py-9 lg:h-screen min-h-screen overflow-y-scroll overflow-x-hidden ">
        <div className="w-full z-10">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      </main>
      <SignupForm />
    </div>
  );
};

const Section1 = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:gap-15 gap-9 sm:pl-[3.75rem] pl-9 lg:pr-0">
      <div className="text-[#F2F2F2] lg:w-[50%] flex flex-col gap-4 lg:pr-0 sm:pr-[3.75rem] pr-5   ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.0 }}
        >
          <img src={Bell} alt="bell" className="w-8 h-8" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[1.938rem] font-medium text-shadow-notification leading-9"
        >
          Get notified when a highly correlated whale makes a move
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="opacity-70 font-medium"
        >
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </motion.p>
      </div>
      <div className="lg:w-[50%] w-full relative">
        <NotificationCardsSection />
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section className="flex md:flex-row flex-col sm:px-[3.75rem] px-9 md:pt-[4.5rem] pt-9 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="image"
      >
        <img
          src={Cohorts}
          alt="cohorts"
          className="md:w-[21rem] md:h-[19.125rem] rounded-xl"
        />
      </motion.div>
      <div className="text-[#F2F2F2] md:w-[45%] flex flex-col gap-4 text-right ml-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <img src={Eye} alt="eye" className="w-8 h-8 ml-auto" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl font-medium"
        >
          Watch what the whales are doing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="opacity-70 font-medium"
        >
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </motion.p>
      </div>
    </section>
  );
};

const Section3 = () => {
  return (
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
  );
};

const Section4 = () => {
  return (
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
  );
};

export default Home;
