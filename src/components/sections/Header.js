import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-gray-100 text-gray-800 shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-gray-900">
          Trans<span className="text-gray-600">tech</span> Academy
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-gray-900 transition">
            HOME
          </Link>
          <Link href="/course" className="hover:text-gray-900 transition">
            COURSE
          </Link>
          <Link href="/about" className="hover:text-gray-900 transition">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-gray-900 transition">
            CONTACT
          </Link>
        </nav>

        {/* Student Portal Button */}
        {/* <Link
          href="/student-portal"
          className="ml-6 bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900 transition"
        >
          STUDENT PORTAL
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
