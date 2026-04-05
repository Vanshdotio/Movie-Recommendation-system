import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading App...</h1>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </>
);
