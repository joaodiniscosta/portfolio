import React from "react";
import preloaderGif from "../../src/Assets/pre.gif"; // ajusta o caminho conforme necessário

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <img src={preloaderGif} alt="Loading..." />
      )}
    </div>
  );
}

export default Pre;