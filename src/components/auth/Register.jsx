import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { userProgressAction } from "../../store/userProgressSlice";
import { useDispatch } from "react-redux";
import Input from "../Ui/Input";
import { Form, Link } from "react-router";
import { validateForm } from "../../utils/validation";

export default function Register() {

  const dispatch = useDispatch();
  const authModeToLogin = () => {
    dispatch(userProgressAction.setAuthMode("login"));


  };

  const [formState, setFormState] = useState({
    errors: {},
    loading: false,
  });






  const validationRules = {
    password: { required: true, requiredMessage: "password  is required." },
    name: { required: true, requiredMessage: "name  is required." },
  
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

    
  }

  const { errors } = formState;
  return (
    <div className="space-y-6 ">
      <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
        Sign Up
      </h3>
      <Form onSubmit={handleSubmit}>
      <Input placeholder="e.g. jamessmith@gmail.com"  label={"Email address"} error={errors.email} />
      <Input placeholder="James Smith" name={"name"} label={"Name"} error={errors.name} />
      <Input  label={"Password"}  error={errors.password}/>
     
     
      
      <div className="flex justify-between my-2">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
       
      </div>
      <div className="w-full ">
        <Button type="submit" className=" w-full bg-cta-button text-center  mx-auto block">
          Create an Account
        </Button>
      </div>
      </Form>
      <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300">
        Already have an account?&nbsp;
        <span
          onClick={authModeToLogin}
          className="text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Login
        </span>
      </div>
    </div>
  );
}
