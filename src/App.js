import { Player } from "@lottiefiles/react-lottie-player";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./assets/Js/Home/Home"));
const NotFounded = lazy(() => import("./assets/Js//Not Founded/NotFounded"));

function App() {
  return (
    <div className="App">
      <div className="page-wrpper">
        <Suspense
          fallback={
            <div className="pre-loader">
              <Player
                autoplay={true}
                loop={true}
                controls={false}
                src="https://assets10.lottiefiles.com/packages/lf20_p8bfn5to.json"
                className="palyer"
              />
            </div>
          }
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFounded />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
