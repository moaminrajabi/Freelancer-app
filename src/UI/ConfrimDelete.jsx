import React from "react";

function ConfrimDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2> آیا از حذف {resourceName} مطمین هستید </h2>

      <div className="flex justify-between items-center gap-x-16">
        <button
          disabled={disabled}
          onClick={onClose}
          className="btn btn--primary flex-1"
        >
          لغو
        </button>
        <button
          disabled={disabled}
          onClick={onConfirm}
          className="btn btn--danger flex-1 py-3"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfrimDelete;
