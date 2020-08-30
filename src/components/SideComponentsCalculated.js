import styled, { css } from "styled-components";
import React, { Component } from "react";
const Side = styled.div`
  margin-top: 10px;
  background-color: white;
  height: 650px;
  width: 300px;
  padding: 1%;
  border: 1px solid black;
`;
const Table = styled.div`
  margin-bottom: 5%;
  display: flex;
  width: 80%;
  justify-content: Space-Between;
  margin-left: 10%;
`;
const TextinTable = styled.p`
  font-size: 150%;
  fontfamily: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;
const TablesColors = styled.div`
  width: 50px;
  height: 50px;
  ${(props) =>
    props.mesa &&
    css`
      background-color: #9e6816;
    `}
  ${(props) =>
    props.recepcion &&
    css`
      background-color: #31699c;
    `}
    ${(props) =>
    props.noDisponible &&
    css`
      background-color: #9e6816;
      opacity: 0.5;
    `}
`;

class SideComponentsCalculated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capacidadMax: 50,
      capacidadAct: 40,
    };
  }
  render() {
    return (
      <div>
        <Side>
          <Table>
            <TextinTable>No disponible</TextinTable>
            <TablesColors noDisponible />
          </Table>
          <Table>
            <TextinTable>Mesa con sillas</TextinTable>
            <TablesColors mesa />
          </Table>
          <Table>
            <TextinTable>Recepción</TextinTable>
            <TablesColors recepcion />
          </Table>
          <Table>
            <TextinTable>Capacidad Máxima</TextinTable>
            <TextinTable>{this.state.capacidadMax}%</TextinTable>
          </Table>
          <Table>
            <TextinTable>Capacidad Actual</TextinTable>
            <TextinTable>{this.state.capacidadAct}%</TextinTable>
          </Table>
        </Side>
      </div>
    );
  }
}

export default SideComponentsCalculated;
