import { motion } from 'framer-motion'
import React from 'react'
import { Cohorts, Eye } from '../assets'

const Whales = () => {
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
  )
}

export default Whales