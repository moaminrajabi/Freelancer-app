import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  const [title, serTitle] = useState("");
  const { register } = useForm();
  return (
    <form action="">
      <TextField lable="عنوان پروژه" name="title" register={register} />
    </form>
  );
}

export default CreateProjectForm;
