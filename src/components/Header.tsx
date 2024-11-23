import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold hover:underline">
            Stellar-UI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden bg-blue-700 text-white py-4">
            <ul className="space-y-4 text-center">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
