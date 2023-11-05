import React from "react";

// icons
import Bell from "../assets/Bell.svg";
import Bell2 from "../assets/bell2.svg";
import Chart from "../assets/bar-chart-2.svg";
import Eye from "../assets/Eye.svg";
import Clock from "../assets/clock.svg";
import Square from "../assets/square.svg";
import Triangle from "../assets/triangle-down.svg";

// components
import SignupForm from "../components/SignupForm";
import Slider from "../components/Slider";
import { motion } from "framer-motion";

// animation
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <div className="w-screen md:h-screen flex xl:flex-row flex-col  bg-black xl:overflow-hidden ">
        <main
          className=" order-1  gradient xl:w-[calc(100%-44.44%)] 2xl:flex bg-black 2xl:items-center
       w-full sm:py-10 py-7 lg:h-screen min-h-screen  overflow-y-scroll  overflow-x-hidden"
        >
          <div className="w-full">
            {/* section-1 */}
            <section className="flex lg:flex-row flex-col  lg:gap-15  gap-9  sm:pl-[3.75rem] pl-7 lg:pr-0 ">
              <div className="text-[#F2F2F2] lg:w-[46%] flex flex-col gap-4 lg:pr-0 sm:pr-[3.75rem] pr-5">
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
                  className="text-[1.938rem] font-medium text-shadow-notification leading-9 "
                >
                  Get notified when a highly correlated whale makes a move
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="opacity-70 font-medium"
                >
                  Find out when a certain whale moves more than any preset
                  amount on-chain or when a dormant whale you care about becomes
                  active.
                </motion.p>
              </div>
              <div className="lg:w-[54%] w-full">
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
              </div>

            </section>
            {/* section-2  */}
            <section className="flex md:flex-row flex-col sm:px-[3.75rem] px-7 md:pt-[4.5rem] pt-9 gap-8 ">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="image"
              >
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/a837/e66b/317b128c03dcf7840ae72269ac076405?Expires=1699833600&Signature=p18wd3dXPhaNTgmqrqTiEE8C4ccmhSoCqTxJRMOArT8RDqncCTH70MgOPy8xJKwhsrLtZkBBEApVEpy8axSlYqBh4SIrsSulSd0ih-jNr2HHVq36uiqNY6gcRloIacn8tz~CFywwzE3YUoEhd0Tz5Y3Lqr9zaSlkiQRwq9ZQyRRZEAtcTuCgEqha633WwPPBayx5XmLdM2qWFCTO4ODKD8iMrycGf5d1K5wMosqbl5TciWi81NcigySgc9g0ALtIi0pdAN25rezZipc7Kq~m6VFjf-KKt9UWRf9Z8tBo3KAGUkqeB6XX2bpm8~yiv~uehnmzbGlAnxyPnLYsvdS9Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
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
                  className="text-3xl font-medium "
                >
                  Watch what the whales are doing{" "}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="opacity-70 font-medium"
                >
                  All whales are not equal. Know exactly what the whales
                  impacting YOUR portfolio are doing.
                </motion.p>
              </div>
            </section>
            {/* section-3 */}
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-[1.375rem] sm:px-[3.75rem] px-7"
            >
              <p className="text-[#f2f2f2] text-right text-2xl font-medium">
                Testimonials
              </p>
              <div className="h-[1px] bg-gray-50 mt-5 opacity-50"></div>
            </motion.section>
            {/* section-4  */}
            <section className="mt-10 sm:pl-[3.75rem] pl-7 flex md:flex-row flex-col gap-10 md:items-end">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="shrink-0"
              >
                <img src={Square} alt="" />
              </motion.div>
              {/* testimonials  */}
              <Slider>
                {/* Testimonial-1  */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
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
                    “Love how Loch integrates portfolio analytics and whale
                    watching into one unified app.”
                  </p>
                </motion.div>
                {/* testimonial-2  */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
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
                    “I use Loch everyday now. I don't think I could analyze
                    crypto whale trends markets without it. I'm addicted!”
                  </p>
                </motion.div>
                {/* testimonial-3  */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
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
                    “Managing my own portfolio is helpful and well designed.
                    What’s really interesting is watching the whales though. No
                    one else has made whale tracking so simple.”
                  </p>
                </motion.div>
              </Slider>
            </section>
          </div>
        </main>
        <SignupForm />
      </div>
    </AnimatePresence>
  );
};

export default Home;
