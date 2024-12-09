import React from "react";

function TextField({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
  defaultValue,
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error mt-10">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        defaultValue={defaultValue}
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
