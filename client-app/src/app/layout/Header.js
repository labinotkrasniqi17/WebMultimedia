import React from "react";

export const Header = () => {
  return (
    <div>
      <header class="header" id="HOME">
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#loso-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">
                <img src="images/logo-small.png" alt="logo" />
              </a>
            </div>

            <div class="collapse navbar-collapse" id="loso-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#HOME" class="nav-item">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#ABOUT" class="nav-item">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#FEATURES" class="nav-item">
                    FEATURES
                  </a>
                </li>
                <li>
                  <a href="#SCREENS" class="nav-item">
                    SCREENS
                  </a>
                </li>
                <li>
                  <a href="#DOWNLOAD" class="nav-item">
                    DOWNLOAD
                  </a>
                </li>
                <li>
                  <a href="#CONTACT" class="nav-item">
                    CONTACT
                  </a>
                </li>
                <li>
                  <button id="dark-mode" className="moon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-moon-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button id="light-mode" className="sun hide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-sun-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="header-overlay">
          <div class="container header-container">
            <div class="row" style={{ marginTop: "100px" }}>
              <div class="col-md-8">
                <div class="header-text">
                  <h1> A clean and modern looking reponsive website</h1>
                  <p> Built with great love!</p>
                </div>

                <div class="header-btns">
                  <a class="btn btn-download wow fadeInLeft" href="/">
                    Download
                  </a>
                  <a class="btn btn-tour wow fadeInRight" href="/">
                    {" "}
                    Take A Tour
                    <i class="fa fa-angle-down"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-3 col-md-offset-1">
                <div class="header-iphone">
                  <img src="images/iphone-header.png" alt="header iphone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
