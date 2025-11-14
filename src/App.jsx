import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Lenis from "lenis";
import Approute from "./routes/Approute";

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const App = () => {
  return (
    <>
      <Nav />
      <Approute />
    </>
  );
};

export default App;
