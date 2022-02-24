import React from "react";
import {Bars,Oval,Hearts,Rings} from "react-loader-spinner";

export default function Spinner() {
    
    let elements = document.querySelectorAll('[data-testid=bars-loading]');
    console.log(elements[0].firstChild);
    // elements=elements[0].firstChild;
    // elements.style.zIndex="999999";
    // elements.style.position='absolute';
    // elements.style.top="50vh";
    // elements.style.left="41vw";
    // elements.style.transform="translate(-50%,-50%)";

    // elements.style.cssText += 'z-index:99999;position:absolute,top:50vh,left:41vw,transform:translate(-50%,-50%)';
    // for (let element of elements) {
        // element.style.display = "none";
        // elements.classList.add("spinners");
    // }
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: `RGBA(0,0,0,0.6)`,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 11111,
        animation: "fadeIn 2s",
      }}
    >
      {/* <Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        style={{
          zIndex: "1000",
          position: "absolute",
          top: "50vh",
          left: "50vw",
          transform: "translate(-50%,-50%)",
        }}
      /> */}
    <Bars
    heigth={800}
    width={200}
    color="yellow"
    ariaLabel='loading'
    style={{
      zIndex: "99999",
      position: "absolute",
       top: "50vh", 
       left: "41vw", 
       transform: "translate(-50%,-50%)"
    }}
  />
    </div>
  );
}
