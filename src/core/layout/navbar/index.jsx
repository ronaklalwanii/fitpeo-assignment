import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import {
  BellIcon,
  Bars3Icon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";

const LayoutNavbar = ({ setSidebarOpen }) => {
  return (
    <nav className="layout-navbar top-0 min-h-[64px] py-4 px-6 xl:px-10 border-b-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Bars3Icon
            onClick={() => setSidebarOpen(true)}
            className="xl:hidden cursor-pointer block h-[24px] w-[24px]"
          />
          <p className="text-xl xl:text-3xl">BrandName</p>
        </div>

        <div className="form-control input-group-md hidden sm:flex">
          <label className="input-group items-center pr-4 rounded-full bg-transparent border-2">
            <input
              type="text"
              placeholder="Search..."
              style={{ borderRadius: "9999px" }}
              className="input input-md bg-transparent"
            />
            <MagnifyingGlassIcon className="h-[24px] w-[24px]" />
          </label>
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden xl:block indicator cursor-pointer">
            <span className="indicator-item badge badge-primary rounded-full">
              76
            </span>
            <EnvelopeIcon className="w-[32px] h-[32px]" />
          </div>
          <div className="hidden xl:block indicator cursor-pointer">
            <span className="indicator-item badge badge-primary rounded-full">
              4
            </span>
            <BellIcon className="w-[32px] h-[32px]" />
          </div>
          <div className="hidden xl:block indicator cursor-pointer">
            <span className="indicator-item badge badge-primary rounded-full">
              15
            </span>
            <ChatBubbleBottomCenterIcon className="w-[32px] h-[32px]" />
          </div>
          <div className="avatar cursor-pointer">
            <div className="w-[42px] rounded-full">
              <img src="/images/avatars/avatar-1.png" alt="user-avatar" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
