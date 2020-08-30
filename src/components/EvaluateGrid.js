import React, { Component } from "react";

import SideComponent from "./SideComponent";
import SideComponentsCalculated from "./SideComponentsCalculated";
import CreateGrid from "./CreateGrid";
import QuotaCalculator from "../models/QuotaCalculator";

import styled from "styled-components";
import { useLocation } from "react-router";
const Layout = styled.div`
  display: flex;
  margin: 25px;
  background-color: white;b
  
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: start;
  border: 2px solid black;
  padding: 25px;
`;

export const Button = styled.button`
  background-color: rgba(44, 44, 52, 1);
  border: 1px solid black;
  color: white;
  padding: 5px;
  height: 40px;
  width: 200px;
  margin: 0 auto 0 auto;
`;

export const Input = styled.input`
  height: 40px;
  width: 100px;
  border: 1px solid black;
  margin: 25px;
`;

export const Label = styled.p`
  margin: auto;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: Space-Between;
  padding: 25px;
`;

class EvaluateGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {

        currentCapacity: props.data,
        d: props.d,
        q:0

    };
    
  };
  quotaUse(d,q){
    let qc = new QuotaCalculator();
    qc.doEverything(d,q);
  }
  leerInput(e){
    this.setState({q: e.target.value})
  }
  
  
  render() {
    return (
      <Layout>
        <Left>
          <InputBox>
            <Label>{this.state.currentCapacity} </Label>
            <Label>Current Capacity</Label>
          </InputBox>
            <Label>Current Capacity</Label>
          <InputBox>
            <Label>Requiered Capacity</Label>
            <Input onChange={this.leerInput} />
          </InputBox>

          <Button onClick={()=>this.quotaUse(this.state.d, parseFloat(this.state.q))}>Apply restrictions</Button>
        </Left>
      </Layout>
    );
  }
}

export default EvaluateGrid;
