import React from 'react';

export const Available = () => {
  return (
    <section className="available-on">
      <div className="container wow bounceInRight" data-wow-duration="1s">
        <div className="row">
          <div className="col-md-6">
            <div className="available-title">
              <h2>Available On </h2>

              <p>
                Vestibulum congue eros ac neque dignissim, vel imperdiet neque
                consectetur. Maecenas condimentum cursus maximus. Praesent eu
                diam efficitur
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <a href="#">
                <div className="col-md-4 no-padding">
                  <div className="available-on-item">
                    <i className="fab fa-apple"></i>
                    <div className="available-on-inner">
                      <h2> iOS</h2>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#">
                <div className="col-md-4 no-padding">
                  <div className="available-on-item">
                    <i className="fab fa-android"></i>
                    <div className="available-on-inner">
                      <h2> ANDROID</h2>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#">
                <div className="col-md-4 no-padding">
                  <div className="available-on-item">
                    <i className="fab fa-windows"></i>
                    <div className="available-on-inner">
                      <h2> WINDOWS</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
