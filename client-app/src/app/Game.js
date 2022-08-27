import React, { useEffect } from "react";

export const Game = () => {
  var loadScript = function (src) {
    var tag = document.createElement("script");
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName("body")[0].appendChild(tag);
  };
  loadScript("./assetsGame/script.js");

  function color(){
    window.setColortoCharacter();
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
        <audio
          className="audio"
          id="sound"
          controls
          // muted
          // autoPlay
          loop
          src="./assetsGame/soundGame.mp3"
          style={{ height: "50px", zIndex:1}}
        ></audio>
        <h4 id="demo">
          <em>Select color</em>
        </h4>
        <input
          type="color"
          id="myColor"
          value="#ff0080"
          style={{ width: "100px" }}
          onInput={color}
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
