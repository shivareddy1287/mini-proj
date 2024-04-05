import React from "react";
import "./navbar.css";
import PublicNavbar from "./PublicNavbar";
import UserNavbar from "./UserNavbar";

const Navbar = () => {
  // Check if there's any logged-in user information in local storage
  const isLoggedIn = localStorage.getItem("loggedInUser");

  return (
    <div>
      {/* Conditionally render UserNavbar if a user is logged in */}
      {isLoggedIn ? <UserNavbar /> : <PublicNavbar />}
    </div>
  );
};

export default Navbar;
