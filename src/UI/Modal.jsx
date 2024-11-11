import React from "react";
import { HiOutlineX } from "react-icons/hi";

function Modal({ open, title, onClose, children }) {
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out w-64 ">
          <div className="flex item-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
            <p className="text-scondary-700 font-bold text-base">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-scondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
