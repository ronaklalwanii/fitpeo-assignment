import React from "react";
import { NavLink } from "react-router-dom";

// Custom Component
import SidebarItem from "./SidebarItem";

// Icons
import { XMarkIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";

// 3rd-party
import classnames from "classnames";

// Config
import navigation from "@/configs/navigation";

const LayoutSidebar = (props) => {
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <nav
      className={classnames(
        "layout-sidebar bg-white border-r-2 border-right w-[150px] px-4 py-6 z-10 xl:min-h-screen min-h-[100%] xl:block xl:relative absolute transition-[width] ease-linear xl:shadow-none shadow-lg",
        {
          hidden: sidebarOpen === false,
        }
      )}
    >
      <div className="flex justify-center items-center w-full">
        <NavLink to="/" className="cursor-pointer">
          <BuildingOffice2Icon className="w-[38px] h-[38px]" />
        </NavLink>
      </div>
      <XMarkIcon
        onClick={() => setSidebarOpen(false)}
        className={classnames(
          "absolute cursor-pointer right-[16px] top-[16px] h-[24px] w-[24px]",
          {
            hidden: sidebarOpen === false,
          }
        )}
      />
      <ul className="mt-10">
        {navigation.map((item) => (
          <SidebarItem {...item} key={item.title} />
        ))}
      </ul>
    </nav>
  );
};

export default LayoutSidebar;
