import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4 ">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiCollection />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

function CustomNavLink({ children, to }) {
  const NavLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${NavLinkClass} bg-primary-100/50 text-primary-900 `
          : NavLinkClass
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
