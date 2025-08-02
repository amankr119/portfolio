import React, { useEffect, useState, useContext } from "react";
import "./HomePage.css";
import { RouteProtectionContext } from "../Context/RouteProtectionContext";
import aman_photo from "../../Assest/aman-brand.jpeg";
import portfolio from "../../Data/Data.json";
import skill from "../../Data/Data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const { markAsVisited } = useContext(RouteProtectionContext);

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
  }, [currentRole, roles.length]);

  useEffect(() => {
    markAsVisited();
  }, [markAsVisited]);

  return (
    <div className="container-fluid home-page d-flex flex-column align-items-center">
      {/* HERO SECTION */}
      <div className="row align-items-center hero-section mb-5 w-100">
        <div className="col-md-6 text-section text-center text-md-start">
          <h1 className="animated-title hi-title">
            Hi, I'm <span className="text-dark">Aman Kumar</span>
          </h1>
          <p className="fs-5 intro fade-slide-up text-black">
            Software Engineer - MERN Stack Developer
          </p>
          <p className={`fs-5 text-black fw-bold role-text ${fade ? "fade-in" : ""}`}>
            {roles[currentRole]}
          </p>
          <Link
            to="/contact"
            className="btn btn-lg btn-primary mt-3 shadow-sm animate-bounce"
          >
            Hire Me!
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center image-container">
          <div className="profile-img-wrapper mt-4">
            <img
              src={aman_photo}
              alt="Aman"
              className="img-fluid rounded-circle pulse-animation profile-img"
            />
          </div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="row skills-section py-4 w-100 justify-content-center">
        <div className="col-md-10 rounded shadow p-4 skills-bg">
          <h3 className="text-center mb-4 text-light">Skills</h3>
          <div className="row">
            {skill.skill.map((item, idx) => (
              <div className="col-sm-6 mb-4 fade-slide-left" key={idx}>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold text-dark">{item.name}</span>
                  <span className="text-muted">{item.value}%</span>
                </div>
                <div className="progress custom-progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated custom-progress-bar"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PORTFOLIO SECTION */}
      <div className="row portfolio-section py-5 w-100 justify-content-center">
        <div className="col-md-10">
          <h3 className="text-center text-light mb-4">Projects</h3>
          <div
            id="portfolioCarousel"
            className="carousel slide fade-in custom-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner shadow">
              {portfolio.portfolios.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="card p-4 border-0 bg-white zoom-in custom-card">
                    <h4 className="card-title text-center text-gradient">
                      {item.title}
                    </h4>
                    <p className="card-text text-center text-secondary">{item.description}</p>
                    <div className="text-center">
                      <a
                        href={item.link}
                        className="btn btn-outline-success btn-sm px-4 custom-visit-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit
                      </a>
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
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#portfolioCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;