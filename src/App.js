import React from "react";
import styled, { css } from "styled-components";

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
      <EvaluateGrid />
    </Wrapper>
  );
}

export default App;
