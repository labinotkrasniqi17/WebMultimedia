import React from 'react';

export const Download = () => {
  return (
    <section className="download-now" id="DOWNLOAD">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="section-title">
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

      <div className="container">
        <div className="row">
          <div
            className="col-md-8 col-md-offset-2 wow fadeInUp"
            data-wow-duration="1s"
          >
            <img
              className="img-responsive"
              src="images/download-screen.png"
              alt="download screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
