import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";

import { FooterComponent } from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

export default function RootLayout() {
  return (
    <div className="min-h-screen  ">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 mb-4 lg:px-8">
         <div className="flex md:gap-4">
          <Sidebar /> 
        <div className="md:flex-1 flex-col max-sm:w-screen  ">
          <Outlet />
        </div>
        </div>
      </main > 
      <FooterComponent />
    </div>
  );
}
