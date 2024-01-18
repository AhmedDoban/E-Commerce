import React from "react";
import "./Contact.css";
import { useSelector } from "react-redux";

function Contact() {
  const User = useSelector((state) => state.User.user);

  return (
    <React.Fragment>
      <div className="Contact">
        <div className="container" data-aos="fade-up">
          <div className="head">
            <p>Contact</p>
            <h1>Enter your Issue</h1>
          </div>
          <div className="form-container">
            <div className="left">
              <input
                type="text"
                placeholder="First Name"
                value={User.FirstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={User.LastName}
              />
              <input type="email" placeholder="your Email" value={User.email} />
              <input
                type="tel"
                placeholder=" your Phone Number Is Required "
                value={User.Mobile}
              />
              <textarea placeholder="Enter Your Message here ..." />
              <input type="button" value="Submit" />
            </div>
            <div className="right">
              <img
                src={require("../../../../imgs/Delivery/contact.png")}
                alt="contact"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Contact;
