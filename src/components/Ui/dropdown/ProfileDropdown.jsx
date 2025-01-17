"use client";

import { Dropdown } from "flowbite-react";
import ProfileIcon from "../../icon/ProfileIcon";
import { Link } from "react-router";
import { CogIcon, ShoppingBagIcon, UserIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

export function ProfileDropdown() {
  return (
    <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><ProfileIcon /></span>}>
       {menuItems.map((item) => (
        <Dropdown.Item key={item.id}>
          {item.link ? (
            <Link className="flex items-center gap-2" to={item.link}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ) : (
            <button
              className="flex items-center gap-2 w-full text-left"
              onClick={item.action}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          )}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}



const menuItems = [
  {
    id: 1,
    label: "My Profile",
    icon: <UserIcon className="h-5 w-5 text-gray-500" />,
    link: "/user-setting",
  },
  {
    id: 2,
    label: "Orders",
    icon: <ShoppingBagIcon className="h-5 w-5 text-gray-500" />,
    link: "/orders",
  },
  {
    id: 3,
    label: "Account Settings",
    icon: <CogIcon className="h-5 w-5 text-gray-500" />,
    link: "/account-settings",
  },
  {
    id: 4,
    label: "Sign out",
    icon: <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-gray-500" />,
    action: () => alert("Sign out action"), // Replace with actual logout logic
  },
];