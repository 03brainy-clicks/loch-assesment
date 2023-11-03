import "./App.css";

import Bell from "./assets/Bell.svg";
import Bell2 from "./assets/bell2.svg";
import Chart from "./assets/bar-chart-2.svg";
import Eye from "./assets/Eye.svg";
import Clock from "./assets/clock.svg";
import Square from "./assets/square.svg";
import Triangle from "./assets/triangle-down.svg";
import SignupForm from "./components/SignupForm";

const App = () => {
  return (
    <div className="w-screen h-screen flex bg-black overflow-hidden ">
      <main className="gradient w-[calc(100%-44.44%)] py-10 h-screen overflow-y-scroll ">
        <div className="w-full">
          {/* section-1 */}
          <section className="flex gap-9  pl-[3.75rem] pr-0">
            <div className="text-[#F2F2F2] w-[45%] flex flex-col gap-4">
              <div>
                <img src={Bell} alt="bell" className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-medium text-shadow ">
                Get notified when a highly correlated whale makes a move
              </h2>
              <p className="opacity-70 font-medium">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="w-[55%]">
              <div className="w-full ml-14 pr-1 flex gap-4 overflow-x-auto rounded-l-lg shadow-inner card-container">
                {/* card-1  */}
                <div className="w-48 h-42 bg-white shrink-0 p-4 flex flex-col gap-4 card-1">
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
                </div>
                {/* card-2  */}
                <div className="w-48 h-42 bg-white shrink-0 p-4 flex flex-col  card">
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
                </div>
                {/* card-3  */}
                <div className="w-48 h-42 bg-white shrink-0 rounded-lg p-4 flex flex-col gap-2 card">
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
                </div>
              </div>
            </div>
          </section>
          {/* section-2  */}
          <section className="flex px-[3.75rem] pt-[4.5rem] gap-8 ">
            <div className="image">
              <img
                src={
                  "https://s3-alpha-sig.figma.com/img/a837/e66b/317b128c03dcf7840ae72269ac076405?Expires=1699833600&Signature=p18wd3dXPhaNTgmqrqTiEE8C4ccmhSoCqTxJRMOArT8RDqncCTH70MgOPy8xJKwhsrLtZkBBEApVEpy8axSlYqBh4SIrsSulSd0ih-jNr2HHVq36uiqNY6gcRloIacn8tz~CFywwzE3YUoEhd0Tz5Y3Lqr9zaSlkiQRwq9ZQyRRZEAtcTuCgEqha633WwPPBayx5XmLdM2qWFCTO4ODKD8iMrycGf5d1K5wMosqbl5TciWi81NcigySgc9g0ALtIi0pdAN25rezZipc7Kq~m6VFjf-KKt9UWRf9Z8tBo3KAGUkqeB6XX2bpm8~yiv~uehnmzbGlAnxyPnLYsvdS9Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
                alt="cohorts"
                className="w-[21rem] h-[19.125rem] rounded-xl"
              />
            </div>
            <div className="text-[#F2F2F2] w-[45%] flex flex-col gap-4 text-right ml-auto">
              <div>
                <img src={Eye} alt="eye" className="w-8 h-8 ml-auto" />
              </div>
              <h2 className="text-3xl font-medium ">
                Watch what the whales are doing{" "}
              </h2>
              <p className="opacity-70 font-medium">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </section>
          {/* section-3 */}
          <section className="mt-[1.375rem] px-[3.75rem]">
            <p className="text-[#f2f2f2] text-right text-2xl font-medium">
              Testimonials
            </p>
            <div className="h-[1px] bg-gray-50 mt-5 opacity-50"></div>
          </section>
          {/* section-4  */}
          <section className="mt-10 pl-[3.75rem] flex gap-10 items-end">
            <div className="shrink-0">
              <img src={Square} alt="" />
            </div>
            {/* testimonials  */}
            <div className="w-full flex gap-5 overflow-hidden overflow-x-scroll rounded-l-xl ">
              {/* Testimonial-1  */}
              <div className="p-5 w-[22rem] shrink-0 flex flex-col gap-5 bg-white rounded-xl testimonials">
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
              </div>
              {/* testimonial-2  */}
              <div className="p-5 w-[22rem] shrink-0 flex flex-col gap-5 bg-white rounded-xl testimonials">
                <h4 className="flex items-center font-semibold gap-2">
                  Yash P{" "}
                  <span className="text-gray-400 font-medium text-[.813rem]">
                    Research, 3poch Crypto Hedge Fund{" "}
                  </span>
                </h4>
                <p className="text-[#1D2129] font-medium">
                  “I use Loch everyday now. I don't think I could analyze crypto
                  whale trends markets without it. I'm addicted!”
                </p>
              </div>
              {/* testimonial-3  */}
              <div className="p-5 w-[33.125rem] shrink-0 flex flex-col gap-5 mr-5 bg-white rounded-xl testimonials">
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
              </div>
            </div>
          </section>
        </div>
      </main>
      <SignupForm />
    </div>
  );
};

export default App;
