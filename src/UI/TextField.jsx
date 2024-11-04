import React from "react";

function TextField({ lable, value, onChange, name }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {lable}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
