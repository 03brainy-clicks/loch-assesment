import { motion } from 'framer-motion'
import React from 'react'
import { Bell2, Chart, Clock, Triangle } from "../assets";

const NotificationCard = ({ image, title, content, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay }}
      className="w-48 bg-white shrink-0 p-4 flex flex-col gap-4 card"
    >
      <div className="flex justify-between">
        <img src={image} alt="bell" className="w-7 h-7" />
        <p className="text-[.569rem] font-semibold">{title}</p>
      </div>
      <p className="font-medium text-sm">
        {content}
      </p>
      {/* Additional elements go here */}
    </motion.div>
  );
};

const NotificationCardsSection = () => {
  return (
    <div className="lg:w-full lg:pl-14 flex justify-start gap-4 overflow-x-auto rounded-l-lg cards-container">
      <NotificationCard
        image={Bell2}
        title="Save"
        content="We’ll be sending notifications to you here"
        delay={0}
      />
      <NotificationCard
        image={Chart}
        title="Notify me when any wallets move more than"
        content={
          <div className="flex flex-col gap-[14.6px] mt-auto">
            <p className="font-medium text-[.7rem]">
              Notify me when any wallets move more than
            </p>
            <div className="flex">
              <span className="p-1 text-[.569rem] flex items-center font-medium rounded-[2.8px] text-gray-800 bg-[#e5e5e680]">
                <span>$1,000.00</span>
                <img
                  src={Triangle}
                  alt="dropdown"
                  className="w-[11.2px] h-[11.2px]"
                />
              </span>
            </div>
          </div>
        }
        delay={0.2}
      />
      <NotificationCard
        image={Clock}
        title="Notify me when any wallet dormant for"
        content={
          <div className="flex gap-[9px] flex-col mt-auto">
            <p className="font-medium text-[.7rem] mt-auto">
              Notify me when any wallet dormant for{" "}
            </p>
            <div className="flex">
              <span className="p-1 text-[.569rem] flex items-center font-medium rounded-[2.8px] text-gray-800 bg-[#e5e5e680]">
                <span> &gt; 30 days</span>
                <img
                  src={Triangle}
                  alt="dropdown"
                  className="w-[11.2px] h-[11.2px]"
                />
              </span>
            </div>
            <p className="font-medium text-[.7rem] mt-auto">
              becomes active{" "}
            </p>
          </div>
        }
        delay={0.4}
      />
    </div>
  )
}

export default NotificationCardsSection;
