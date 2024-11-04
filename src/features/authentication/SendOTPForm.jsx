import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      console.log(data);
    } catch (error) {}
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOTPHandler}>
        <div>
          <TextField
            lable="شماره موبایل"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.tatget.value)}
            name="phoneNumber"
          />
        </div>
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
