import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";

import { FooterComponent } from "../components/footer/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className=" mx-auto ">
        {/* <div className="flex">
          <Sidebar /> */}
        <div className="md:flex-1 flex-col max-sm:w-screen  ">
          <Outlet />
        </div>
        {/* </div> */}
      </main>
      <FooterComponent />
    </div>
  );
}
