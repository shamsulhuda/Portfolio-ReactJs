import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = scrolled ? "custom-navbar affix" : "custom-navbar";

  document.querySelector(".nav .link")?.addEventListener("click", (event) => {
    if (this.hash !== "") {
      event.preventDefault();
      console.log("---", this.hash);
    }
  });

  const handleClick = (event) => {
    event.currentTarget.classList.toggle("is-active");
    document.querySelector("ul.nav").classList.toggle("show");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={headerClass} data-spy="affix" data-offset-top="20">
        <div className="container">
          <Link to="/" className="logo">
            Portfolio
          </Link>
          <ul className="nav">
            <li className="item">
              <Link onClick={() => scrollToSection("about")} className="link">
                About
              </Link>
            </li>
            <li className="item">
              <Link onClick={() => scrollToSection("service")} className="link">
                Services
              </Link>
            </li>
            <li className="item">
              <Link
                onClick={() => scrollToSection("portfolio")}
                className="link"
              >
                Portfolio
              </Link>
            </li>
            <li className="item">
              <Link
                onClick={() => scrollToSection("testmonial")}
                className="link"
              >
                Testmonial
              </Link>
            </li>
            <li className="item">
              <Link onClick={() => scrollToSection("contact")} className="link">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="https://www.upwork.com/freelancers/~013eddff08e4f509ad"
            className="btn btn-primary"
            target="_blank"
          >
            Hire Me
          </Link>
          <button
            id="nav-toggle"
            className="hamburger hamburger--elastic"
            onClick={handleClick}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </button>
        </div>
      </nav>
      <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Shamsul Huda</span>
          </h1>
          <p className="header-subtitle">SHOPIFY DEVELOPER & DESIGNER</p>

          <button className="btn btn-primary">Visit My Works</button>
        </div>
      </header>
    </>
  );
}
