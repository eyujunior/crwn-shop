import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
     
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} /> 
      
    </div>
  );
}

export default App;
