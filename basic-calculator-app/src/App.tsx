import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CalcButtonComponent } from "./Components/CalculatorButton/CalcButtonComponent";

function App() {
  const calBtn = ["1", "2", "3"];
  return (
    <div>
      {calBtn.map((item) => (
        <CalcButtonComponent symbol={item} />
      ))}
    </div>
  );
}

export default App;
