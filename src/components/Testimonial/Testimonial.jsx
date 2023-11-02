import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonial() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="section" id="testmonial">
        <div className="container text-center">
          <p className="section-subtitle">What Think Client About Me ?</p>
          <h6 className="section-title mb-6">Testmonial</h6>
          <div className="custom-carousel-div">
            <Carousel responsive={responsive}>
              <div className="testimonial-card">
                <div className="testimonial-card-img-holder">
                  <img
                    src="/assets/imgs/client-joe-marcho.jpg"
                    className="testimonial-card-img"
                    alt="testimonial"
                  />
                </div>
                <div className="testimonial-card-body">
                  <p className="testimonial-card-subtitle">
                    I highly recommend this guy if you are looking for a
                    talented and reliable freelancer on Upwork. He has the
                    skills and experience you need to complete your project, and
                    he is always willing to go the extra mile.
                  </p>
                  <h6 className="testimonial-card-title">
                    Jose M. | Senior Staff Advisor
                  </h6>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-card-img-holder">
                  <img
                    src="/assets/imgs/avatar2.jpg"
                    className="testimonial-card-img"
                    alt="testimonial"
                  />
                </div>
                <div className="testimonial-card-body">
                  <p className="testimonial-card-subtitle">
                    We have been working with Shamsul for several months and
                    have used his expertise with web development, custom coding,
                    SEO, and design. Shamsul is an ultimate professional and
                    conducts himself as such.
                  </p>
                  <h6 className="testimonial-card-title">Richard Daniel</h6>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-card-img-holder">
                  <img
                    src="/assets/imgs/avatar3.png"
                    className="testimonial-card-img"
                    alt="testimonial"
                  />
                </div>
                <div className="testimonial-card-body">
                  <p className="testimonial-card-subtitle">
                    Shamsul is a true wizard! He worked his magic and helped me
                    recover my product page effortlessly. His skills are
                    impressive, and the job he did was simply amazing. Im
                    definitely going to hire him again in the near future.
                    Thanks, Nazmul!
                  </p>
                  <h6 className="testimonial-card-title">Viet Nguyen Dinh</h6>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
