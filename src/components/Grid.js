import React, { Component } from "react";
import styled from "styled-components";
const Row = styled.div`
  display: flex;
  text-align: center;
  height: 50px;
  justify-content: center;
  border: 0px solid black;
  margin: 1px;
`;

const Cell = styled.div`
  border: 1px solid black;
  margin: 1px;
  height: 50px;
  width: 50px;
`;
const Table = styled.div`
border: 1px solid #ad7657;
  margin: 1px;
  height: 50px;
  width: 50px;
  background-color: #ad7657;
`;



const DisabledTable = styled.div`
  text-decoration: line-through black;
  border: 1px solid #ad7657;
  margin: 1px;
  height: 50px;
  width: 50px;
  background-color: rgba(173,119,87,0.5);
`;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: props.gridd,
    };

    this.createTable = this.createTable.bind(this);
  }

  createTable(row, column) {
    //console.log(this.props.val) accede a props de constructor
    let items = [...this.state.test];

    let item = items[row][column];
    console.log(item);
    // 3. Replace the property you're intested in
    item = 1 - item;
    console.log(item);
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[row][column] = item;
    // 5. Set the state to our new copy

    this.setState({
      test: items,
    });

    console.log(this.state.grid);
  }
  

  render() {
    return (
      <div>
        {this.state.test.map((box, i) => (
          <Row>
            {box.map((cell, j) =>
   

              cell === 0 ? (
                <Cell onClick={() => this.createTable(i, j)}></Cell>
              ) : (
                cell=== 1 ?(
                  <Table onClick={() => this.createTable(i, j)}>
                    Mesa {i}-{j}
                  </Table>
                ): (<DisabledTable onClick={() => this.createTable(i, j)}>
                      Mesa {i}-{j}
                    </DisabledTable>
                ))
                
              )}
          </Row>
        ))}
      </div>
    );
  }
}

export default Grid;
