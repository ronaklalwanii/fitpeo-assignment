import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import * as Icon from "@heroicons/react/24/outline";

const SidebarItem = (props) => {
  const { title, icon, url, badgeColor, badgeText, sidebarCollapsed } = props;

  const MenuIcon = Icon[icon];

  return (
    <li className="mb-8">
      <NavLink
        to={url}
        color="link cursor-pointer"
        onClick={(e) => e.preventDefault()}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-primary" : ""
        }
      >
        <div className="flex flex-col items-center justify-center hover:text-primary">
          <MenuIcon className="w-[32px] h-[32px]" />
          <div className="flex items-center mt-2">
            <p className="text-md">{title}</p>
            <Icon.ChevronRightIcon className="w-[16px] h-[16px] mt-[2px]" />
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
