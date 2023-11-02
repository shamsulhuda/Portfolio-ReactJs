import React from "react";

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>
        <div className="row">
          <div className="col-md-4">
            <a
              href="https://mprtools.com"
              className="portfolio-card"
              target="blank"
            >
              <img
                src="assets/imgs/port-mprtools.png"
                className="portfolio-card-img img-responsive rounded"
                alt="Shamsul Huda - Shopify theme Developer"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Fixing Bug</h4>
                  <p className="font-weight-normal">Category: Bug Fixing</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://kitbox.co"
              className="portfolio-card"
              target="blank"
            >
              <img
                className="portfolio-card-img img-responsive rounded"
                src="assets/imgs/port-kitbox.png"
                alt="Shamsul Huda - Shopify theme Developer"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>App Integration</h4>
                  <p className="font-weight-normal">
                    Category: App Integration
                  </p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.madebymary.com/"
              className="portfolio-card"
              target="blank"
            >
              <img
                className="portfolio-card-img img-responsive rounded"
                src="assets/imgs/port-madebymary.png"
                alt="Shopify theme developer"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Development</h4>
                  <p className="font-weight-normal">Category: Development</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4 mt-5">
            <a
              href="https://evatac.com.au/"
              className="portfolio-card"
              target="blank"
            >
              <img
                className="portfolio-card-img img-responsive rounded"
                src="assets/imgs/port-evatac.png"
                alt="Shopify theme developer"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Fixing Bug</h4>
                  <p className="font-weight-normal">Category: Bug Fixing</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4 mt-5">
            <a
              href="https://www.healthycell.com/"
              className="portfolio-card"
              target="blank"
            >
              <img
                className="portfolio-card-img img-responsive rounded"
                src="assets/imgs/port-healthycell.png"
                alt="Shopify theme developer"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Development</h4>
                  <p className="font-weight-normal">Category: Development</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4 mt-5">
            <a
              href="https://www.senitaathletics.com/"
              className="portfolio-card"
              target="blank"
            >
              <img
                className="portfolio-card-img img-responsive rounded"
                src="assets/imgs/port-senita.png"
                alt="Shopify theme developer"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Development</h4>
                  <p className="font-weight-normal">Category: Development</p>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
