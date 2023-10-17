import React from "react";
import { Outlet } from "react-router-dom";
import About from "../components/About/About";
import Banner from "../components/Banners/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Main() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
