/**
 * Navbar component for the header of the app.
 *
 * @module Navbar
 */

import React from "react";
import "../../../sass/navbar.scss";
import { NavLink, useLocation } from "react-router-dom";

/**
 * Component representing the navigation bar.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
export default function Navbar() {
  // Hook to get the current location (path) in the app
  const location = useLocation();

  // Navigation buttons for valid routes
  const validRouteButtons = (
    <>
      {/* NavLink for creating a new employee */}
      <NavLink
        id="createLink"
        className={({ isActive }) =>
          isActive ? "createLink active" : "createLink"
        }
        to="/"
      >
        Create new Employee
      </NavLink>

      {/* NavLink for viewing current employees */}
      <NavLink
        id="showLink"
        className={({ isActive }) =>
          isActive ? "showLink active" : "showLink"
        }
        to="/ViewCurrentEmployeesPage"
      >
        View current Employees
      </NavLink>
    </>
  );

  // Navigation button for error route
  const errorRouteButtons = (
    <>
      {/* NavLink to return to the home page from an error page */}
      <NavLink
        id="errorLink"
        className={({ isActive }) =>
          isActive ? "errorLink active" : "errorLink"
        }
        to="/"
      >
        Return to Home
      </NavLink>
    </>
  );

  return (
    // Render the navigation bar with appropriate links based on the current path
    <nav id="nav" className="nav">
      {location.pathname !== "/error" ? validRouteButtons : errorRouteButtons}
    </nav>
  );
}
