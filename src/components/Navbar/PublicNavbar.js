import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PaymentsIcon from "@mui/icons-material/Payments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FcLeave } from "react-icons/fc";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TaskIcon from "@mui/icons-material/Task";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import clsx from "clsx";
import MaxWidthWrapper from "../utils/Maxwidthwrapper";

const navListItems = [
  {
    name: "Product",
    listItems: [
      {
        name: "Recruitment Management",
        path: "/products/recruitment-management-system",
        icon: <BusinessCenterIcon />,
      },
      {
        name: "Payroll",
        path: "/products/payroll",
        icon: <PaymentsIcon />,
      },
      {
        name: "Invoice",
        path: "/products/invoice",
        icon: <DescriptionIcon />,
      },

      {
        name: "Attendence Management",
        path: "/products/attendence-management",
        icon: <EventAvailableIcon />,
      },
      {
        name: "Timesheet Management",
        path: "/products/timesheet-management",
        icon: <AccessTimeIcon />,
      },
      {
        name: "Leave ManageMent",
        path: "/products/leave-management",
        icon: <InsertInvitationIcon />,
      },
    ],
  },
  {
    name: "Industry",
    listItems: [
      {
        name: "Manufacturing",
        path: "/industry/manufacturing",
        icon: <SettingsSuggestIcon />,
      },
      {
        name: "BFSI",
        path: "/industry/bfsi",
        icon: <AccountBalanceIcon />,
      },
      {
        name: "It Services",
        path: "/industry/it-services",
        icon: <CodeIcon />,
      },

      {
        name: "Retail",
        path: "/industry/attendence-management",
        icon: <LocalGroceryStoreIcon />,
      },
      {
        name: "Healthcare",
        path: "/industry/timesheet-management",
        icon: <HealthAndSafetyIcon />,
      },
    ],
  },
  // {
  //   name: "Resource",
  //   listItems: [
  //     {
  //       name: "none",
  //       path: "/company/none",
  //       icon: <SettingsSuggestIcon />,
  //     },
  //   ],
  // },
  // {
  //   name: "Partner",
  //   listItems: [
  //     {
  //       name: "none",
  //       path: "/company/none",
  //       icon: <SettingsSuggestIcon />,
  //     },
  //   ],
  // },
  {
    name: "Company",
    listItems: [
      {
        name: "About",
        path: "/company/about",
        icon: <InfoIcon />,
      },
      {
        name: "Contact Us",
        path: "/company/contact-us",
        icon: <PhoneIcon />,
      },
    ],
  },
];

const PublicNavbar = () => {
  const navigate = useNavigate();
  const [activeNavTab, setActiveNavTab] = useState(null);
  const isAnyOpen = activeNavTab !== null;

  //   const navRef = useRef(null);

  return (
    <MaxWidthWrapper>
      <div className="bl_home_nav_cont">
        <div>
          <img
            alt="logo"
            className="bl_home_nav_logo"
            onClick={() => navigate("/")}
            src="data:image/png;base64,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"
          />
        </div>
        {/* <div className="">
          <ul className="bl_home_nav_ul_cont">
            {navListItems?.map((item) => (
              <li>
                <span className="bl_nav_li_item">{item.name}</span>
                
              </li>
            ))}
          </ul>
        </div> */}
        <div className="bl_home_nav_btn_cont">
          <button
            className="bl_home_login_btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bl_free_trail_btn"
            onClick={() => navigate("/sign-up")}
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <span> SignUp </span>
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PublicNavbar;
