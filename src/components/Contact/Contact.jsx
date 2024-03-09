import emailjs from "@emailjs/browser";
import React, { useState } from "react";

export default function Contact() {
  const [confirm, setConfirm] = useState(false);
  const serviceKey = process.env.EMAILJS_SERVICE_KEY;
  const templateKey = process.env.EMAILJS_TEMPLATE_KEY;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const message = document.getElementById("confirmation");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceKey, templateKey, e.target, publicKey).then(
      (result) => {
        console.log(result.text);
        message.innerHTML = `<p>Email has been sent successfully!</p>`;
        setConfirm(true);
      },
      (error) => {
        console.log(error.text);
        message.innerHTML = `<p>Opps! Something is wrong!</p>`;
        setConfirm(false);
      }
    );
  };

  const messageClass = confirm ? "message show" : "message d-none";

  return (
    <>
      <section className="section" id="contact">
        <div className="container text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title mb-5">Contact Me</h6>
          <div id="confirmation" className={messageClass}></div>
          <form
            onSubmit={sendEmail}
            className="contact-form col-md-10 col-lg-8 m-auto"
          >
            <div className="form-row">
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  name="user_name"
                  size="50"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-sm-6">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group col-sm-12">
                <textarea
                  name="message"
                  id="comment"
                  rows="6"
                  className="form-control"
                  placeholder="Write Something"
                ></textarea>
              </div>
              <div className="form-group col-sm-12 mt-3">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-outline-primary rounded"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
