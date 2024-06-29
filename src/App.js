import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Homescreen";
import Nav from "./components/Home/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;