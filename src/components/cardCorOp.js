import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import './cardCor.css';
import Cores from '../assets/images/cores.png'
import Amarelo from '../assets/images/amarelo.png'
import Azul from '../assets/images/azul.png'
import Vermelho from '../assets/images/vermelho.png'

export default function CardCorOp(props){

    let imgF = Cores;
    let corOp = props.nome;
    let nomeOp = 'cor aleatoria';
    
    if (corOp == 1){
        imgF = Amarelo;
        nomeOp = 'amarelo';
    }else if (corOp == 2){
        imgF = Azul;
        nomeOp = 'azul';
    }else if (corOp == 3){
        imgF = Vermelho;
        nomeOp = 'vermelho';
    }
    
    return(
        <Container fluid id="card">
            <Row id="imgR">
                <img src={imgF} id="img"></img>
            </Row>
            <Row id="nomeR">
                {nomeOp}
            </Row>
        </Container>
    );
}