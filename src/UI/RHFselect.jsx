import React from "react";

function RHFselect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mt-4 pb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select id={name} {...register(name)} className="textField__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFselect;
