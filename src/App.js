import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateGrid from "./components/CreateGrid";
import EvaluateGrid from "./components/EvaluateGrid";
import Header from "./components/Header";

export const Wrapper = styled.div`
  font-family: system-ui;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <CreateGrid />
          </Route>

          <Route exact path="/evaluate">
            <EvaluateGrid />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
