import styled from "styled-components";
import React, { Component } from 'react';


const Layout= styled.div`
display: flex
flex-direction: column;
margin: auto;

`;

const Top = styled.div `
display: flex;
justify-content: center;

`
const Row = styled.div`
display: flex;
text-align: center;
height: 100px;
justify-content: center;
border: 0px solid black;
margin: 1px;

`;

const Cell =styled.div`
border: 1px solid black;
margin: 1px;
height: 100px;
width: 100px;


`;
const Table =styled.div`
margin: 1px;
height: 100px;
width: 100px;
background-color: #ad7657;

`;
export const Button = styled.button`
    background-color: rgba(	44,	44,	52, 1);
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

const Bottom = styled.div `
display: flex;
justify-content: center;

`




class CreateGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            grid:[],
            rows: 2,
            columns:2
        

         }
         this.onChange = this.onChange.bind(this);
         this.createCells= this.createCells.bind(this);
         this.createTable= this.createTable.bind(this);

    
    }
  
createCells(){

    //const test=  Array(this.state.rows).fill().map(() => Array(this.state.rows).fill(0));
    const grid=  Array(parseInt(this.state.rows)).fill().map(() => Array(parseInt(this.state.columns)).fill(0));
   
console.log(this.state.rows)
    this.setState({

grid:grid
    })

}
   

createTable(row,column) {

    //console.log(this.props.val) accede a props de constructor
    let items = [...this.state.grid];

    let item = items[row][column];
    console.log(item)
    // 3. Replace the property you're intested in
    item = 1-item;
    console.log(item)
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[row][column] = item;
    // 5. Set the state to our new copy


    this.setState({
        grid: items

    })

    console.log(this.state.grid)
}




    onChange(e, val) {
        this.setState({
          [val]: e.target.value,
        });

        console.log(e.target.value)
      }

    render() { 
        return (
            <Layout>

            <Top>
              
                <Input onChange={(e) => this.onChange(e, "rows")} placeholder="Rows"></Input>
                <Input onChange={(e) => this.onChange(e, "columns")} placeholder="Columns"></Input>
                <Button onClick={this.createCells}>Create Grid</Button>


            </Top>

            <div>
                

               

                
            {this.state.grid.map((box,i)=>
            <Row>


            {box.map((cell,j)=>
            
            cell=== 0 ?  <Cell  onClick={() => this.createTable(i,j)} ></Cell> : <Table  onClick={() => this.createTable(i,j)} >Mesa {i}-{j}</Table>
        
            )}

          </Row>
            
            )}
            </div>
            <Bottom><Button>Save layout</Button></Bottom>

            </Layout>

        );
}
}

export default CreateGrid;