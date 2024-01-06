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
        src="https://assets10.lottiefiles.com/packages/lf20_p8bfn5to.json"
        className="palyer"
      />
      <p>Loading</p>
    </div>
  );
}
export default Loading;
