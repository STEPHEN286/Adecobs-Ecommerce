import React from "react";
import { useSelector } from "react-redux";
import Register from "./Register";
import Login from "./Login";

export default function AuthLayout() {
  const authMode = useSelector((state) => state.userProgress.authMode);

  return (
    <div className="">
      {authMode === "signup" && <Register />}
      {authMode === "login" && <Login />}
    </div>
  );
}
