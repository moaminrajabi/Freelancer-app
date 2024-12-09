import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr] ">
      <Headers />
      <SideBar />
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md flex felx-col gap-y-12 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
