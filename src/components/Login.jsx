// src/components/Login.js
import React, { useState, useEffect } from "react";
import logo from "../images/hydrowfinal.png";
import axiosInstance from "../redux/axiosInstance";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

const Login = () => {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // State variables for handling loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post("/login", {
        username,
        password,
      });

      if (response.status === 200) {
        dispatch(loginSuccess({ token: response.data.token }));
        alert("Login successful!");
        // Optionally, redirect the user or perform other actions
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid credentials. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen parentbg">
      <div className="secondbg h-screen flex justify-center items-center flex-col gap-20">
        <div className="container" id="container">
          <div className="form-container sign-in flex justify-center items-center">
            <div>
              {/* Content to render if admin is false */}
              <>
                <h1
                  style={{ color: "#388CA5" }}
                  className="text-3xl flex justify-center mb-5"
                >
                  Login
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Username Input */}
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#388CA5]"
                  />

                  {/* Password Input */}
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#388CA5]"
                  />

                  {/* Error Message */}
                  {error && (
                    <p className="text-red-500 text-sm">
                      {error}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex items-center justify-center bg-white loginbtn border border-gray-300 rounded-lg shadow-lg text-sm font-medium text-gray-800 dark:text-white px-4 py-2 hover:bg-gray-100 transition ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Logging in..." : "Submit"}
                  </button>
                </form>
              </>
            </div>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-right text-center p-4">
                <img src={logo} alt="Hydrowverse Logo" className="mx-auto mb-4" />
                <h1 className="text-2xl font-semibold">
                  Welcome to <br /> Hydrowverse
                </h1>

                <p className="mt-2">
                  To get started, <br /> login here and explore the dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
