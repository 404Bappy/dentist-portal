import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import teeth from "../../../assets/images/teeth.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const handleDoctorLogOut = () => {
    localStorage.removeItem("doctormail");
    navigate("/login");
    window.location.reload(true);
  };
  const menuItems = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>

      <li className="text-white">
        <Link to="/about">About</Link>
      </li>

      {localStorage.getItem("doctormail") && (
        <li className="text-white">
          <Link to="/doctor-dashboard">Dashboard</Link>
        </li>
      )}
      {localStorage.getItem("doctormail") && (
        <li className="text-white">
          <button onClick={handleDoctorLogOut}>Logout</button>
        </li>
      )}

      {user?.uid ? (
        <>
          <li className="text-white">
            <Link to="/appointment">Appointment</Link>
          </li>
          <li className="text-white">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="text-white">
            <button onClick={handleLogOut}>Sign Out</button>
          </li>
        </>
      ) : (
        <li className="text-white">
          <Link to="/login">
            {localStorage.getItem("doctormail") ? "" : "Login"}
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between bg-blue-500">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
          {" "}
          <img className="w-10 mr-2" src={teeth} alt="" /> Dentist Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
