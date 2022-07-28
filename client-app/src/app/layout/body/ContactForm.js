import React, { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  message: "",
  subject: "",
};

export const ContactForm = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = values;
    if (!email || !name || !subject || !message) {
      alert("Please fill data");
      window.location.reload();
      return;
    } else {
      const contact = { name, email, subject, message };
      axios
        .post("http://localhost:5000/api/contact/send", contact)
        .then(alert("Message was sent successfuly!"));
      window.location.reload();
    }
  };

  return (
    <section className="contact-us" id="CONTACT">
      <div className="container wow bounceIn">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="section-title">
              <h2>Contact Us</h2>
              <p>
                Nulla blandit sem sed neque pretium mattis. Etiam consectetur
                eleifend felis porttitor porttitor. Phasellus sit amet augue
                fringilla, fringilla lectus at, tincidunt ante.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us-form wow bounceIn">
        <div className="container">
          <form className="form" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-4">
                <input
                  value={values.name}
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                />
                <input
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
                <input
                  value={values.subject}
                  onChange={handleChange}
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>

              <div className="col-md-8">
                <textarea
                  value={values.message}
                  onChange={handleChange}
                  className="form-control"
                  name="message"
                  id="message"
                  rows="25"
                  cols="10"
                  placeholder="Message Text...."
                ></textarea>

                <button
                  style={{ margin: 0 }}
                  type="submit"
                  className="btn btn-default submit-btn form_submit"
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 wow bounceInLeft">
            <div className="social-icons">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
