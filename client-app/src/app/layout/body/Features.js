import React from 'react';

export const Features = () => {
  return (
    <section className="features" id="FEATURES">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="section-title wow fadeIn" data-wow-duration="1s">
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

      <div className="features-inner-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4 wow fadeInLeft" data-wow-duration="1s">
              <div className="left-feature-item">
                <div className="left-feature-item-icon">
                  <i className="fa fa-desktop"></i>
                </div>

                <h3> RETINA READY </h3>
                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>

              <div className="left-feature-item">
                <div className="left-feature-item-icon">
                  <i className="fa fa-mobile"></i>
                </div>

                <h3> MOBILE READY </h3>
                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>

              <div className="left-feature-item">
                <div className="left-feature-item-icon">
                  <i className="fa fa-eye"></i>
                </div>

                <h3> EASY LAYOUT</h3>
                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-iphone">
                <img
                  className="wow bounceIn img-responsive"
                  data-wow-duration="1s"
                  src="images/iphone-02.png"
                  alt="feature iphone"
                />
              </div>
            </div>

            <div className="col-md-4 wow fadeInRight" data-wow-duration="1s">
              <div className="right-feature-item">
                <div className="right-feature-item-icon">
                  <i className="fa fa-certificate"></i>
                </div>

                <h3> CERTIFIED SOLUTION</h3>

                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>

              <div className="right-feature-item">
                <div className="right-feature-item-icon">
                  <i className="fa fa-rss"></i>
                </div>

                <h3> CONSTANT FEED</h3>

                <p>
                  Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </div>

              <div className="right-feature-item">
                <div className="right-feature-item-icon">
                  <i className="fa fa-database"></i>
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
