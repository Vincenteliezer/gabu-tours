import React from "react";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavBar from "./NavBar";

function Drawer() {
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            
              <Bars3Icon className=" h-12 w-12 drawer-button cursor-pointer" />
            
          </label>

          <main>
            <div>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </div>
          </main>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      ;
    </>
  );
}

export default Drawer;
