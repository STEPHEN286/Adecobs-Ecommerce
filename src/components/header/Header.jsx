"use client";

import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";

import Search from "../Ui/Search";
import MobileMenu from "./MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { userProgressAction } from "../../store/userProgressSlice";
import { ModalComponent } from "../Ui/modal/Modal";


import AuthLayout from "../auth/AuthLayout";
import DropdownComponent from "../Ui/dropdown/Dropdown";
import { ProfileDropdown } from "../Ui/dropdown/ProfileDropdown";
import Logo from "./Logo";
import HeaderLinks from "./HeaderLinks";
import ProfileIcon from "../icon/ProfileIcon";
import { Button } from "flowbite-react";
import SearchOnMobile from "./SearchOnMobile";

// const navigation = {
//   categories: [],
//   pages: [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ],
// };

export default function Header() {
  

  const dispatch = useDispatch();

 

  const modalType = useSelector((state) => state.userProgress.modalType);
  const isCreated = useSelector((state) => state.user.isCreated);
  const isDrawerOpen = useSelector((state) => state.userProgress.showDrawer);
  // console.log("cart", modal);


  const handdleShowDrawer = () => {
    dispatch(userProgressAction.setShowDrawer());
  };

  const handdleShowAuthModal = () => {
    dispatch(userProgressAction.setShowModal("authModal"));
    // console.log(modalType);
  };

  return (
    <div className="bg-white mb-4 border-b">
      {/* Mobile menu */}
      {isDrawerOpen && <MobileMenu open={isDrawerOpen} />}

      <header className="relative bg-white " >
        <p className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Info
        </p>

        <div className="border-bborder-gray-200">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  "
          >
            <div className=" border-gray-200">
              <div className="flex justify-between space-x-3 h-16 items-center ">
                <button
                  type="button"
                  onClick={handdleShowDrawer}
                  className="relative rounded-md bg-white p-2 text-gray-400 md:hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

               <Logo />

                <div className="ml-4 hidden md:flex items-center    space-x-3 lg:ml-0 ">
                  <div className="text-sm px-5 py-2.5 text-center inline-flex items-center">
                    <Link href="/">
                      <h1 className="">Home</h1>
                    </Link>
                  </div>

                  {/* category */}
                  <div>
                    <DropdownComponent />
                  </div>
                </div>

                <div className="hidden lg:flex lg:flex-1 max-w-md lg:items-center lg:justify-end lg:space-x-6">
                  <Search />
                </div>
                <div className="ml-auto flex items-center ">
                 {
                      !isCreated && (
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                        <button
                        disabled
                          onClick={handdleShowAuthModal}
                          title="Profile feature is under development"

                          className="text-sm font-medium text-gray-400 group-hover:text-gray-500"
                        >
                          <ProfileIcon />
                        </button>
                        {/* <span aria-hidden="true" className="h-6 w-px bg-gray-200" /> */}
                      </div>
                      )
                 }
                 
                 {
                  isCreated && (
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <ProfileDropdown />
                    {/* <span aria-hidden="true" className="h-6 w-px bg-gray-200" /> */}
                  </div>
                  )
                 }

                  {/* Search */}
                  <SearchOnMobile />

                  {/* Cart */}

                 <HeaderLinks />
                  
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <ModalComponent>
        {modalType === "authModal" && <AuthLayout />}
       
      </ModalComponent>
    </div>
  );
}
