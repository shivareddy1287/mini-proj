import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MaxWidthWrapper from "../utils/Maxwidthwrapper";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const isLoggedIn = localStorage.getItem("loggedInUser");

    // If the user is not authenticated, redirect to the login page
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <Navbar />
      <MaxWidthWrapper>Questions and Answers Placed here</MaxWidthWrapper>
    </div>
  );
};

export default Dashboard;
