import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router";
import ColoredIcon from "../icon/ImageToIcon";

function Sidebar() {
  const { data: categories } = useFetch("categories");
  const navigate = useNavigate();

  const navigateToCategory = (url) => {
    navigate(url);
  };

  return (
    <div className=" border-r hidden md:block max-h-96 bg-white p-5">
      <ul className="space-y-3 ">
        {categories?.map((category) => {
          const { id, name, iconUrl } = category;
          return (
            <li key={id}>
              <div
                onClick={() => navigateToCategory(`category/${id}`)}
                className=" cursor-pointer flex items-center gap-1"
              >
                {/* <ColoredIcon dataUrl={iconUrl} /> */}
                <img src={iconUrl} alt="" />
                <span>{name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
