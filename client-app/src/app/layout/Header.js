import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    const lightMode = document.getElementById("light-mode");
    const darkMode = document.getElementById("dark-mode");
    document.body.classList.toggle("dark__mode");
    darkMode.classList.toggle("hide");
    lightMode.addEventListener("click", () => {
      document.body.classList.remove("dark__mode");
      darkMode.classList.remove("hide");
      lightMode.classList.toggle("hide");
    });
    darkMode.addEventListener("click", () => {
      document.body.classList.toggle("dark__mode");
      lightMode.classList.remove("hide");
      darkMode.classList.toggle("hide"); 
    });
  }, [darkMode]);

  // function ClickON() {
  //   var x = document.getElementById("myAudio");
  //   x.play();
  // }
  // function ClickOFF() {
  //   x.stop();
  // }
  var vid, mutebtn;
  function vidmute() {
    vid = document.getElementById("my_video");
    mutebtn = document.getElementById("mutebtn");
    if (vid.muted) {
      vid.muted = false;
      mutebtn.innerHTML = `
      <i style= "color:gray;font-size:35px;margin-left:-50px;" class="fas fa-volume-up" ></i>
      `;
    } else {
      vid.muted = true;
      mutebtn.innerHTML = `         
      <i style="color:gray;font-size:35px;margin-left:-50px;" class="fa-solid fa-volume-xmark"></i>
      `;
    }
  }
  return (
    <div>
      <header className="header" id="HOME">
      <div style={{backgroundColor:'#fff ' }} className="header-overlay">
        {/* <h4
          style={{
            margin: "50px 0 0 30px",
            width: "70%",
            color: "white",
            textAlign: "left",
            paddingTop: "20px",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h4>
        <p
          style={{
            margin: "10px 0 0 30px",
            color: "white",
            width: "70%",
            textAlign: "left",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          commodi accusantium numquam tempore non nobis consequuntur eius
          consequatur et placeat architecto, libero laboriosam delectus id
          aliquid dolore maxime tempora dicta similique, aut nemo quia alias.
          Quod dignissimos ipsa, labore, ducimus ipsum, quasi fuga adipisci
          vitae ratione dicta eveniet cum fugit.
        </p>{" "} */}

        <h1
          className="special-title text-center text-sm-left h2 fadeInUp wow"
          style={{
            margin: "50px 0 0 70px",
            width: "100%",
            textAlign: "left",
            paddingTop: "40px",
            color: "black",
            fontWeight: "bolder",
            animationName: "fadeInUp",
          }}
        >
          Service - fast changeover up to 30 minutes in most cases
        </h1>

        <p
          className="special-title text-center text-sm-left h2 fadeInUp wow"
          style={{
            width: "60px",
            margin: "10px 0 20px 70px",
            borderBottom: "3px solid #ea3a3c",
          }}
        ></p>

        <p
          className="special-title text-center text-sm-left h2 fadeInUp wow"
          style={{
            margin: "10px 0 0 70px",
            width: "70%",
            textAlign: "left",
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "17px",
            lineHeight: "2rem",
          }}
        >
          Professional servicing of all types of mobile phones with cutting-edge
          equipment.
        </p>

        <p
          style={{
            marginLeft: "70px",
            width: "70%",
            textAlign: "left",
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "17px",
          }}
        >
          Fast service of certain models on the spot at the lowest price.
        </p>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              margin: "0 0 60px 30px",
            }}
          >
            <div
              style={{
                color: "white",
                width: "47%",
                height: "47%",
                margin: "2px",
                border: "1px solid black",
              }}
            >
              <img
                width="100%"
                height="100%"
                src="images/repair2.jpg"
                alt="logo"
              />
            </div>
            <div
              style={{
                color: "white",
                width: "47%",
                height: "47%",
                margin: "2px",
                border: "1px solid black",
              }}
            >
              <img
                width="100%"
                height="100%"
                src="images/repair3.jpg"
                alt="logo"
              />
            </div>
            <div
              style={{
                color: "white",
                width: "47%",
                height: "47%",
                margin: "2px",
                border: "1px solid black",
              }}
            >
              <img
                width="100%"
                height="100%"
                src="images/repair4.jpg"
                alt="logo"
              />
            </div>
            <div
              style={{
                color: "white",
                width: "47%",
                height: "47%",
                margin: "2px",
                border: "1px solid black",
              }}
            >
              <img
                width="100%"
                height="100%"
                src="images/phone-repair1.jpg"
                alt="logo"
              />
            </div>
          </div> */}
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              margin: "0 0 60px 60px",
            }}
          >
            <div
              className="hover"
              style={{
                width: "44%",
                height: "47%",
                margin: "15px",
                background: "url('images/ostetenekran-bg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#fff",
                padding: "17px",
                color: "black",
              }}
            >
              <div>
                <img
                  width="35%"
                  height="60%"
                  src="images/ostetenekran.svg"
                  alt="servis ekran"
                />

                {/* <img src="images/ostetenekran-bg.svg" alt="servis ekran" /> */}
              </div>

              <h3 className="special-title mb-0 special-title-center h4 text-center">
                Screen
              </h3>
            </div>

            <div
              className="hover"
              style={{
                width: "44%",
                height: "47%",
                margin: "15px",
                background: "url('images/ostanato-2-bg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#fff",
                padding: "17px",
                color: "black",
              }}
            >
              <div>
                <img
                  width="35%"
                  height="60%"
                  src="images/kamera.svg"
                  alt="servis kamera"
                />

                {/* <img src="images/ostanato-2-bg.svg" alt="servis kamera" /> */}
              </div>

              <h3 className="special-title mb-0 special-title-center h4 text-center">
                Camera
              </h3>
            </div>

            <div
              className="hover"
              style={{
                width: "44%",
                height: "47%",
                margin: "15px",
                background: "url('images/baterija-bg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#fff",
                padding: "17px",
                color: "black",
              }}
            >
              <div>
                <img
                  width="35%"
                  height="60%"
                  src="images/baterija.svg"
                  alt="servis baterija"
                />

                {/* <img src="images/baterija-bg.svg" alt="servis baterija" /> */}
              </div>

              <h3 className="special-title mb-0 special-title-center h4 text-center">
                Battery
              </h3>
            </div>

            <div
              className="hover"
              style={{
                width: "44%",
                height: "47%",
                margin: "15px",
                background: "url('images/audio-bg.svg')",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#fff",
                padding: "17px",
                color: "black",
              }}
            >
              <div>
                <img
                  width="35%"
                  height="60%"
                  src="images/zvuk.svg"
                  alt="servis zvucnik"
                />

                {/* <img src="ima ges/audio-bg.svg" alt="servis zvucnik" /> */}
              </div>

              <h3 className="special-title mb-0 special-title-center h4 text-center">
                Speaker
              </h3>
            </div>
          </div>
          <div style={{ height: "100%", width: "100%" }}>
            <button
              style={{ position: "absolute", marginTop:"100px", zIndex: "1" }}
              onClick={vidmute}
              id="mutebtn"
            >
              <i
                style={{ color: "gray", fontSize: "35px", marginLeft:"-50px" }}
                class="fa-solid fa-volume-xmark"
              ></i>
            </button>
            <video
              id="my_video"
              muted
              autoPlay
              plays-playsInline
              className="back-video"
              style={{
                postion: "relative",
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -1,
                height: "300px",
                width: "100%",
                objectFit: "cover",
                overflowX: "hidden",
                margin: "80px 0 20px -50px",
              }}
            >
              <source src="./videos/videoplayback.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* <button onClick={ClickON}>ONN</button> */}
        </div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#loso-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">
                <img style={{ height:"30px", marginLeft:"8px" }} src="images/fix.svg" alt="logo" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="loso-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#HOME" className="nav-item">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#ABOUT" className="nav-item">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#FEATURES" className="nav-item">
                    FEATURES
                  </a>
                </li>
                <li>
                  <a href="#SCREENS" className="nav-item">
                    SCREENS
                  </a>
                </li>
                <li>
                  <a href="#DOWNLOAD" className="nav-item">
                    DOWNLOAD
                  </a>
                </li>
                <li>
                  <a href="#CONTACT" className="nav-item">
                    CONTACT
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    GAME
                  </a>
                  
                </li>
                <button
                  onClick={() =>
                    setDarkMode(document.getElementById("dark-mode"))
                  }
                  id="dark-mode"
                  className="moon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-moon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                  </svg>
                </button>
                <button id="light-mode" className="sun hide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-sun-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </button>
              </ul>
            </div>
          </div>
        </nav>
        <div className="header-overlay">
          <div className="container header-container">
            <div className="row" style={{ marginTop: "100px" }}>
              <div className="col-md-8">
                <div className="header-text">
                  <h1>Play Game to relax, till someone returns you an answer on email!</h1>
                  <p>Tap on phone screen, or at button to play game!</p>
                </div>

                <div className="header-btns">
                  <Link className="btn btn-download wow fadeInLeft" to="/game">
                    Play Game
                  </Link>
                  {/* <a className="btn btn-tour wow fadeInRight" href="/">
                    {" "}
                    Take A Tour
                    <i className="fa fa-angle-down"></i>
                  </a> */}
                </div>
              </div>
              <div></div>

              <div className="col-md-3 col-md-offset-1">
                <div className="header-iphone">
                  <Link to="/game">
                    <img src="images/iphone.png" alt="header iphone" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
