import { motion } from "framer-motion";
import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

  const isValidEmail = (email) => emailRegex.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (isValidEmail(email)) {
      console.log("Form submitted with email: ", email);
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setError(true);
    }
  };

  const inputMotion = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  return (
    <main className="xl:w-[44.44%] min-h-screen order-0 xl:order-1 p-9 sm:py-16 md:p-0 w-full bg-white flex items-center justify-center">
      <div className="w-full sm:w-[23.25rem] mx-auto">
        <motion.h1
          {...inputMotion}
          className="text-[#B0B1B3] text-[2.5rem] font-medium leading-tight"
        >
          Sign up for exclusive access.
        </motion.h1>
        <div className="mt-8">
          <form className="space-y-6">
            <motion.div {...inputMotion}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="py-5 px-6 outline-gray-300 input-shadow hover:border-gray-300 transition-all duration-300 font-medium w-full rounded-lg border border-gray-100 text-gray-900 placeholder:text-[#CACBCC] "
                placeholder="Your email address"
              />
              {error && (
                <p className="text-red-500 text-xs font-medium leading-4 mt-2">
                  Please enter a valid email.
                </p>
              )}
            </motion.div>
            <motion.div {...inputMotion}>
              <button
                type="submit"
                onClick={handleSubmit}
                className="py-[1.125rem] px-7 w-full rounded-lg bg-gray-900 text-white text-center font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Get Started
              </button>
            </motion.div>
          </form>
        </div>
        <div className="mt-6">
          <motion.div
            {...inputMotion}
            className="py-[1.125rem] w-full rounded-lg text-center text-[#19191A] font-semibold"
          >
            You’ll receive an email with an invite link to join.
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default SignupForm;
