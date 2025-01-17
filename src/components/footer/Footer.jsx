"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export function FooterComponent() {
  return (
    <div className="w-full px-6 py-8 bg-footer-background text-footer-text">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {/* Customer Service Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <BsFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <BsTwitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-600">
              <BsInstagram size={20} />
            </a>
            <a href="#" className="hover:text-red-600">
              <BsYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Adecobs. All rights reserved.
        </p>
      </div>
    </div>

    // <Footer theme={customTheme}>
    //   <div className="w-full">
    //     <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
    //       <div>
    //         <Footer.Title title="Customer Service" />
    //         <Footer.LinkGroup col>
    //           <Footer.Link href="#">Help Center</Footer.Link>
    //           <Footer.Link href="#">Shipping & Returns</Footer.Link>
    //           <Footer.Link href="#">FAQs</Footer.Link>
    //           <Footer.Link href="#">Contact Us</Footer.Link>
    //         </Footer.LinkGroup>
    //       </div>
    //       <div>
    //         <Footer.Title title="Legal Information" />
    //         <Footer.LinkGroup col>
    //           <Footer.Link href="#">Privacy Policy</Footer.Link>
    //           <Footer.Link href="#">Terms of Service</Footer.Link>
    //           <Footer.Link href="#">Cookie Policy</Footer.Link>
    //         </Footer.LinkGroup>
    //       </div>
    //       <div>
    //         <Footer.Title title="Shop With Us" />
    //         <Footer.LinkGroup col>
    //           <Footer.Link href="#">{BsFacebook}</Footer.Link>
    //           <Footer.Link href="#">{BsFacebook}</Footer.Link>
    //           <Footer.Link href="#">{BsFacebook}</Footer.Link>
    //           <Footer.Link href="#">{BsFacebook}</Footer.Link>
    //         </Footer.LinkGroup>
    //       </div>
    //     </div>
    //     <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
    //       <Footer.Copyright href="#" by="Adecobs" year={2024} />
    //     </div>
    //   </div>
    // </Footer>
  );
}
