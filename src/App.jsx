import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Lenis from "lenis";

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
      <Home />
    </>
  );
};

export default App;
