import { UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function PersonalDetails() {
  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto ">
      {/* Left Section */}
      <div className="border p-6 h-fit">
        <div className="mb-4">
          <h6 className="text-lg font-semibold">Full Name</h6>
          <p className="text-gray-600">Stephen Adjei Kwofie</p>
        </div>
        <div className="mb-4">
          <h6 className="text-lg font-semibold">Email</h6>
          <p className="text-gray-600">AdeCob@gmail.com</p>
        </div>
        <div className="mb-4">
          <h6 className="text-lg font-semibold">Contact</h6>
          <p className="text-gray-600">05780328557878</p>
        </div>
        <div className="mb-4">
          <h6 className="text-lg font-semibold">Shipping Address</h6>
          <p className="text-gray-600">Western Region Axim</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-2 w-1/2 border p-6">
        <div className="flex items-center justify-center mb-6">
          <UserCircleIcon  className="text-gray-700 mr-3 w-6 h-6" />
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your address"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
