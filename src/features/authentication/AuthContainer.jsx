import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (data) => {
    try {
      const data = await mutateAsync(data);
      setStep(2);
    } catch (error) {
      // toast.error(error?.response?.data?.message);
      toast.success("کد اعتبارسنجی ارسال شد"); // برای اینکه سرویس پیامکی وصل نیست
    }
  };

  const [step, setStep] = useState(2);
  // const [phoneNumber, setPhoneNumber] = useState("09032763011");
  const { register, handleSubmit, getValues } = useForm();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSubmit={handleSubmit(sendOTPHandler)}
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            register={register}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep(1)}
            onReSendOtp={sendOTPHandler}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
