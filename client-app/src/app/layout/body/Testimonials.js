import React from 'react';

export const Testimonials = () => {
  return (
    <section class="testimonial">
      <div class="testimonial-overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-12 wow bounceInDown">
              <div
                id="carousel-testimonial"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel-testimonial"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carousel-testimonial"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carousel-testimonial"
                    data-slide-to="2"
                  ></li>
                </ol>

                <div class="carousel-inner">
                  <div class="item active text-center">
                    <img
                      src="images/client-01.jpg"
                      alt="testimonial"
                      class="center-block"
                    />

                    <div class="testimonial-caption">
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

                  <div class="item text-center">
                    <img
                      src="images/client-02.jpg"
                      alt="testimonial"
                      class="center-block"
                    />

                    <div class="testimonial-caption">
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

                  <div class="item text-center">
                    <img
                      src="images/client-03.jpg"
                      alt="testimonial"
                      class="center-block"
                    />

                    <div class="testimonial-caption">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
