import React from "react";
import {
  TfiFacebook,
  TfiGoogle,
  TfiInstagram,
  TfiPinterest,
  TfiRss,
  TfiTwitter,
} from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <p className="mb-0">
          Copyright {new Date().getFullYear()} &copy;
          <Link to="http://www.devcrud.com">DevCRUD</Link>
          <Link to="https://themewagon.com">ThemeWagon</Link>
        </p>
        <div className="social-links text-right m-auto ml-sm-auto">
          <Link to="#!" className="link">
            <TfiFacebook></TfiFacebook>
          </Link>
          <Link to="#!" className="link">
            <TfiTwitter></TfiTwitter>
          </Link>
          <Link to="#!" className="link">
            <TfiGoogle></TfiGoogle>
          </Link>
          <Link to="#!" className="link">
            <TfiPinterest></TfiPinterest>
          </Link>
          <Link to="#!" className="link">
            <TfiInstagram></TfiInstagram>
          </Link>
          <Link to="#!" className="link">
            <TfiRss></TfiRss>
          </Link>
        </div>
      </footer>
    </div>
  );
}
