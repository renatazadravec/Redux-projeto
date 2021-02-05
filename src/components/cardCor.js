import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import './cardCor.css';
import Cores from '../assets/images/cores.png'
import Amarelo from '../assets/images/amarelo.png'
import Azul from '../assets/images/azul.png'
import Vermelho from '../assets/images/vermelho.png'

export default function CardCor(props){

    let imgF = Cores;
    const corEscolhida = props.nome;
    
    if (corEscolhida == 'amarelo'){
        imgF = Amarelo;
    }else if (corEscolhida == 'azul'){
        imgF = Azul;
    }else if (corEscolhida == 'vermelho'){
        imgF = Vermelho;
    }
    
    return(
        <Container fluid id="card">
            <Row id="imgR">
                <img src={imgF} id="img"></img>
            </Row>
            <Row id="nomeR">
                {props.nome}
            </Row>
        </Container>
    );
}