import React from "react";
import { HiOutlineX } from "react-icons/hi";

function Modal({ open, title, onClose, children }) {
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out w-64 ">
          <div className="flex">
            <p className=""> modal title </p>
            <button>
              <HiOutlineX className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
