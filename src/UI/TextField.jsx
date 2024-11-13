import React from "react";

function TextField({ lable, name, register, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {lable}
      </label>
      <input
        {...register(name)}
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
