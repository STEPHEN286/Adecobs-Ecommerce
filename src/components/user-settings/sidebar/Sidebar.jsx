import React from "react";
import {
  UserIcon,
  ShoppingBagIcon,
  InboxIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
  HeartIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  MapPinIcon,
  Cog6ToothIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "./SideBarItem";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white  border-r h-fit">
      {/* Sidebar Items */}
      <div className="py-4 px-6">
        <div className="flex items-center space-x-2 mb-6">
          <UserIcon className="w-6 h-6 text-gray-600" />
          <span className="text-gray-800 font-semibold">My  Account</span>
        </div>
        <nav className="space-y-2">
          <SidebarItem Icon={IdentificationIcon} label="Personal Details" active />
          <SidebarItem Icon={ShoppingBagIcon} label="Orders" />
          <SidebarItem Icon={ClockIcon} label="Recently Viewed" />
        </nav>

        {/* Bottom Section */}
        <div className="mt-6 border-t pt-4 space-y-2">
          <SidebarItem Icon={Cog6ToothIcon} label="Account Management" />
         
        </div>
      </div>
    </div>
  );
};

export default Sidebar;