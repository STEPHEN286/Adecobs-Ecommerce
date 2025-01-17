import { Button, Checkbox, Label } from "flowbite-react";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userProgressAction } from "../../store/userProgressSlice";
import Input from "../Ui/Input";

import Form from "../Ui/Form";
import { validateForm } from "../../utils/validation";
import { Link } from "react-router";
import { toggleIsCreated } from "../../store/AuthSlice";

export default function Login() {
  const [formState, setFormState] = useState({
    errors: {},
    loading: false,
  });
  const dispatch = useDispatch();

  const authModeToSignup = () => {
    dispatch(userProgressAction.setAuthMode("signup"));
  };



  





  const validationRules = {
    password: { required: true, requiredMessage: "password  is required." },
  
    email: {
      required: true,
      regex: /^\S+@\S+\.\S+$/,
      requiredMessage: "Email is required.",
      invalidMessage: "A valid email address is required.",
    },
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const errors = validateForm(formData, validationRules);

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }));
      return;
    }

    dispatch(toggleIsCreated());
    
  }

  const { errors } = formState;

  return (
    <div className="space-y-6">
      <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
        Sign in
      </h3>
      
<Form onSubmit={handleSubmit} >
  
<Input  label={"Your Email"} name={"email"}  error={errors.email} />
      <Input  label={"Password"} name={"password"} error={errors.password}/>
     
      <div className="flex justify-between my-2" >
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link
          href="#"
          className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Forgot password?
        </Link>
      </div>
      <div className="w-full ">
        <Button type="submit" className="bg-cta-button w-full focus:ring-0  block">
          Log in to your account
        </Button>
      </div>
</Form >
      <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?&nbsp;
        <span
          href="#"
          className="text-cyan-700 hover:underline dark:text-cyan-500"
          onClick={authModeToSignup}
        >
          Create account
        </span>
      </div>
    </div>
  );
}
