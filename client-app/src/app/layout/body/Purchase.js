import React from 'react';

export const Purchase = () => {
  return (
    <section className="purchase-now">
      <div className="container">
        <div className="row wow fadeInLeftBig" data-wow-duration="1s">
          <div className="col-md-9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et olore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </p>
          </div>

          <div className="col-md-3">
            <a className="btn btn-primary btn-pruchase-now" href="#">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
