import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components-Universal/Navbar/Navbar";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import PeriodicTable from "./Pages/PeriodicTable/PeriodicTable";
import PaginaElemento from "./Pages/PaginaElemento/PaginaElemento";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8a5891",
      main: "#644069",
      dark: "#462d49",
      contrastText: "#fff"
    },
    secondary: {
      light: "#26ffac",
      main: "#00ff9e",
      dark: "#00d181",
      contrastText: "#000"
    },
    typography: {
      useNextVariants: true,
    },
    // error: '#ff1947'
  }
});

class App extends Component {
  state = {
    path: window.location.pathname
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar></Navbar>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/tabela" component={PeriodicTable} />
            <Route path="/elemento" component={PaginaElemento} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
