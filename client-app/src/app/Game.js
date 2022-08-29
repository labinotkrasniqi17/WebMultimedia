import React, { useEffect, useState } from "react";

export const Game = () => {
  var loadScript = function (src) {
    var tag = document.createElement("script");
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName("body")[0].appendChild(tag);
  };
  loadScript("./assetsGame/script.js");

  const [colors, setColors] = useState(null);

  function color(){
    window.setColortoCharacter();
  }

  var audio, mutebtn;
  function vidmute() {
    audio = document.getElementById("sound");
    mutebtn = document.getElementById("mutebtn");
    if (audio.muted) {
      audio.muted = false;
      mutebtn.innerHTML = `
      <i style= "color:black;font-size:35px;margin-left:-25px;" class="fas fa-volume-up" ></i>
      `;
    } else {
      audio.muted = true;
      mutebtn.innerHTML = `         
      <i style="color:red;font-size:35px;margin-left:-25px;" class="fa-solid fa-volume-xmark"></i>
      `;
    }
  }
  return (
    <div className="game">
      <h1>
        Score: <span id="score">0</span>
      </h1>

      <div className="containeri" id="containerId">
        <h3 id="animate2">
          <em>Welcome</em>
        </h3>
        <h3 id="animate">
          <em>Obstacle Game</em>
        </h3>

        <h4 id="music-txt">
          <em>Music</em>
        </h4>
        <button
              style={{ position: "absolute", marginTop:"70px", zIndex:"1" }}
              onClick={vidmute}
              id="mutebtn"
            >
              <i
                style={{ color: "red", fontSize: "35px", marginLeft:"-25px" }}
                class="fa-solid fa-volume-xmark"
              ></i>
          </button>

        <video
          className="audio"
          id="sound"
          muted
          autoPlay
          plays-playsInline
          loop
          src="./assetsGame/soundGame.mp3"
          style={{ height: "50px"}}
        ></video>
        <h4 id="demo">
          <em>Select color</em>
        </h4>
        <input
          type="color"
          id="myColor"
          value={colors}
          style={{ width: "100px" }}
          onInput={color}
          onChange={e=>setColors(e.target.value)}
        />
        <br />
        <button style={{ padding:"10px 20px 10px 20px", fontSize:"20px", margin:"0 auto", backgroundColor:"#fff5f5", borderRadius:"10px" }}  id="play-button">Start Game</button>
      </div>

      {/* <!-- <div className="middle">
        <h1>HELLOO</h1>
        </div> -->

        <!-- <div id="ground">
        </div> --> */}

      <div id="character"></div>

      <div className="obstacles"></div>
    </div>
  );
};
