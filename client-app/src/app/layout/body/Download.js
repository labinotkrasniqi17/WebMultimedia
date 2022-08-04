import React from 'react';

export const Download = () => {
  return (
    <section class="download-now" id="DOWNLOAD">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <div class="section-title">
              <h2> Download Now </h2>
              <p>
                Vestibulum congue eros ac neque dignissim, vel imperdiet neque
                consectetur. Maecenas condimentum cursus maximus. Praesent eu
                diam efficitur
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div
            class="col-md-8 col-md-offset-2 wow fadeInUp"
            data-wow-duration="1s"
          >
            <img
              class="img-responsive"
              src="images/download-screen.png"
              alt="download screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
