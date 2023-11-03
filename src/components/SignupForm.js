import React, { useState } from "react";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(() => false);
    if (isValidEmail(email)) {
      console.log("Form submitted with email: ", email);
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setError((prev) => !prev);
    }
  };

  return (
    <main className="xl:w-[44.44%] md:min-h-screen p-7 md:p-0 w-full bg-white flex items-center justify-center">
      <div className="w-full">
        <div className="w-[21.25rem] mx-auto">
          <h1 className="text-[#B0B1B3] text-[2.5rem] font-medium leading-tight">
            Sign up for exclusive access.
          </h1>
          <div className="mt-8">
            <form className="space-y-6">
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="py-5 outline-none px-6 input-shadow font-medium w-full rounded-lg border border-gray-100 text-gray-900 placeholder:text-[#CACBCC]"
                  placeholder="Your email address"
                />
                {error && (
                  <p className="text-red-500 text-xs font-medium leading-4 mt-2">
                    Please enter a valid email.
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="py-[1.125rem] px-7 w-full rounded-lg bg-gray-900 text-white text-center font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  Get Started
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6">
          <div className="py-[1.125rem]  w-full rounded-lg text-center text-[#19191A] font-semibold ">
            You’ll receive an email with an invite link to join.
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupForm;
