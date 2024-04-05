import React from "react";
import MaxWidthWrapper from "../utils/Maxwidthwrapper";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(user.access);

  return (
    <div>
      <MaxWidthWrapper>
        <div className="userNavbar">
          <div>
            {" "}
            <img
              alt="logo"
              className="bl_home_nav_logo"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="userNavbar_user_photo_cont">
            <img
              alt="user"
              className="userNavbar_user-photo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKsFSua63eeOv8um09gUzfv80Ju2bKKnnszvDhHNB1g&s"
            />
            <div className="userNavbar_user_photo_cont_dropdown">
              <p style={{ fontWeight: "bold" }}>{user?.access}</p>

              <p>{user?.email}</p>
              <p
                className="logout_button"
                onClick={() => {
                  localStorage.removeItem("loggedInUser");
                  navigate("/");
                }}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default UserNavbar;
