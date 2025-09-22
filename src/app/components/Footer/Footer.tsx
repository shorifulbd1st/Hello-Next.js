"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Hello Next Js
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2021. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex -mx-2">
          {/* Reddit */}
          <Link
            href="#"
            aria-label="Reddit"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 ..."></path>
            </svg>
          </Link>

          {/* Facebook */}
          <Link
            href="#"
            aria-label="Facebook"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 ..."></path>
            </svg>
          </Link>

          {/* Github */}
          <Link
            href="#"
            aria-label="Github"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 ..."></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
