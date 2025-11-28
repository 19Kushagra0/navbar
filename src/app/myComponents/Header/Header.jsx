"use client";
import Link from "next/link";
import React from "react";
import "@/app/myComponents/Header/Header.css";
import Navbar from "@/app/myComponents/Navbar/Navbar";
import { useState } from "react";

export default function Header() {
  // show navbar
  const [navBar, setNavBar] = useState(false);
  // navbar toggle
  const showNavBar = () => {
    setNavBar(!navBar);
  };
  return (
    <div className="term-privacy-header">
      <Link href="/">
        <svg
          className="term-privacy-header-image-container"
          height={36}
          width={36}
          viewBox="0 0 35 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2188 1.14714C15.868 -0.38238 19.132 -0.38238 21.7812 1.14714L30.7188 6.30733C33.368 7.83685 35 10.6635 35 13.7226V24.0428C35 27.1018 33.368 29.9285 30.7188 31.4581L21.7812 36.6182C19.6801 37.8313 17.1924 38.082 14.9313 37.3709V18.3261C14.9313 14.9923 12.2286 12.2896 8.89478 12.2896C5.56092 12.2896 2.85829 14.9923 2.85829 18.3261V30.4284C1.06016 28.8223 0 26.5081 0 24.0428V13.7226C0 10.6635 1.63199 7.83685 4.2812 6.30733L13.2188 1.14714Z"
            fill="black"
          />
        </svg>
      </Link>
      <div className="term-privacy-header-button-container">
        <Link href="/career" className="term-privacy-header-button">
          Careers
        </Link>
        <Link href="/privacy" className="term-privacy-header-button">
          Privacy
        </Link>
        <Link
          href="/terms"
          className="terms-privacy-black  term-privacy-header-button"
        >
          Terms
        </Link>
      </div>
      <button
        onClick={() => {
          showNavBar();
        }}
        className="term-privacy-header-hamberburger-container"
      >
        <svg
          width="29"
          height="29"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="term-privacy-header-hamberburger"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z"
            fill="#C0C0C0"
          />
        </svg>
      </button>
      {/* navbar */}
      {navBar ? <Navbar showNavBar={showNavBar} /> : null}
    </div>
  );
}
