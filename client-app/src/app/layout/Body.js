import React from 'react';

export const Body = () => {
  return (
    <section id="ABOUT">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <div class="section-title">
              <h2> About Us </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent rhoncus ultricies nibh, vitae sodales purus. Aenean
                volutpat ullamcorper cursus. Duis tristique sit amet augue ac
                vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="choose-us-wraper">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div
                class="about-iphone wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <img
                  class="img-responsive"
                  src="images/about-iphone.png"
                  alt="iphone"
                />
              </div>
            </div>

            <div
              class="col-md-6 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div class="choose-us-title">
                <h2> Why Choose Us?</h2>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Quisque lacus dui, interdum sit amet
                  varius.
                </p>
              </div>

              <div class="choose-us-des">
                <div
                  class="choose-us-item wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="1s"
                >
                  <div>
                    <i class="fa fa-bolt"></i>
                  </div>

                  <h3>QUISQUE LACUS DUI</h3>
                  <p>
                    Lipsum Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Quisque lacus dui, interdum
                    sit amet varius a, cursus sit amet sapien. Donec eu placerat
                    nisi.
                  </p>
                </div>

                <div
                  class="choose-us-item wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="1s"
                >
                  <div>
                    <i class="fa fa-bullhorn"></i>
                  </div>

                  <h3>DONEC EU PLACERAT NISI</h3>
                  <p>
                    Diso Lipsum Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Quisque lacus
                    dui, interdum sit amet varius a, cursus sit amet sapien.
                    Donec eu placerat nisi.
                  </p>
                </div>

                <div
                  class="choose-us-item wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="1s"
                >
                  <div>
                    <i class="fa fa-flag-o"></i>
                  </div>

                  <h3>PERSPICIATIS UNDE OMNIS</h3>
                  <p>
                    Sed ut perspiciatis Cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.unde omnis
                    iste natus error sit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
