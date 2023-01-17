import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutsContextProvidex } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WorkoutsContextProvidex>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WorkoutsContextProvidex>
);
