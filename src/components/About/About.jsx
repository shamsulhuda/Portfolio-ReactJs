import React from "react";

export default function About() {
  return (
    <div className="section pt-0" id="about">
      <div className="container text-center">
        <div className="about">
          <div className="about-img-holder">
            <img
              src="assets/imgs/shamsul-huda.png"
              className="about-img"
              alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
            />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p>
              A professional passionate Shopify theme developer with a flair for
              turning creative designs into pixel-perfect, high-performance
              e-commerce websites. With a deep appreciation for the art of web
              development and a commitment to staying at the forefront of
              industry trends, I bring a unique set of skills to the table that
              can transform your online presence.
              <br />
              <br />
              I&apos;ve dedicated myself to mastering the intricacies of the
              Shopify platform. From liquid coding to app integration, I&apos;m
              well-versed in the tools and technologies that can make your
              e-commerce venture a success.
            </p>
            <button className="btn-rounded btn btn-outline-primary mt-4">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
