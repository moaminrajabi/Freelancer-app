import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

function AuthContainer() {
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
    } catch (error) {
      // toast.error(error?.response?.data?.message);
      toast.success("کد اعتبارسنجی ارسال شد"); // برای اینکه سرویس پیامکی وصل نیست
    }
  };

  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09033809214");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSubmit={sendOTPHandler}
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
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
