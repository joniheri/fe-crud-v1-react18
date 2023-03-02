import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#42639E" }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="offcanvasExample"
        >
          <span
            className="navbar-toggler-icon"
            data-bs-target="#sidebar"
          ></span>
        </button>
        <Link
          className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
          to="/"
        >
          CRUD React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="topNavBar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/datadammy">
                Data Dummy
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ms-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="ms-2">Hello, User</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i
                      className="fal fa-user-cog"
                      style={{ marginRight: "10px" }}
                    ></i>
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i
                      className="fal fa-tools"
                      style={{ marginRight: "10px" }}
                    ></i>
                    <span>Settings</span>
                  </a>
                </li>
                <hr className="dropdown-divider bg-dark" />
                <li>
                  <a className="dropdown-item" href="/auth/processlogout">
                    <i
                      className="fal fa-sign-out-alt"
                      style={{ marginRight: "10px" }}
                    ></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
