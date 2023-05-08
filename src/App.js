import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./assets/Js/Components/Loading/Loading";
const Home = lazy(() => import("./assets/Js/Home/Home"));
const NotFounded = lazy(() => import("./assets/Js//Not Founded/NotFounded"));

function App() {
  return (
    <div className="App">
      <div className="page-wrpper">
        <Suspense fallback={<Loading />}>
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
