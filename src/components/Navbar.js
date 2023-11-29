import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 max-h-12 w-full flex flex-1 flex-row bg-purple-950/30">
        <div>
          <div className="h-10 flex flex-1 items-center justify-start mx-3">
            <img src="logo512.png" alt="logo" className="h-8" />
          </div>
        </div>
        <ul className="text-sm flex flex-row space-x-2 justify-start items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <button
              onClick={() => {
                toast.info("PathLink built by Jason Ross Levy ©️2023");
              }}
            >
              About
            </button>
          </li>
        </ul>
        <div className="flex flex-1 justify-end items-center text-sm mx-4">
          <button
            onClick={() => toast.warning("Not ready yet! Check back soon.")}
          >
            Login
          </button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          className="text-sm"
        />
      </nav>
    </>
  );
};

export default Navbar;
