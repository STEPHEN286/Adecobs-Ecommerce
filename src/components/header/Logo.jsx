import React from 'react'
import logo from "../../asset/images/Asset 2@3x.png";
import { Link } from 'react-router';
export default function Logo() {
  return (
   
    <div className="ml-4 flex  lg:ml-0 ">
    <Link href="/">
      {/* <span className="sr-only">Your Company</span> */}
      {/* <h1 className="font-bold">Adecobs</h1> */}
      <img src={logo} alt="adecobs" className="h-8 md:h-12" />
    </Link>
  </div>
  )
}
