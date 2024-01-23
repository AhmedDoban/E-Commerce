import React from "react";
import "./LoadingFetchData.css";
import { Player } from "@lottiefiles/react-lottie-player";
function LoadingFetchData() {
  return (
    <React.Fragment>
      <div className="LoadingFetchData">
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src={require("../../../imgs/FlyPaper.json")}
          className="player"
        />
        <span>Loading</span>
      </div>
    </React.Fragment>
  );
}
export default LoadingFetchData;
