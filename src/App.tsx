import React, { useEffect } from "react";
import "./App.css";
import { Home, HomeSection } from "./pages/Home";
import { createMuiTheme } from "@material-ui/core";
import { orange, blue } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import * as qs from "qs";
import { Router, Route, Switch } from "react-router-dom";
import { browserHistory } from "./utilities/history";

import "./editor";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange
  }
});

const App: React.FC = () => {
  useEffect(() => {
    const handler = (event: any) => {
      event.preventDefault();
      event.prompt();
      event.userChoice.then((choiceResult: any) => {
        console.log(choiceResult);
      });
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router history={browserHistory}>
          <Switch>
            <Route
              path={`/settings`}
              exact={true}
              render={props => (
                <Home section={HomeSection.Settings} queryParams={{}}></Home>
              )}
            ></Route>
            <Route
              path={`/`}
              render={props => (
                <Home
                  section={HomeSection.Notebooks}
                  queryParams={qs.parse(
                    props.location.search.replace(/^\?/, "")
                  )}
                ></Home>
              )}
            ></Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
