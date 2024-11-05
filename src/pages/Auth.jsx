import React from "react";
import AuthContainer from "../features/authentication/Authcontainer";

function Auth() {
  return (
    <div className="contianer xl:max-w-screen-xl ">
      <div className="flex justify-center pt-10 pr-36">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
