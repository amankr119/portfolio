import React from "react";

import portfolio from "../../Data/Data.json";

import "./Portfolio.css";

import background from "../../Assest/background.jpg";

const Portfolio = () => {
  const paragraphText = `Here are some of the projects I've worked on, showcasing my expertise
          in ReactJS, HTML, CSS, Bootstrap, Tailwind CSS, Node.js, and RESTful
          APIs. Each project reflects my problem-solving skills, attention to
          detail, and ability to build scalable applications.`;

  return (
    <div
      className="portfolio container-fluid p-3"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >
      <p className="fs-3 fw-bold text-center text-danger font-verdana p-2">
        PORTFOLIO
      </p>
      <div className="fs-5 text-center text-black mb-3 shadow-sm rounded">
        <p
          className="text-start font-verdana p-2"
          style={{ fontSize: "1.0rem" }}
        >
          {paragraphText}
        </p>
      </div>
      <div className="row">
        {portfolio.portfolios.map((items, index) => (
          <div className="col-md-4">
            <div className="card-effect card-body text-center mb-3 p-1 shadow-sm rounded opacity-75">
              <div
                className="card shadow-sm p-3 shadow-lg"
                key={index}
                style={{ height: "300px" }}
              >
                <p
                  className="card-title fw-bold fs-4 p-2 text-black shadow-sm rounded"
                  style={{ background: "#a6c4d47e" }}
                >
                  {items.title}
                </p>
                <p className="card-text text-start text-black">
                  {items.description}
                </p>
                <a
                  href={items.link}
                  target="_blank"
                  className="btn btn-outline-success text-danger fw-bold btn-sm w-50 align-self-center rounded mt-auto"
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
