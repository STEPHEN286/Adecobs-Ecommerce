import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router";
import { userProgressAction } from "../../store/userProgressSlice";
import { useDispatch } from "react-redux";

export default function MobileMenu({ open, onClose }) {
  const { data: categories } = useFetch("categories");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const navigateToCategory = (url) => {
    navigate(url);
  };

  // console.log(modalType);
  const handdleShowAuthModal = () => {
    dispatch(userProgressAction.hideShowDrawer());
    dispatch(userProgressAction.setShowModal("authModal"));
  };

  const handleCloseDrawer = () => {
    dispatch(userProgressAction.hideShowDrawer());
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseDrawer}
      className="relative z-40 md:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <div className="flex px-4 pb-2 pt-5">
            <button
              type="button"
              onClick={handleCloseDrawer}
              className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <ul className="space-y-3 ">
              {categories?.map((category) => {
                const { id, name, iconUrl } = category;
                return (
                  <li key={id}>
                    <div
                      onClick={() => navigateToCategory(`category/${id}`)}
                      className=" cursor-pointer flex items-center  gap-1"
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

          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <span
                onClick={handdleShowAuthModal}
                className="-m-2 block p-2 font-medium text-gray-900"
              >
                Sign in
              </span>
            </div>
            {/* <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Create account
              </a>
            </div> */}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
