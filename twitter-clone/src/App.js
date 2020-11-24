import React from "react";
// import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Components/LeftSideBar/Routes";
import Navbar from "./Components/LeftSideBar/NavBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
