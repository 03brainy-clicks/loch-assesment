import React from "react";
import "../styles/Home.css";

// components
import SignupForm from "../components/SignupForm";
import Notification from "../components/Notification";
import Whales from "../components/Whales";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="w-screen md:h-screen min-h-screen flex xl:flex-row flex-col bg-black xl:overflow-hidden">
      <main className="order-1 gradient xl:w-[calc(100%-44.44%)] 2xl:flex bg-black 2xl:items-center my-auto w-full sm:py-10 py-9 lg:h-screen min-h-screen overflow-y-scroll overflow-x-hidden ">
        <div className="w-full z-10">
          <Notification />
          <Whales />
          <Testimonials />
        </div>
      </main>
      <SignupForm />
    </div>
  );
};

export default Home;
