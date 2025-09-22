"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="w-11/12  py-3 mx-auto md:flex justify-between items-center">
        <div className="container flex items-center justify-between">
      
            <Link href="/">
            <h1 className="font-bold text-3xl">Hello Next js</h1>
          </Link>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle menu"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:flex md:items-center md:justify-between
            ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"}`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <Link
              href="/"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg 
              dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg 
              dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
            >
              About
            </Link>
            <Link
              href="/profile"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg 
              dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
            >
              Profile
            </Link>
          </div>

          {/* Search Input */}
          <div className="relative mt-4 md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 
                     17C6.13401 17 3 13.866 3 10C3 6.13401 
                     6.13401 3 10 3C13.866 3 17 6.13401 
                     17 10Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg 
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
              focus:border-blue-400 dark:focus:border-blue-300 
              focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
