import React from "react";

import portfolio from "../../Data/Data.json";

import "./Portfolio.css";

const Portfolio = () => {
  const paragraphText = `Here are some of the projects I've worked on, showcasing my expertise
          in ReactJS, HTML, CSS, Bootstrap, Tailwind CSS, Node.js, and RESTful
          APIs. Each project reflects my problem-solving skills, attention to
          detail, and ability to build scalable applications.`;

  return (
    <div className="portfolio container-fluid p-3">
      <p className="fs-3 fw-bold text-center text-white font-verdana p-2 portfolio-title">
        PORTFOLIO
      </p>
      <div className="fs-5 text-center mb-3 shadow-sm rounded">
        <p className="text-start font-verdana p-2 text-white">
          {paragraphText}
        </p>
      </div>
      <div className="row">
        {portfolio.portfolios.map((items, index) => (
          <div className="col-md-4" key={index}>
            <div className=" text-center mb-3 p-1 shadow-sm rounded opacity-75">
              <div
                className="card shadow-sm p-3 shadow-lg"
                style={{ height: "300px" }}
              >
                <p className="fw-bold fs-4 p-2 shadow-sm rounded ">
                  {items.title}
                </p>
                <p className="card-text text-start text-white">{items.description}</p>
                <a
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary fw-bold btn-sm w-50 align-self-center rounded mt-auto"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
