import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router";

import ColoredIcon from "../../icon/ImageToIcon";

export default function DropdownComponent() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };
  // const handleMouseLeave = () => setIsOpen(false);

  const { data: categories } = useFetch("categories");
  const navigate = useNavigate();

  const navigateToCategory = (url) => {
    navigate(url);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        // id="dropdownHoverButton"
        className="text-current p-2 hover:bg-gray-100 cursor-pointer   focus:outline-none  font-normal rounded-lg text-sm  text-center inline-flex items-center"
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Categories
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isDropdownVisible && (
        <div
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2 text-sm text-gray-700 ">
            { categories?.map((item) => {
              return (
                <li className=" cursor-pointer w-full">
                  <span
                    onClick={() => navigateToCategory(item.url)}
                    className=" px-4 py-2 w-full flex gap-1.5 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <ColoredIcon dataUrl={item.iconUrl} />
                    <span> {item.name}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
