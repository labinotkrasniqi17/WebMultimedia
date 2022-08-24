import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

export const Testimonials = () => {
  return (
    <>
      <section className="testimonial">
        <div className="testimonial-overlay">
          <div className="container">
            <div className="row">
              <Carousel showArrows={false} itemsToShow={1} autoPlaySpeed={4000} enableAutoPlay={true} enableSwipe={true}>
                <Item>
                  <div className="item active text-center">
                    <img
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "100%",
                        border: "5px solid #129CF3",
                      }}
                      src="images/client-01.jpg"
                      alt="testimonial"
                      className="center-block"
                    />

                    <div className="testimonial-caption">
                      <h2>Bill Geci</h2>
                      <h4>
                        <span> Sr. Software Engineer, </span>Microsoft
                      </h4>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.”
                      </p>
                    </div>
                  </div>
                </Item>
                <Item>
                  <div className="item text-center">
                    <img
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "100%",
                        border: "5px solid #129CF3",
                      }}
                      src="images/client-02.jpg"
                      alt="testimonial"
                      className="center-block"
                    />

                    <div className="testimonial-caption">
                      <h2>Elon Muski</h2>
                      <h4>
                        <span> Manager, </span>Tesla
                      </h4>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.”
                      </p>
                    </div>
                  </div>
                </Item>
                <Item>
                  <div className="item text-center">
                    <img
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "100%",
                        border: "5px solid #129CF3",
                      }}
                      src="images/client-03.jpg"
                      alt="testimonial"
                      className="center-block"
                    />

                    <div className="testimonial-caption">
                      <h2>Joshi Bajra</h2>
                      <h4>
                        <span> Assistan Manager, </span>Amazon
                      </h4>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.”
                      </p>
                    </div>
                  </div>
                </Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
