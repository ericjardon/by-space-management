import React, { Component } from "react";
import styled, { css } from "styled-components";
const Side = styled.div`
    background-color: #C4C4C4;
    height:650px;
    width:300px;
    padding:1%;
`;
const Table = styled.div`
    margin-bottom:5%;
    display:flex;
    width:80%;
    justify-Content:Space-Between;
    margin-left:10%;
`;
const TextinTable = styled.p`
    font-size:150%;
    fontFamily: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;
const TablesColors = styled.div`
    width:50px;
    height:50px;
    ${props => props.mesa && css`
        background-color: #9E6816;
        
    `}
    ${props => props.recepcion && css`
        background-color: #31699C;
        
    `}
`;
const Capacidad = styled.select`
        margin-right:5px;
        width: 30%;
        padding: 8px 11px;
        border: none;
        border-radius: 5px; 
`;
const InputBox = styled.div`
        display:flex;
        flex-direction:row;
        margin-left:10%;
        width:85%;
        justify-Content:Space-Between;
        margin-top:10%;
`;
const Medidas = styled.input`
        width:40%;
`;
const Submit = styled.button`
        margin-left:30%;
        margin-top:15%;
        font-size: 16px;
        padding: 14px 40px;
        background-color:tomato;
`;

class SideComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          capacidadMax: 50,
          altura:1,
          ancho:1
        };
        this.saveMax=this.saveMax.bind(this);
        this.saveAltura=this.saveAltura.bind(this);
        this.saveAncho=this.saveAncho.bind(this);
    }
    saveMax=(event)=>{
        this.setState({capacidad:event.target.value});
    }
    saveAltura=(event)=>{
        this.setState({altura:event.target.value});
    }
    saveAncho=(event)=>{
        this.setState({ancho:event.target.value});
    }
    createPlace=(event)=>{
        const place={
            h:this.state.altura,
            w:this.state.ancho,
            cm:this.state.capacidadMax
        };
        console.log(place);
    }
    render(){
        return (
            <div>  
                <Side>
                    <Table>
                        <TextinTable>Mesa con sillas</TextinTable>
                        <TablesColors mesa/>
                    </Table>
                    <Table>
                        <TextinTable>Recepción</TextinTable>
                        <TablesColors recepcion/>
                    </Table>
                    <InputBox>
                        <TextinTable>Capacidad</TextinTable>
                        <Capacidad onChange={this.saveMax}>
                            <option value="100">100%</option>
                            <option value="95">95%</option>
                            <option value="90">90%</option>
                            <option value="85">85%</option>
                            <option value="80">80%</option>
                            <option value="75">75%</option>
                            <option value="70">70%</option>
                            <option value="65">65%</option>
                            <option value="60">60%</option>
                            <option value="55">55%</option>
                            <option value="50">50%</option>
                            <option value="45">45%</option>
                            <option value="40">40%</option>
                            <option value="35">35%</option>
                            <option value="30">30%</option>
                            <option value="25">25%</option>
                            <option value="20">20%</option>
                            <option value="25">25%</option>
                            <option value="10">10%</option>
                        </Capacidad>
                    </InputBox>
                    <InputBox>
                        <TextinTable>Alto</TextinTable>
                        <Medidas type="number" onChange={this.saveAltura}/>
                    </InputBox>
                    <InputBox>
                        <TextinTable>Ancho</TextinTable>
                        <Medidas type="number" onChange={this.saveAncho}/>
                    </InputBox>
                    <Submit onClick={this.createPlace}>Subir</Submit>
                    
                    
                </Side>
                
        
            </div>
        );
    }
}

export default SideComponent; 