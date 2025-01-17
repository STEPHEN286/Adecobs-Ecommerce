import React from "react";

export default function Input({
  label,
  name,
  type,
  additionalStyle,
  className,
  error,
  ...props
}) {
  return (
    <div
      className={`px-3 
         ${additionalStyle ? additionalStyle : "w-full"}
   `}
    >
      {label && (
        <label
          className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        className={`appearance-none block
          bg-gray-200 text-gray-700 ${
            error && "border-red-600"
          } border w-full border-gray-300 bg-gray-50 focus:outline-none focus:ring-0 focus:border-cta-ctaBorder  rounded py-3 px-4 mb-3 leading-tight  `}
        id={label}
        type={type}
        name={name}
        {...props}
      />
      {error && <p className="text-red-600 text-xs italic">{error}</p>}
    </div>
  );
}
