import React from "react";
import useUser from "../features/authentication/useUser";

function Headers() {
  const { data } = useUser();
  console.log(data);

  return <div className="bg-secondary-0 py-4 px-8">App header</div>;
}

export default Headers;