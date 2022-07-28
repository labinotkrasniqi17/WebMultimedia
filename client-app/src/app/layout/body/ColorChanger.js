import React, { useEffect } from 'react'

export const ColorChanger = () => {
    useEffect(()=>{
      const slider = document.querySelector(".slider input");
      const img = document.querySelector(".images .img-2");
      const dragLine = document.querySelector(".slider .drag-line");
      slider.oninput = ()=>{
        let sliderVal = slider.value;
        dragLine.style.left = sliderVal + "%";
        img.style.width = sliderVal + "%";
      }
    }, [])
    
  return (
    <div className="wrapper">
      <h4 style={{ position:"absolute", zIndex:1, marginLeft:"224px", fontFamily:"cursive"}}>BEFORE - AFTER</h4>
      <div className="images">
        <div className="img-1"></div>
        <div className="img-2"></div>
      </div>
      <div className="slider">
        <div className="drag-line">
          <span></span>
        </div>
        <input type="range" min="0" max="100" value="50"/>
      </div>
    </div>
  )
}
