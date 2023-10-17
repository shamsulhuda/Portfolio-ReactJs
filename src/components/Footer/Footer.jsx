import React from "react";
import { Link } from "react-router-dom";

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
            <i className="ti-facebook"></i>
          </Link>
          <Link to="#!" className="link">
            <i className="ti-twitter-alt"></i>
          </Link>
          <Link to="#!" className="link">
            <i className="ti-google"></i>
          </Link>
          <Link to="#!" className="link">
            <i className="ti-pinterest-alt"></i>
          </Link>
          <Link to="#!" className="link">
            <i className="ti-instagram"></i>
          </Link>
          <Link to="#!" className="link">
            <i className="ti-rss"></i>
          </Link>
        </div>
      </footer>
    </div>
  );
}
