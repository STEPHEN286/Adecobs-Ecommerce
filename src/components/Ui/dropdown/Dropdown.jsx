import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Link, useNavigate } from "react-router";

import ColoredIcon from "../../icon/ImageToIcon";

export default function DropdownComponent() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };


  const { data: categories } = useFetch("categories");
  const navigate = useNavigate();

  const navigateToCategory = (url) => {
    setIsDropdownVisible(false);
    navigate(url);
    // console.log(url);
    // console.log(categories);
    
    
  };

  return (
    <div className="relative inline-block text-left">
      <button

        className="text-current   p-2 hover:bg-gray-100 cursor-pointer   focus:outline-none  font-normal rounded-lg text-sm  text-center inline-flex items-center"
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
          className="absolute z-10  w-56   bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2  text-sm text-gray-700 ">
            { categories?.map((category) => {
              const { id:categoryId, name, iconUrl } = category;

              
              
              return (
                <li className=" cursor-pointer ">
                  {/* <Link to={`category/${categoryId}`} >{name}</Link> */}
                  <span
                    onClick={() => navigateToCategory(`category/${categoryId}`)}
                    className=" px-4 py-2   flex gap-1.5 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <ColoredIcon dataUrl={iconUrl} />
                    <span className="w-full"> {name}  </span>
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
