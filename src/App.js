import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
