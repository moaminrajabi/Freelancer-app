import React, { useState } from "react";
import TextField from "../../UI/TextField";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../UI/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <div>
          <TextField
            lable="شماره موبایل"
            value={phoneNumber}
            onChange={onChange}
            name="phoneNumber"
          />
        </div>
        <div>
          {isSendingOtp ? (
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
