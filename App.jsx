import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProtectedRoute from "./ProtectedRoute"; // <-- added

function App() {
  const isLoggedIn = localStorage.getItem("authToken");

  return (
    <Router>
      {/* ✅ Navbar */}
      <header className="flex items-center justify-between px-10 py-6 shadow-md bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Expense Tracker
          </h1>
          <img
            className="w-10 h-10"
            src="https://cdn-icons-png.freepik.com/256/10758/10758836.png"
            alt="logo"
          />
        </div>

        <nav>
          <ul className="flex gap-6 text-gray-600 font-medium">
            <li>
              <Link
                to="/"
                className="px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-400 hover:bg-opacity-40 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-400 hover:bg-opacity-40 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-400 hover:bg-opacity-40 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-400 hover:bg-opacity-40 transition"
              >
                Feedback
              </Link>
            </li>

            {/* Dashboard Only If Logged In */}
            {isLoggedIn && (
              <li>
                <Link
                  to="/dashboard"
                  className="px-5 py-2 rounded-lg font-medium shadow hover:bg-gray-400 hover:bg-opacity-40 transition"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {/* Sign In / Sign Up only if NOT logged in */}
            {!isLoggedIn && (
              <>
                <li>
                  <Link
                    to="/signin"
                    className="border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
                  >
                    Sign In
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* Logout Button (only if logged in) */}
            {isLoggedIn && (
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("authToken");
                    window.location.href = "/signin";
                  }}
                  className="border border-red-600 text-red-600 px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>

      {/* ✅ Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
