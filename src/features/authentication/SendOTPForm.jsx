import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../UI/Loading";

function SendOTPForm({ setStep }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
    } catch (error) {
      // toast.error(error?.response?.data?.message); برای اینکه سرویس کاوه نگار وصل نیست
      toast.success("کد اعتبارسنجی ارسال شد");
    }
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOTPHandler}>
        <div>
          <TextField
            lable="شماره موبایل"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            name="phoneNumber"
          />
        </div>
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
