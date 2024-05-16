import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className="text-sm font-semibold text-gray-800 hover:text-orange-500"
                >
                  FeedBack Form
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/data"
                  className="text-sm font-semibold text-gray-800 hover:text-orange-500"
                >
                  View Details
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
