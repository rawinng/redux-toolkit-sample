import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Logo = () => {
  console.log(`Logo display`);
  return <img src={logo} className="App-logo" alt="logo" />;
};
const App = () => {
  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        <Logo />
        Hello, world!!
      </header>
    </div>
  );
};

export default App;
