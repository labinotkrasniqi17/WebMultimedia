import React from 'react';

export const Available = () => {
  return (
    <section class="available-on">
      <div class="container wow bounceInRight" data-wow-duration="1s">
        <div class="row">
          <div class="col-md-6">
            <div class="available-title">
              <h2>Available On </h2>

              <p>
                Vestibulum congue eros ac neque dignissim, vel imperdiet neque
                consectetur. Maecenas condimentum cursus maximus. Praesent eu
                diam efficitur
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <a href="#">
                <div class="col-md-4 no-padding">
                  <div class="available-on-item">
                    <i class="fa fa-apple"></i>
                    <div class="available-on-inner">
                      <h2> iOS</h2>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col-md-4 no-padding">
                  <div class="available-on-item">
                    <i class="fa fa-android"></i>
                    <div class="available-on-inner">
                      <h2> ANDROID</h2>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col-md-4 no-padding">
                  <div class="available-on-item">
                    <i class="fa fa-windows"></i>
                    <div class="available-on-inner">
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
