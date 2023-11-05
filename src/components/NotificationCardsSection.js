import { motion } from 'framer-motion'
import React from 'react'

// icons
import { Bell2, Chart, Clock, Triangle } from "../assets";

const NotificationCardsSection = () => {
  return (
    <div className="lg:w-full lg:pl-14 flex justify-start gap-4 overflow-x-auto rounded-l-lg cards-container">
    {/* card-1  */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.0 }}
      className="w-48  bg-white shrink-0 p-4 flex flex-col gap-4 card-1"
    >
      <div className="flex justify-between">
        <img src={Bell2} alt="bell" className="w-7 h-7" />
        <p className="text-[.569rem] font-semibold">Save</p>
      </div>
      <p className="font-medium text-sm">
        We’ll be sending notifications to you here
      </p>
      <div>
        <form action="">
          <div>
            <input
              type="text"
              className="outline-none py-2 px-3 border-[.7px] text-[13px] placeholder:text-[13px] placeholder:font-medium placeholder:text-gray-900 rounded w-full border-neutral-300"
              placeholder="hello@loch.one"
            />
          </div>
        </form>
      </div>
    </motion.div>
    {/* card-2  */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-48 bg-white shrink-0 p-4 flex flex-col  card"
    >
      <div className="flex justify-between">
        <img src={Chart} alt="bell" className="w-7 h-7" />
        <div>
          <input
            type="checkbox"
            name="chart"
            className="outline-none w-[14px] h-[14px] rounded-[4.2px]"
          />
        </div>
      </div>
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
    </motion.div>
    {/* card-3  */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="w-48 lg:mr-4 bg-white shrink-0 rounded-lg p-4 flex flex-col gap-2 card"
    >
      <div className="flex justify-between">
        <img src={Clock} alt="bell" className="w-7 h-7" />
        <div>
          <input
            type="checkbox"
            name="clock"
            className="outline-none w-[14px] h-[14px] rounded-[4.2px]"
          />
        </div>
      </div>
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
    </motion.div>
  </div>
  )
}

export default NotificationCardsSection