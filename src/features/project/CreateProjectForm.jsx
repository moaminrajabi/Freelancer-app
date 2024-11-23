import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { useForm } from "react-hook-form";
import RHFselect from "../../UI/RHFselect";
import { TagsInput } from "react-tag-input-component";

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
  const [tags, setTags] = useState([]);

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
      <RHFselect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={[]}
      />
      <div>
        <label className="mt-4 pb-2 block text-slate-700"> تگ ها </label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
