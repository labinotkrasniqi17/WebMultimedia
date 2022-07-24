import React from 'react'

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
              </ul>
            </div>
          </div>
        </nav>

        <div class="header-overlay">
          <div class="container header-container">
            <div class="row">
              <div class="col-md-12">
                <div class="logo text-center">
                  <img src="images/logo.png" alt="logo" />
                </div>
              </div>
            </div>

            <div class="row">
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
  )
}
