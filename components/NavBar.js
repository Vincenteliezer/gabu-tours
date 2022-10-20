import React from "react";

function NavBar() {
  return (
    <>
      <div className="bg-white shadow-lg w-fit mx-auto  border rounded-full sticky top-2 z-50">
        <div className=" py-3 space-x-3 px-6 flex ">
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
