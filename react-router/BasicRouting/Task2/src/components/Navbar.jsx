import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // A reusable style generator helper function for desktop nav items
  const desktopLinkStyles = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-all duration-300 py-2 border-b-2 ${
      isActive
        ? "text-amber-400 border-amber-400 font-semibold"
        : "text-zinc-400 border-transparent hover:text-zinc-200 hover:border-zinc-700"
    }`;

  // A reusable style generator helper function for mobile items
  const mobileLinkStyles = ({ isActive }) =>
    `block text-base font-medium px-4 py-2.5 rounded-lg transition-all duration-200 ${
      isActive
        ? "text-amber-400 bg-zinc-900 border-l-4 border-amber-400 font-semibold"
        : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/60"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 1. BRAND LOGO SITE HEADER */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold tracking-widest text-zinc-100 hover:text-amber-400 transition-colors uppercase"
            >
              O R I G I N
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={desktopLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/about" className={desktopLinkStyles}>
              About
            </NavLink>
            <NavLink to="/contact" className={desktopLinkStyles}>
              Contact
            </NavLink>
          </div>

          {/* 3. UTILITY ICONS / INTERACTIVE RIGHT PANEL */}
          <div className="flex items-center space-x-4">
            {/* Minimalist Shopping Bag Indicator Counter */}
            <button className="relative p-2 text-zinc-400 hover:text-amber-400 transition-colors focus:outline-hidden cursor-pointer">
              <span className="sr-only">View shopping bag</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              {/* Notification Badge Badge Counter */}
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-400 ring-2 ring-zinc-950" />
            </button>

            {/* Mobile Menu Action Toggle Trigger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Toggle navigation options panel menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE DROPDOWN SELECTION DRAWER PANEL */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-zinc-950 border-t border-zinc-900 ${
          isMobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={mobileLinkStyles}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={mobileLinkStyles}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={mobileLinkStyles}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
