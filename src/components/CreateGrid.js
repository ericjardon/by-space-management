import styled from "styled-components";
import React, { Component } from "react";
import Grid from "./Grid";

const Layout = styled.div`
display: flex
flex-direction: column;
margin: auto;

`;

const Top = styled.div`
  display: flex;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  text-align: center;
  height: 100px;
  justify-content: center;
  border: 0px solid black;
  margin: 1px;
`;

const Cell = styled.div`
  border: 1px solid black;
  margin: 1px;
  height: 100px;
  width: 100px;
`;
const Table = styled.div`
  margin: 1px;
  height: 100px;
  width: 100px;
  background-color: #ad7657;
`;
export const Button = styled.button`
  background-color: rgba(44, 44, 52, 1);
  border: 1px solid black;
  margin: 25px;
  color: white;
  padding: 5px;
  height: 40px;
  width: 100px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100px;
  border: 1px solid black;
  margin: 25px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

class CreateGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pops: [],
      rows: 2,
      columns: 2,
      timer: false,
    };
    this.onChange = this.onChange.bind(this);
    this.createCells = this.createCells.bind(this);
  }

  onChange(e, val) {
    this.setState({
      [val]: e.target.value,
    });

    console.log(e.target.value);
  }

  async createCells(rows, columns) {
    //const test=  Array(this.state.rows).fill().map(() => Array(this.state.rows).fill(0));
    const grid = Array(parseInt(rows))
      .fill()
      .map(() => Array(parseInt(columns)).fill(0));

    console.log(grid);
    this.setState(
      {
        pops: grid,
        timer: true,
      },
      () => {
        console.log(this.state.pops);
      }
    );
  }

  render() {
    return (
      <Layout>
        <Top>
          <Input
            onChange={(e) => this.onChange(e, "rows")}
            placeholder="Rows"
          ></Input>
          <Input
            onChange={(e) => this.onChange(e, "columns")}
            placeholder="Columns"
          ></Input>
          <Button
            onClick={() =>
              this.createCells(this.state.rows, this.state.columns)
            }
          >
            Create Grid
          </Button>
        </Top>
        {this.state.timer === false ? (
          <div>Hola</div>
        ) : (
          <Grid gridd={this.state.pops}></Grid>
        )}
        <div>{this.timeGrid}</div>
        <Bottom>
          <Button>Save layout</Button>
        </Bottom>
      </Layout>
    );
  }
}

export default CreateGrid;
