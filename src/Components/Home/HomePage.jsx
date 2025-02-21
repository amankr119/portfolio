import React, { useEffect, useState } from "react";
import "./HomePage.css";

import aman_photo from "../../Assest/aman-brand.jpeg";
import portfolio from "../../Data/Data.json";

import skill from "../../Data/Data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const roles = ["FrontEnd Developer", "Web Developer", "Full Stack developer"];

  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRole((currentRole + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentRole]);

  return (
    <div className="container-fluid home-page">
      <div className="row p-4">
        <div className="col-md-6 order-2 order-md-1 text-black p-2 rounded">
          <h1>
            Welcome to My <span className="text-danger">Portfolio</span>
          </h1>
          <p className="fw-bold fs-5">Hi, This is</p>
          <p className="fw-bold fs-5">Aman Kumar, a Software Engineer</p>
          <p
            className={`fw-bold rounded text-danger fs-5 ${
              fade ? "fade-in" : ""
            }`}
          >
            {roles[currentRole]}
          </p>
          <Link className="btn btn-danger" to="/contact">Hire Me!</Link>
        </div>
        <div className="col-md-6 d-flex order-1 order-md-2 justify-content-center">
          <div className="align-items-center border-2 rounded-circle shadow-lg p-1">
            <img
              style={{ height: "350px", width: "350px" }}
              src={aman_photo}
              className="img-fluid rounded-circle"
              alt="Aman"
            />
          </div>
        </div>        
      </div>

      <div className="row p-4">
        <div className="col-md-4 order-4 order-md-4 text-light">
          <span className=" fs-5 text-black font-verdana fw-bold bg-secondary p-1 rounded">SKILLS</span>
          <div className="skills progress-wrapper  my-2 p-3 rounded">
            <div className="progress-box">
              {skill.skill.map((items, index) => (
                <div className="progress-item" key={index}>
                  <div className="d-flex align-items-start">
                    <p className="fs-5 text-dark">{items.name}</p>
                  </div>
                  <div className="progress mb-3" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${items.value}%` }}
                      aria-valuenow={items.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
          
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      <div className=" col-md-8 d-flex justify-content-center align-items-center order-3 order-md-3 my-2">
        {/* Responsive Carousel */}
        <div
          id="portfolioCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {portfolio.portfolios.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#portfolioCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {portfolio.portfolios.map((items, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                      <div className="card bg-transparent shadow-lg">
                        <div className="card-body align-items-center text-center shadow-lg">
                          <p className="card-title fw-bold fs-4 text-black bg-light rounded">
                            {items.title}
                          </p>
                          <p className="card-text text-black">
                            {items.description}
                          </p>
                          <a
                            href="#"
                            className="btn btn-outline-info text-danger fw-bold btn-sm w-50 rounded shadow-sm"
                          >
                            Visit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
