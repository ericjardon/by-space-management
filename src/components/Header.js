import styled from "styled-components";
import React, { Component } from "react";
const Title = styled.p`
  color: white;

  font-size: 25px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  padding: 5px;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

const LoginWrapper = styled.div`
  display: flex;
  margin: auto 0 auto 0;
`;

const Input = styled.input`
  height: 35px;
  width: 150px;
  margin: 10px;
`;

const Button = styled.button`
  background-color: black;
  height: 45px;
  width: 100px;
  border: 1px solid white;
  color: white;
  padding: 10px;
  margin: auto;
  border-radius: 10px;
  text-align: center;
`;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Title>Name</Title>
        </LogoWrapper>

        <LoginWrapper>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Login</Button>
        </LoginWrapper>
      </Wrapper>
    );
  }
}

export default Header;
