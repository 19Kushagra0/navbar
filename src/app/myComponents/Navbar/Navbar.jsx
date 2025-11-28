"use client";
import React, { useEffect, useState } from "react";
import "@/app/myComponents/Navbar/Navbar.css";
import Link from "next/link";

export default function Navbar({ showNavBar }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false); // 🔹 slide out
    // showNavBar();

    setTimeout(() => {
      showNavBar();
    }, 150);

    // closing slow
    // setTimeout(() => {
    //   showNavBar(); // 🔹 remove AFTER animation completes
    // }, 150); // must match CSS transition speed
  };

  return (
    <>
      <div onClick={handleClose} className="navbar-cover" aria-hidden="true" />

      <nav
        className={`navbar ${isOpen ? "open" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="back-button"
          aria-label="Close navigation menu"
        >
          <svg
            className="back-image"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
          >
            <polyline
              points="244 400 100 256 244 112"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <line
              x1="120"
              y1="256"
              x2="412"
              y2="256"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div className="navbar-links">
          <Link onClick={handleClose} href="/career" className="navbar-button">
            Careers
          </Link>
          <Link onClick={handleClose} href="/privacy" className="navbar-button">
            Privacy
          </Link>
          <Link onClick={handleClose} href="/terms" className="navbar-button">
            Terms
          </Link>
        </div>
      </nav>
    </>
  );
}
