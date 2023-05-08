import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Loading.css";

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
    </div>
  );
}
export default Loading;
