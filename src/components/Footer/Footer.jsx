import React from "react";
import {
  TfiFacebook,
  TfiGithub,
  TfiInstagram,
  TfiLinkedin,
  TfiPinterest,
  TfiTwitter,
} from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <p className="mb-0">&copy; Copyright {new Date().getFullYear()}</p>
        <div className="social-links text-right m-auto ml-sm-auto">
          <Link
            to="https://github.com/shamsulhuda"
            target="blank"
            className="link"
          >
            <TfiGithub></TfiGithub>
          </Link>
          <Link
            to="https://www.linkedin.com/in/shamsul-huda99/"
            target="blank"
            className="link"
          >
            <TfiLinkedin></TfiLinkedin>
          </Link>
          <Link
            to="https://www.facebook.com/shamsulhuda.cse/"
            target="blank"
            className="link"
          >
            <TfiFacebook></TfiFacebook>
          </Link>
          <Link
            to="https://twitter.com/m_shamsulhuda"
            target="blank"
            className="link"
          >
            <TfiTwitter></TfiTwitter>
          </Link>
          <Link
            to="https://www.pinterest.com/Engr_shamsul_huda/"
            className="link"
          >
            <TfiPinterest></TfiPinterest>
          </Link>
          <Link to="https://www.instagram.com/developer_huda/" className="link">
            <TfiInstagram></TfiInstagram>
          </Link>
        </div>
      </footer>
    </div>
  );
}
