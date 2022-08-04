import React from 'react';

export const Features = () => {
  return (
    <section class="features" id="FEATURES">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <div class="section-title wow fadeIn" data-wow-duration="1s">
              <h2> Features </h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="features-inner-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-4 wow fadeInLeft" data-wow-duration="1s">
              <div class="left-feature-item">
                <div class="left-feature-item-icon">
                  <i class="fa fa-desktop"></i>
                </div>

                <h3> RETINA READY </h3>
                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>

              <div class="left-feature-item">
                <div class="left-feature-item-icon">
                  <i class="fa fa-mobile"></i>
                </div>

                <h3> MOBILE READY </h3>
                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>

              <div class="left-feature-item">
                <div class="left-feature-item-icon">
                  <i class="fa fa-eye"></i>
                </div>

                <h3> EASY LAYOUT</h3>
                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="feature-iphone">
                <img
                  class="wow bounceIn img-responsive"
                  data-wow-duration="1s"
                  src="images/iphone-02.png"
                  alt="feature iphone"
                />
              </div>
            </div>

            <div class="col-md-4 wow fadeInRight" data-wow-duration="1s">
              <div class="right-feature-item">
                <div class="right-feature-item-icon">
                  <i class="fa fa-certificate"></i>
                </div>

                <h3> CERTIFIED SOLUTION</h3>

                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>

              <div class="right-feature-item">
                <div class="right-feature-item-icon">
                  <i class="fa fa-rss"></i>
                </div>

                <h3> CONSTANT FEED</h3>

                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>

              <div class="right-feature-item">
                <div class="right-feature-item-icon">
                  <i class="fa fa-database"></i>
                </div>

                <h3> SECURE DATA</h3>

                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
