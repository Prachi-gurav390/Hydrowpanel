import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../redux/locationSlice";
import { ThemeContext } from "./ThemeProvider";
import { logout } from "../redux/authSlice";
import logo from "../images/hydrowfinal.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState("All");
  const locations = ["All", "IIITH", "RN"];

  useEffect(() => {
    dispatch(setLocation("All"));
  }, [dispatch]);

  const handleLocationClick = (location) => {
    dispatch(setLocation(location));
    setSelectedLocation(location);
  };
  const handleLogout = () => {
    // Optional: Add a confirmation prompt
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      dispatch(logout());
      alert("Logged out successfully!");
    }
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col sidebarmenu h-[100%] rounded-2xl pb-5 ${theme}`}
    >
      <div className="logo">
        <a href="https://hydrowverse.com/">
          <img className=" w-3/4 mt-4 m-auto" src={logo} alt="Logo" />
        </a>
      </div>
      <hr className="sidebarline" />
      <div className="location w-full h-[90%] mt-3 flex flex-col m-auto">
        {locations.map((item, index) => (
          <button
            key={index}
            onClick={() => handleLocationClick(item)}
            className={`text-white menuitem py-2 px-4 mx-auto my-3 rounded w-[62%] ${
              selectedLocation === item ? "selectedbtn" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="px-6 h-[7%] flex">
        <button
          onClick={handleLogout}
          className="w-[100%] rounded-lg logoutbtn"
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
