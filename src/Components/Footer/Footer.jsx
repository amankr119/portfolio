import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-black p-3 " style={{top:"300px"}}>
      <div className="d-flex justify-content-center align-items-center p-3">
        <a
          href="https://www.linkedin.com/in/amankr119/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 button-hover-effect"
        >
          <i className="fa-brands fa-linkedin fa-2x text-primary"></i>
        </a>
        <a
          href="https://www.facebook.com/amankr119/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 button-hover-effect"
        >
          <i className="fa-brands fa-square-facebook fa-2x text-primary"></i>
        </a>
        <a
          href="https://www.twitter.com/amankr119/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 button-hover-effect"
        >
          <i className="fa-brands fa-square-twitter fa-2x text-info"></i>
        </a>
        <a
          href="https://www.instagram.com/its_kr_aman119"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 button-hover-effect"
        >
          <i className="fa-brands fa-square-instagram fa-2x text-danger"></i>
        </a>
      </div>
      <div className="text-center text-light p-2">
        <p>© 2025 Aman Kumar. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
