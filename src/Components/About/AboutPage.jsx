import React from "react";
import "./AboutPage.css";

import data from "../../Data/Data.json";

import project from "../../Data/Data.json";

function AboutPage() {
  return (
    <div className="container-fluid p-3" style={{ background: "#edfdfd" }}>
      <p className="fs-3 fw-bold text-danger fw-bolder text-center p-2">
        ABOUT ME
      </p>
      <div className="row text-light mt-1">
        <div className="col-md-6 text-black p-3">
          <p
            className="hover-effect p-2 text-start"
            style={{ fontFamily: "verdana" }}
          >
            I am Aman kumar. A professional Front-End Developer and MERN Stack
            Developer with over 3 years of expertise in ReactJS, JavaScript,
            jQuery, HTML, CSS, Bootstrap, JSON Server, and RESTful Web Services.
            In addition, I am an experienced Technical Content Developer,
            skilled in creating detailed tutorials, articles, and API references
            on various technologies.
          </p>
        </div>
        <div className="col-md-6 mt-1">
          <div className="education-sec p-3 shadow-sm timeline rounded" style={{background: "#a6c4d47e"}}>
            <div className="graduation-details">
              <p className="fs-5 fw-bold text-black">
                {" "}
                <i class="fa-solid fa-graduation-cap"></i> B.Tech (CSE){" "}
              </p>
              <p className="fs-6 text-black fw-bold ">
                Lovely Professional University | <span>CGPA: 7.65</span>{" "}
              </p>
              <p className="text-success">2018-2022 </p>
            </div>
            <div className="college-details">
              <p className="fs-5 fw-bold text-black">
                {" "}
                <i class="fa-sharp fa-solid fa-building-columns"></i> Senior
                Secondary (PCM){" "}
              </p>
              <p className="fs-6 text-black fw-bold ">
                MK Inter College Panki | <span>Percentage: 74.3%</span>
              </p>
              <p className="text-success">2018</p>
            </div>
            <div className="school-details">
              <p className="fs-5 fw-bold text-black">
                {" "}
                <i class="fa-solid fa-school"></i> Secondary
              </p>
              <p className="fs-6 text-black fw-bold ">
                RK +2 High School Panki | <span>Percentage: 79%</span>
              </p>
              <p className="text-success">2015</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-md-6 p-3">
          <p
            className="fs-4 fw-bols text-center p-2"
            style={{ fontFamily: "verdana" }}
          >
            Professional Experience
          </p>
          {data.experience.map((exp, index) => (
            <div
              key={index}
              className="exp_timeline shadow-sm p-3 mb-3 text-black rounded" style={{background: "#a6c4d47e"}}
            >
              <p className="fw-bold fs-5">
                {exp.title} @{" "}
                <span className="fw-light text-secondary fs-6">
                  {exp.company}
                </span>
              </p>
              <p className="fw-light">
                <i class="fa-solid fa-location-dot"></i> {exp.location}
              </p>
              <p className="mb-1 text-secondary">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className=" mt-2 hover-effect">
                {exp.description1 || exp.description}
              </p>
              {exp.description2 && (
                <p className="mb-1 hover-effect">{exp.description2}</p>
              )}
            </div>
          ))}
        </div>
        <div className="col-md-6 p-3">
          <p
            className="fs-4 fw-bols text-center p-2"
            style={{ fontFamily: "verdana" }}
          >
            Projects
          </p>
          {project.projects.map((project, index) => (
            <div
              key={index}
              className="proj_timeline shadow-sm p-3 mb-3 rounded" style={{background: "#a6c4d47e"}} 
            >
              <p className="fw-bold fs-5">{project.title}</p>
              <p className="mt-2 hover-effect">{project.description}</p>
              <p className="mb-1">Techstack: <span className="text-secondary">{project.techStack}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
