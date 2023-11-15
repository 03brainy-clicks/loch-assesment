import { motion } from 'framer-motion';
import React from 'react'
import { Bell } from '../assets';
import NotificationCardsSection from './sub-components/NotificationCardsSection';

const Notification = () => {
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

export default Notification