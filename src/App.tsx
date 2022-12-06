import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Page from "./Page";
import { PixelInput } from "pixelone-ui-libs";
function App() {
  const name = "React";
  return (
    <div className="App">
      <Page firstName={name} />
    </div>
  );
}

export default App;
