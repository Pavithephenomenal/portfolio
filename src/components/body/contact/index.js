import React from "react";
import "./contact.css";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <lable className="section-title">Contact</lable>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch</p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            download
            href={require("../../../assets/Pavithra.L resume.pdf").default}
          >
            <i class="fi fi-rr-cloud-download"></i>Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
