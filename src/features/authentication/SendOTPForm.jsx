import React, { useState } from "react";
import TextField from "../../UI/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <div>
          <TextField
            lable="شماره موبایل"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.tatget.value)}
            name="phoneNumber"
          />
        </div>
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
