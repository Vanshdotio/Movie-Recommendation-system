import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

const App = React.lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </>
);
