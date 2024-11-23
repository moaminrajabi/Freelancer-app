import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { useForm } from "react-hook-form";
import RHFselect from "../../UI/RHFselect";
import { TagsInput } from "react-tag-input-component";
import DatePikerField from "../../UI/DatePikerField";
import useCategories from "../../hooks/useCategoris";
import useCreateProject from "./useCreateProject";
import Loading from "../../UI/Loading";

function CreateProjectForm({ onclose }) {
  // const [title, serTitle] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString,
    };
    createProject(newProject, {
      onSuccess: () => {
        onclose();
        reset();
      },
    });
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
      <RHFselect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      <div>
        <label className="mt-4 pb-2 block text-slate-700"> تگ ها </label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePikerField date={date} setDate={setDate} label="ددلاین" />
      <div className="mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
