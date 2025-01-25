import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

import { useNavigate } from "react-router";

export default function SearchOnMobile() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div>
      <div className="flex  lg:hidden lg:ml-6 ">
        <span
          onClick={handleSearchClick}
          className="p-2 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Search</span>
          <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
        </span>
      </div>
    </div>
  );
}
