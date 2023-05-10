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
          src="https://assets2.lottiefiles.com/packages/lf20_x62chJ.json"
          className="player"
        />
        <span>Loading</span>
      </div>
    </React.Fragment>
  );
}
export default LoadingFetchData;
