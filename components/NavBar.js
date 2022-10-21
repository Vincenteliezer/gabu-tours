import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function NavBar() {
  return (
    <>
      <div className="mx-auto fixed  top-5 right-5 md:right-14  z-50">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-white bg-opacity-25 p-2">
              <Bars3Icon className="text-white" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                About 
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
