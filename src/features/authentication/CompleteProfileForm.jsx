import React, { useState } from "react";
import TextField from "../../UI/TextField";
import RadioInput from "../../UI/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { CompleteProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../UI/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioGroup from "../../UI/RadioGroup";

function CompleteProfileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: CompleteProfile,
  });

  const onSubmit = async () => {
    try {
      const data = await mutateAsync(data);
      toast.success(data.data.data.message);

      if (data.data.data.user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (data.data.data.user.role == "OWNER") return navigate("/owner");
      if (data.data.data.user.role == "FREELANCER")
        return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-6 items-center pt-10 pr-40">
      <h1 className="text-3xl font-bold text-secondary-700">تکمیل اطلاعات</h1>
      <div className="w-full sm:max-w-sm ">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            lable="نام و نام خانوادگی"
            name="name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی را وارد کنید",
            }}
            errors={errors}
          />
          <TextField
            lable="ایمیل"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            register={register}
            validationSchema={{
              required: "ایمیل را وارد کنید",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است"
              }
            }}
            errors={errors}
          />
          <RadioGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                { value: "FREELANCER", label: "فریلنسر" },
              ],
            }}
          />
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
