import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./src/view/router";
import "./index.css";

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
