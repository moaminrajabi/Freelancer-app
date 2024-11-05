import React from "react";

function RadioInput({ value, onChange, id, name, label, checked }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 "
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor="OWNER"> {label} </label>
    </div>
  );
}

export default RadioInput;
