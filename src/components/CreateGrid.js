import styled from "styled-components";
import React, { Component, useNavigate } from "react";
import Grid from "./Grid";
import { Link } from "react-router-dom";
import EvaluateGrid from "./EvaluateGrid";
import QuotaCalculator from "../models/QuotaCalculator";


const Layout = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;


`;



const RightInputWrapper =styled.div`
display: flex
flex-direction: row;

`

const Top = styled.div`
  display: flex;
  justify-content: center;
  
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
`;


const Instructions =styled.div`
display: flex;
flex-direction: column;
justify-content: center;


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

export const ButtonLarge = styled.button`
  background-color: rgba(44, 44, 52, 1);
  border: 1px solid black;
  margin: 25px;
  color: white;
  padding: 5px;
  height: 40px;
  width: 200px;
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

const Text = styled.p`
text-size:50px;
text-align: center;


`


class CreateGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pops: [],
      rows: 2,
      columns: 2,
      timer: false,
      numberOfTables:10,
      currentCapacity:100,
      secondTimer:false,
      thirdTimer:false,
    };
    this.updateCapacity = React.createRef()
    this.onChange = this.onChange.bind(this);
    this.createCells = this.createCells.bind(this);
    this.applySocialDistancing=this.applySocialDistancing.bind(this);
    
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
async applySocialDistancing(){
  const qc=new QuotaCalculator();
  let numberOfTables = qc.countTables(this.state.pops); // cuenta mesas antes de inhabilitar
  console.log(qc.doEverything(this.state.pops, 1.0));

  await this.setState(
    {
      pops: qc.doEverything(this.state.pops, 1.0),
    numberOfTables: numberOfTables
    });
console.log(this.state.numberOfTables);
    // Calculate Current capacity
    let currCapacity = await qc.calculatePC(qc.countTables(this.state.pops), this.state.numberOfTables);
    console.log("curr "+currCapacity);

    await this.setState({
      currentCapacity: currCapacity,
      secondTimer: true,
    })

    console.log("current"+ this.state.currentCapacity)
    
}
timerTres=()=>{
  this.setState({thirdTimer:true})
}





  render() {
    return (
      <Layout>
        <Instructions>
        <Text>The first step is to build a layout that represents what your business space looks like</Text>

        <Text>Remember that every cell in the grid represents one square meter and that you can simply click on a cell to place a table</Text>
        <Top>

          <RightInputWrapper>

          <Input
              onChange={(e) => this.onChange(e, "rows")}
              type="number"
              placeholder="Rows"
          ></Input>
          <Input
            onChange={(e) => this.onChange(e, "columns")}
            type="number"
            placeholder="Columns"
          ></Input>
          <Button
            onClick={() =>
              this.createCells(this.state.rows, this.state.columns)
            }
          >
            Create Grid
          </Button>
            
          </RightInputWrapper>
      </Top>
      </Instructions>




        {this.state.timer === false ? (
          <div></div>
        ) : (
          <div>
            <Grid gridd={this.state.pops}></Grid>
          </div>
        )}

        <p><br/></p>
        <Middle>
        <ButtonLarge onClick={this.applySocialDistancing}>Calculate Social Distancing</ButtonLarge>
        </Middle>

        
        {this.state.secondTimer === false ? (
          <div></div>
        ) : (
          <div>
            <EvaluateGrid data={this.state.currentCapacity} d={this.state.pops} q={1}/>
            <Button onClick={this.timerTres}>FJLKD</Button>
          </div>
        )}
        
        {this.state.thirdTimer === false ? (
          <div></div>
        ) : (
          <div>
            <Grid gridd={this.state.pops}></Grid>
          </div>
        )}
  
       

          
      </Layout>
      );
  }
}
export default CreateGrid;
