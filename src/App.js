import React from "react";
import "./App.css";
import Routering from "./areas/Routering.js";
import Navbar from "./components/Navbar.js";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routering basename={"/me"} />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
