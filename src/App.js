import React from "react";
import BoxSquare from "./components/BoxSquare";

const App = () => {
  return (
    <div className="app">
      <div className="app_header">
        <h1 className="app_title">Puzzle Game</h1>
        <BoxSquare />
      </div>
    </div>
  );
};

export default App;
