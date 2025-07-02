import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { AuthContext } from "../../context/AuthContext";
import { toastAction } from "../../utils/toastAction";

export default function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
      toastAction.success("Logout Successfully");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      toastAction.error("Something went wrong!");
    }
  };
  return (
    <header className="w-full h-[85px] flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-[100] pr-4">
      <Link className="logo w-[10%]" to="/">
        <img src="Image/LOGO.png" alt="logo" />
      </Link>

      <nav className="flex gap-8">
        <div className="flex gap-4 justify-center items-center">
          <Link className="text-[20px] font-bold hover:text-[#f56642]" to="/">
            Home
          </Link>
          <Link className="text-[20px] font-bold hover:text-[#f56642]" to="/about">
            About
          </Link>
          <Link className="text-[20px] font-bold hover:text-[#f56642]" to="/services">
            Services
          </Link>
          <Link className="text-[20px] font-bold hover:text-[#f56642]" to="/contactus">
            Contact Us
          </Link>
          {user && (
            <Link className="text-[20px] font-bold hover:text-[#f56642]" to="/appointment">
              Appointment
            </Link>
          )}
        </div>
        {!user ? (
          <Link className="w-[120px]" to="/login">
            <button className="btn">Login</button>
          </Link>
        ) : (
          <div className="w-[120px]">
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </nav>
    </header>
  );
}
