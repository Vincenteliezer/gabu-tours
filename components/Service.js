import React from "react";
import Image from "next/image";
import airPort from "../public/images/airPort.jpeg";
import gabu1 from "../public/images/gabu1.jpg";
import gabu8 from "../public/images/gabu8.jpg";
import gabu7 from "../public/images/gabu7.jpg";
import deliveryMan from "../public/images/deliveryMan.jpg";
import gabu2 from "../public/images/gabu2.jpg";


function Service() {
  return (
    <div>
      <div className="mt-10 h-screen max-w-7xl mx-auto px-2 py-4">
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
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10 bg-yellow-500 bg-opacity-40 px-3 py-2 rounded-full">
              Airport Transfers
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={gabu1}
              width={300}
              layout="fixed"
              objectFit="cover"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10 bg-yellow-500 bg-opacity-40 px-3 py-2 rounded-full">
              Hotel Transfers
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={gabu8}
              width={300}
              layout="fixed"
              objectFit="cover"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10 bg-yellow-500 bg-opacity-40 px-3 py-2 rounded-full">
              Cab Services
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={gabu2}
              width={300}
              layout="fixed"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10 bg-yellow-500 bg-opacity-40 px-3 py-2 rounded-full">
              Corporate Tours
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={gabu7}
              width={300}
              layout="fixed"
              objectFit="cover"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10 bg-yellow-500 bg-opacity-40 px-3 py-2 rounded-full">
              Car Hire
            </h1>
          </div>
          <div className="relative">
            <Image
              alt=""
              src={deliveryMan}
              width={300}
              layout="fixed"
              objectFit="cover"
              height={300}
              className="rounded-xl brightness-50"
            />
            <h1 className="absolute bottom-5 text-white text-xl font-bold left-10 bg-yellow-500 bg-opacity-40 px-3 py-2 rounded-full">
              Delivery Services
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
