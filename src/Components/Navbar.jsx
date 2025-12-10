import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="#">
            <img
              src="https://plus.unsplash.com/premium_photo-1681433426886-3d6d17f79d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nbyUyMGZvciUyMHRyYXZlbCUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
              alt="logo"
              style={{ width: "100px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="destinations">
                Destinations
              </a>
              <a className="nav-link" href="travelpackages">
                Travel Packages
              </a>
              <a className="nav-link" href="aboutus">
                About Us
              </a>

           

              <a className="nav-link" href="gallery">
                Gallery
              </a>

              <a className="nav-link" href="contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
