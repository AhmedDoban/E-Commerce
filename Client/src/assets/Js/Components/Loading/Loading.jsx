import React from "react";
import "./Loading.css";
import { Player } from "@lottiefiles/react-lottie-player";

function Loading() {
  return (
    <div className="pre-loader">
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src={require("../../../imgs/Loading.json")}
        className="palyer"
      />
      <p>Loading</p>
    </div>
  );
}
export default Loading;
