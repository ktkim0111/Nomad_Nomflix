import React, { Component } from "react";
import Routes from "Components/Routes";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Routes />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
