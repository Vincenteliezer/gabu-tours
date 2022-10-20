import React from "react";

function NavBar() {
  return (
    <>
      <div className="bg-white shadow-2xl border-2 border-green-600 w-fit mx-auto  rounded-full fixed  top-10 right-10 z-50">
        <div className=" py-3 space-x-5 px-6 flex items-center ">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Service</div>
            <div className="cursor-pointer">Contact</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
