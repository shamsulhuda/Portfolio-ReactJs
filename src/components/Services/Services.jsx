import React from "react";

export default function Services() {
  return (
    <div className="section" id="service">
      <div className="container text-center">
        <p className="section-subtitle">What I Do ?</p>
        <h6 className="section-title mb-6">Service</h6>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="body">
                <img
                  src="assets/imgs/pencil-case.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">Development</h6>
                <p className="subtitle">
                  Where we specialize in crafting custom, high-performance
                  themes that elevate your online business to new heights.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="body">
                <img
                  src="assets/imgs/responsive.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">Design</h6>
                <p className="subtitle">
                  We prioritize responsive design to ensure your store looks and
                  works flawlessly on all devices, providing an exceptional user
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="body">
                <img
                  src="assets/imgs/toolbox.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">Bug Fixing</h6>
                <p className="subtitle">
                  We specialize in diagnosing and resolving a wide range of
                  issues, ensuring that your online business runs smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="body">
                <img
                  src="assets/imgs/analytics.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">App integration</h6>
                <p className="subtitle">
                  We have a deep understanding of the Shopify ecosystem and have
                  extensive experience in integrating apps to enhance your
                  store&apos;s performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
