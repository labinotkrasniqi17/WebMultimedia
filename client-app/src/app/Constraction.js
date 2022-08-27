import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const Constraction = () => {
  var loadScript = function (src) {
    var tag = document.createElement("script");
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName("body")[0].appendChild(tag);
  };
  loadScript("./assetsGame/timer.js");
  toast.error("Server Error, We will come back as fast as we can!");
  // alert("Server Error, We will come back as fast as we can!");


  return (
    <div>
      <img style={{ display:"block",width:"50%", marginLeft:"auto", marginRight:"auto", marginTop:"40px"}} src="images/under-construction.jpg" alt="" /> 
      <h4 style={{ textAlign:"center" }}>Comming Back In : </h4>
      <h4 style={{ textAlign:"center", color:"orangered" }} id="demo"></h4>
      <h4 style={{ textAlign:"center" }}>Until the services of page are back, you can play our fantastic game!</h4>
      <Link to="/game" style={{ display:"block",width:"15%", marginLeft:"auto", marginRight:"auto", marginTop:"20px", padding:8 , borderRadius:"10px", fontSize:"20px" }} className="btn btn-info">Play a Game</Link>
      <ToastContainer />
    </div>
  );
};
