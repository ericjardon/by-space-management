import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateGrid from "./components/CreateGrid";
import EvaluateGrid from "./components/EvaluateGrid";
import Header from "./components/Header";

export const Wrapper = styled.div`
  font-family: system-ui;
  background-color: #F4F4F4;
  margin: 10px;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <CreateGrid></CreateGrid>
    </Wrapper>
  );
}

export default App;
