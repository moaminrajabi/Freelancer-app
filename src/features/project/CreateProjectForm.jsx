import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  // const [title, serTitle] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form action="" className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        lable="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 6,
            message: "عنوان نامعتبر",
          },
        }}
        errors={errors}
      />

      <TextField
        lable="توضیحات پروژه"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 12,
            message: "عنوان نامعتبر",
          },
        }}
        errors={errors}
      />

      <TextField
        lable="بودجه"
        name="budget"
        register={register}
        required
        validationSchema={{
          required: " تعیین بودجه ضروری است  ",
          minLength: {
            value: 5,
            message: "عنوان نامعتبر",
          },
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
