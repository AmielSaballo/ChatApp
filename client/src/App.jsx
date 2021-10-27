import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Chat from "./Chat";

const App = () => (
  <div>
    <h1
      style={{
        margin: 10,
      }}
    >
      Chat!
    </h1>
    <Chat />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
