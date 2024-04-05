import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import MaxWidthWrapper from "../utils/Maxwidthwrapper";

import quesAnsImg from "../assets/qqq.jpg";

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is authenticated
    const isLoggedIn = localStorage.getItem("loggedInUser");

    // If the user is not authenticated, redirect to the login page
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return (
    <div>
      <Navbar />
      <div className="home_cont">
        <div className="home_cont_quetion_cont">
          <h1>What is your question?</h1>

          <MaxWidthWrapper>
            <div>
              <div class="InputContainer">
                <input
                  type="text"
                  name="text"
                  class="input"
                  id="input"
                  placeholder="Search"
                />

                <label for="input" class="labelforsearch">
                  <svg viewBox="0 0 512 512" class="searchIcon">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </label>
              </div>
            </div>
          </MaxWidthWrapper>
          <img alt="question" src={quesAnsImg} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
