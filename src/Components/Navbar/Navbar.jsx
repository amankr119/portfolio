import React, { useState } from "react";
import { Link } from "react-router-dom";
import brand_logo from "../../Assest/Aman.png";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  // function for download Resume 
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1-RxKPn8w8oxIBBAUDvb3DE5O_EfbYrce/view?usp=drive_link";
    link.download = "Aman_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid text-light fw-bold">
        {/* Brand */}
        <button className="btn navbar-brand" onClick={toggleDisplay}>
          <img
            src={brand_logo}
            alt="Brand Logo"
            className="rounded"
            style={{ height: "42px", width: "auto" }}
          />
          {display && (
            <div
              className="position-absolute bg-light rounded shadow-lg p-1 mt-1"
              style={{ zIndex: 1050, width: "240px" }}
            >
              <ul
                className="list-group d-flex flex-column p-0 m-0"
                style={{ fontSize: "10px" }}
              >
                <li
                  className="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  Aman Kumar
                </li>
                <li className="list-group-item list-group-item-action">
                  amankumargupta8252@gmail.com
                </li>
                <li className="list-group-item list-group-item-action">
                  04 Feb 1998
                </li>
                <li className="list-group-item list-group-item-action">
                  9304738197
                </li>
              </ul>
            </div>
          )}
        </button>

        {/* Toggler for Collapsing Navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Links */}
        <div className="collapse navbar-collapse rounded" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto mx-2 rounded" style={{ background: "#a6c4d47e" }}>
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link custom-hover-effect">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className="nav-link custom-hover-effect">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/portfolio" className="nav-link custom-hover-effect">
                Portfolio
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contact" className="nav-link custom-hover-effect">
                Contact
              </Link>
            </li>
          </ul>

          <button className="btn btn-outline-light mx-2 my-2" onClick={handleDownload}>Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
