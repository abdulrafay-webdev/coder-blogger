'use client';

import React, { useState } from "react";
import ButtonSecondary from "../sharedComponents/uiComponents/ButtonSecondary";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Coder Blogger</Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-1 w-8 bg-white mb-1 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`h-1 w-8 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`h-1 w-8 bg-white mt-1 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:bg-none w-full md:w-auto top-16 md:top-auto left-0 text-center flex flex-col md:flex-row text-lg transition-all duration-300 ${
            isOpen ? "opacity-100 z-20 py-5" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
          }`}
        >
          <li className="py-2 md:py-0 hover:text-yellow-300 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-yellow-300 transition-colors">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-yellow-300 transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
          <div className="self-center"><Link target="blank" href={'https://www.youtube.com/@AllCodeWithAI'}>
          <ButtonSecondary>Tutorials</ButtonSecondary>
          </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
