import React from 'react';

import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import {Header,HeaderItem, HeaderInput, LoginB,Title,HeaderWrapper } from './components/Header'
import CreateGrid from './components/CreateGrid'
import SideComponent from './components/SideComponent'
import SideComponentsCalculated from './components/SideComponentsCalculated'
import styled from "styled-components";

const Layout= styled.div`
display: flex;


`;

function App() {
  return (
    <ThemeProvider>
    <CSSReset />
    
    <Header>
      <Title>Crea tu propio esquema</Title>
      <HeaderWrapper>
        <HeaderItem>Login</HeaderItem>
        <HeaderInput placeholder="User"></HeaderInput>
        <HeaderInput placeholder="Password"></HeaderInput>
        <LoginB>Login</LoginB>
      </HeaderWrapper>
    </Header>


     <SideComponent/>
    <SideComponentsCalculated/>
    <CreateGrid/>
    

    
    
    </ThemeProvider>
   
  );
}




export default App; 