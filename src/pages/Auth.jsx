import React from "react";
import SendOTPForm from "../features/authentication/SendOTPForm";
import CheckOTPForm from "../features/authentication/CheckOTPForm";

function Auth() {
  return (
    <div className="flex justify-center pt-10 pr-36">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm />
        <CheckOTPForm />
      </div>
    </div>
  );
}

export default Auth;
