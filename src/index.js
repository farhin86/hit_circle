import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CirclePage from "./CirclePage";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <CirclePage />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
