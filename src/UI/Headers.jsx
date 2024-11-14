import React from "react";
import useUser from "../features/authentication/useUser";

function Headers() {
  const { data } = useUser();

  return <div className="bg-secondary-0 py-4 px-8">App Header</div>;
}

export default Headers;
