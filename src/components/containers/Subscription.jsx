import React from "react";
import Input from "../Ui/Input";

export default function Subscription() {
  return (
    <div className="w-full p-10 flex flex-col justify-center space-y-4 items-center bg-header-background h-fit">
      <h1 className="text-sm font-bold text-white text-center text-wrap">
        Join our community to receive exclusive offers, updates on new arrivals,
        and insider tips straight to your inbox.
      </h1>
      <Input
        type={"email"}
        placeholder={"Enter your email address"}
        additionalStyle={" w-full md:w-1/2"}
      />
      <button className="bg-cta-button text-white p-3 w-fit rounded-md ">Subscribe</button>
    </div>
  );
}
