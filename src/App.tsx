import React from "react";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouting from "./pages/AppRouting";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouting />
      </div>
    </BrowserRouter>
  );
}

export default App;
