import React from "react";
import Image from "next/image";
import airPort from "../public/images/airPort.jpeg";

function Service() {
  return (
    <div>
      <div className="mt-10 h-screen max-w-7xl mx-auto px-2">
        <h1 className="text-white text-4xl font-bold flex justify-center bg-white w-fit rounded-full bg-opacity-30 px-6 py-2">
          Our Services
        </h1>
        <div className="flex overflow-x-auto mt-6 space-x-4 mb-12 rounded-xl scrollbar-hide">
          <div className="relative ">
            <Image
              alt=""
              src={airPort}
              width={300}
              layout="fixed"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10">
              Airport Transfers
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={airPort}
              width={300}
              layout="fixed"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10">
              Hotel Transfers
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={airPort}
              width={300}
              layout="fixed"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10">
              Cab Services
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={airPort}
              width={300}
              layout="fixed"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10">
              Corporate Tours
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={airPort}
              width={300}
              layout="fixed"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10">
              Car Hire
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={airPort}
              width={300}
              layout="fixed"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10">
              Delivery Services
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
