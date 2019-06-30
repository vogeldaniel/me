import React from "react";
import "./App.css";
import Routering from "./areas/Routering.js";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routering />
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
