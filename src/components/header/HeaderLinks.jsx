import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router'

export default function HeaderLinks() {
    const cartItems = useSelector((state) => state.cart.cartItems);
  return (
 <>
    <div className="ml-4 flow-root lg:ml-6">
                    <Link
                      to="cart"
                      className="group -m-2 flex items-center p-2"
                    >
                      <HeartIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cartItems?.length}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link
                      to="cart"
                      className="group -m-2 flex items-center p-2"
                    >
                      <ShoppingBagIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cartItems?.length}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
 </>
  )
}
