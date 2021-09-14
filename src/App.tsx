import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { FindFalcon } from "./features/find-falcon/FindFalcon";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { CustomNavBar } from "./widgets/CustomNavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavBar />
        <h1>Finding Falcone</h1>
      </header>
      <div className="bg-img"></div>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/falcone" component={FindFalcon}></Route>
        <Route path="/*" component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
