import React from "react";
import "../../../sass/header.scss";
import logo from "../../../../public/assets/hrnet_logo.jpeg";
import Navbar from "./navbar.jsx";

/**
 * Renders the header section of the web application.
 * @returns {JSX.Element} The JSX structure for the header.
 */
export default function Header() {
  // The Header function component renders the header section of the web application.

  return (
    // JSX structure for the header
    <header className="header">
      {/* Container for the application logo and title */}
      <div className="header__Top">
        {/* Image tag for displaying the logo */}
        <img
          src="../../../../public/assets/hrnet_logo.jpeg"
          className="logo"
          alt="HRNet Logo"
        />
        {/* Heading for the application title */}
        <h1 className="header__Top__Title">HRnet</h1>
      </div>
      {/* Embedding the Navbar component */}
      <Navbar />
    </header>
  );
}
