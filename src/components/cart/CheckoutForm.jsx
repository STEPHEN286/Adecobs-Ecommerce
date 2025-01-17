import React, { useContext, useState } from "react";
import Input from "../Ui/Input";

import axios from "axios";
import { apiBaseUrl } from "../../utils/constants";
import {validateForm} from "../../utils/validation"
import { useSelector } from "react-redux";
import { currencyFormatter } from "../../utils/currencyFormatter";

export default function CheckoutForm() {
  

  const totalPrice = useSelector(state => state.cart.totalPriceInCart)
  const cartItems = useSelector(state => state.cart.cartItems)
  
  const [formState, setFormState] = useState({
    errors: {},
    loading: false,
  });

  const validationRules = {
    firstName: { required: true, requiredMessage: "First name is required." },
    lastName: { required: true, requiredMessage: "Last name is required." },
    address: { required: true, requiredMessage: "Address is required." },
    city: { required: true, requiredMessage: "City is required." },
    digitalAddress: {
      required: true,
      requiredMessage: "Digital address is required.",
    },
    phoneNumber1: {
      required: true,
      requiredMessage: "At least one phone number is required.",
    },
    email: {
      required: true,
      regex: /^\S+@\S+\.\S+$/,
      requiredMessage: "Email is required.",
      invalidMessage: "A valid email address is required.",
    },
  };

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => {
      const updatedErrors = { ...prev.errors };

      if (name === "email" && /^\S+@\S+\.\S+$/.test(value)) {
        delete updatedErrors.email;
      } else if (name === "firstName" && value.trim()) {
        delete updatedErrors.firstName;
      } else if (name === "lastName" && value.trim()) {
        delete updatedErrors.lastName;
      } else if (name === "address" && value.trim()) {
        delete updatedErrors.address;
      } else if (name === "city" && value.trim()) {
        delete updatedErrors.city;
      } else if (name === "digitalAddress" && value.trim()) {
        delete updatedErrors.digitalAddress;
      } else if (name === "phoneNumber1" && value.trim()) {
        delete updatedErrors.phoneNumber1;
      }

      return { ...prev, errors: updatedErrors };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const errors = validateForm(formData, validationRules);
    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }));
      return;
    }

    

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      address: formData.get("address"),
      city: formData.get("city"),
      digitalAddress: formData.get("digitalAddress"),
      phoneNumber1: formData.get("phoneNumber1"),
      phoneNumber2: formData.get("phoneNumber2"),
      email: formData.get("email"),



    };

      onCheckout(data)

    
  };


 

  const { errors, loading } = formState;

  const onCheckout = async (data) =>{
    setFormState((prev) => ({ ...prev, loading: true }));

    const { firstName, lastName, line, city, digitalAddress, phoneNumber1, phoneNumber2, email } =
    data;
  try {
    const response = await axios.post(
      `${apiBaseUrl}/checkout`,
      {
          productIds: cartItems.map((item) => item.id),
          firstName,
          lastName,
          customerAddress: { line, city, digitalAddress, country: "Ghana" },
          customerContact: { phoneNumber1, phoneNumber2, email },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response || !response.data) {
      alert("Something went wrong. Please try again.");
      return;
    }

    window.location.href = response.data.url;
  } catch (error) {
    console.error("Checkout failed:", error);
  } finally {
    setFormState((prev) => ({ ...prev, loading: false }));
  }
  };

  return (
    <form className="w-full max-w-lg mt-4" onSubmit={handleSubmit} noValidate>
      <h2 className="block uppercase border-b mb-3 tracking-wide text-gray-700 text-xs font-bold">
        Delivery Details
      </h2>

      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          type="text"
          label="First Name"
          additionalStyle="w-full md:w-1/2"
          name="firstName"
          error={errors.firstName}
          onChange={(e) => handleOnchange(e)}
        />
        <Input
          type="text"
          label="Last Name"
          additionalStyle="w-full md:w-1/2"
          name="lastName"
          error={errors.lastName}
          onChange={(e) => handleOnchange(e)}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          type="text"
          label="Billing Address"
          additionalStyle="w-full"
          name="address"
          error={errors.address}
          onChange={(e) => handleOnchange(e)}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          type="text"
          label="City"
          additionalStyle="w-full md:w-1/2"
          name="city"
          error={errors.city}
          onChange={(e) => handleOnchange(e)}
        />
        <Input
          type="text"
          label="Digital-Address"
          additionalStyle="w-full md:w-1/2"
          name="digitalAddress"
          error={errors.digitalAddress}
          onChange={(e) => handleOnchange(e)}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <Input type="email" label="Email" name="email" error={errors.email}  onChange={(e) => handleOnchange(e)} />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          type="text"
          label="Phone Number 1"
          name="phoneNumber1"
          additionalStyle="md:w-1/2 w-full"
          error={errors.phoneNumber1}
          onChange={(e) => handleOnchange(e)}
        />
        <Input
          type="text"
          label="Phone Number 2"
          name="phoneNumber2"
          additionalStyle="md:w-1/2 w-full"
        />
      </div>

      <p className="m-0 border-b">Order Review</p>
      <div className="p-2 flex justify-between fs-5 border-b mb-2">
        <span>Total</span>
        <span>{currencyFormatter.format(totalPrice)}</span>
      </div>

      <button
        type="submit"
        className="bg-cta-button text-white p-3 w-full"
        disabled={loading}
      >
        {loading ? "Processing..." : "CHECKOUT"}
      </button>
    </form>
  );
}
