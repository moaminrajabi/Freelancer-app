import React, { useState } from "react";
import TextField from "../../UI/TextField";
import RadioInput from "../../UI/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { CompleteProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../UI/Loading";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: CompleteProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ name, email, role });
      console.log(data);

      toast.success(data.data.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10 pr-36">
      <div className="w-full sm:max-w-sm ">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            lable="نام و نام خانوادگی"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            lable="ایمیل"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-11">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              id="OWNER"
              name="role"
              checked={role == "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              id="FREELANCER"
              name="role"
              checked={role == "FREELANCER"}
            />
          </div>
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
