import React from "react";
import Image from "next/image";
import bgServices from "../public/images/bgServices.jpg";

function About() {
  return (
    <>
      <div className="mt-5 h-screen max-w-7xl mx-auto p-2 overflow-y-scroll scrollbar-hide">
        <h1 className="text- text-6xl font-bold flex justify-center">About</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-2 place-items-center relative">
          <div>
            <Image src={bgServices} className="rounded-xl" />
          </div>
          <div className="md:absolute md:left-1/4">
            <p className="shadow-lg  h-full mt-10 text-xl text-justify bg-white p-6 rounded-2xl hover:bg-opacity-70 cursor-pointer  mb-5">
              Established in 2006, Gabuh Travel and Tours, is a full service
              travel, tour operator and destination management company which
              offers a wide array of services to cater the needs of travel
              connoisseurs. We put forward unique solutions, paying careful
              attention to each client’s individual needs – to deliver
              successful and memorable destination management service that is
              reliable, safe, affordable and enjoyable for all clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
