import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const RESEN_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [time, setTime] = useState(RESEN_TIME);

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber, otp });
      toast.success(data.data.data.message);
      if (data.data.data.user.isActive) {
        <p>wlcome back</p>;
      } else {
        navigate("/complete-profile");
      }
      console.log(data.data.data.user.isActive);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <form onSubmit={checkOTPHandler} className="space-y-10">
        <button onClick={onBack}>
          <HiArrowRight className="w-6 h-6 text-secondary-500" />
        </button>
        {otpResponse && (
          <p>
            {otpResponse?.message}
            <button onClick={onBack}>
              <CiEdit /> adsad
            </button>
          </p>
        )}
        <div className="mb-4 text-secondary-500">
          {time > 0 ? (
            <p> {time} ثانیه تا ارسال مجدد کد </p>
          ) : (
            <button onClick={onReSendOtp}>ارسال مجدد کد تایید</button>
          )}
        </div>
        <p className="font-bold text-secondary-800"> کد تایید را وارد کنید </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center "
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full"> تایید </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
