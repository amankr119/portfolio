import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_shmm7qk", "template_w2qxah1", form.current, {
        publicKey: "WO7jcj71UBPpVhj4P"
      })
      .then(
        () => {
          showAlert("Email Sent Successfully!", "success");
          form.current.reset();
        },
        () => {
          showAlert("Failed to send email. Please try again.", "danger");
        }
      );
  };

  return (
    <div className="container-fluid p-3" style={{background: "#edfdfd"}}>
      {alert && (
        <div className={`alert alert-${alert.type} text-center`} role="alert">
          {alert.msg}
        </div>
      )}

      <div className=" p-2 mb-3 bg-transparent rounded">
        <p className=" text-center text-danger fw-bolder fs-3 rounded">
          GET IN TOUCH
        </p>
      </div>

      <div className="row">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center rounded py-2">
            <a
              href="https://www.linkedin.com/in/amankr119/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 button-hover-effect"
            >
              <i className="fa-brands fa-linkedin fa-3x text-primary"></i>
            </a>
            <a
              href="https://www.facebook.com/amankr119/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 button-hover-effect"
            >
              <i className="fa-brands fa-square-facebook fa-3x text-primary"></i>
            </a>
            <a
              href="https://www.twitter.com/amankr119/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 button-hover-effect"
            >
              <i className="fa-brands fa-square-twitter fa-3x text-info"></i>
            </a>
            <a
              href="https://www.instagram.com/its_kr_aman119"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 button-hover-effect"
            >
              <i className="fa-brands fa-square-instagram fa-3x text-danger"></i>
            </a>
          </div>
        </div>

        <div className="col-md-6 text-black fw-bold p-3 rounded">
          <form ref={form} onSubmit={sendEmail}>
            <div className="p-2 rounded-top shadow-lg mt-2 opacity-75" style={{background: "#a6c4d47e"}}>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="user_name"
                placeholder="Enter your name"
              />
            </div>
            <div className="p-2 shadow-lg opacity-75" style={{background: "#a6c4d47e"}}>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="user_email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2 rounded-bottom p-2 shadow-lg opacity-75" style={{background: "#a6c4d47e"}}>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-6 text-black p-3 rounded mt-2" >
          <p className="fs-4 fw-bold">
            <i class="fa-solid fa-location-dot"></i> Address
          </p>
          <p>500081, Hyderabad, India</p>
          <p>Madhapur</p>
          <p className="fs-4 fw-bold">
            <i class="fa-solid fa-envelope"></i> Email
          </p>
          <p>amankumargupta8252@gmail.com</p>
          <p className="fs-4 fw-bold">
            <i class="fa-solid fa-mobile"></i> Phone
          </p>
          <p>9304738197</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
