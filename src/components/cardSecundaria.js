import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import './cardSecundaria.css';
import Cores from '../assets/images/cores.png'
import Amarelo from '../assets/images/amarelo.png'
import Azul from '../assets/images/azul.png'
import Vermelho from '../assets/images/vermelho.png'
import Roxo from '../assets/images/roxo.png'
import Verde from '../assets/images/verde.png'
import Laranja from '../assets/images/laranja.png'

export default function CardSecundaria(props){

    let texto = props.nome;
    let resultadoCor = Cores;
    const corEscolhida = props.seu;
    const corOp = props.op;

    console.log(corOp)
    
    if (corEscolhida == 'amarelo' && corOp == 1){
        resultadoCor = Amarelo;
        texto = "Amarelo"
    }else if (corEscolhida == 'amarelo' && corOp == 2){
        resultadoCor = Verde;
        texto = "Verde"
    }else if (corEscolhida == 'amarelo' && corOp == 3){
        resultadoCor = Laranja;
        texto = "Laranja"
    }
    
    
    else if (corEscolhida == 'azul' && corOp == 1){
        resultadoCor = Verde;
        texto = "Verde"
    }else if (corEscolhida == 'azul' && corOp == 2){
        resultadoCor = Azul;
        texto = "Azul"
    }else if (corEscolhida == 'azul' && corOp == 3){
        resultadoCor = Roxo;
        texto = "Roxo"
    }
    
    
    else if (corEscolhida == 'vermelho' && corOp == 1){
        resultadoCor = Laranja;
        texto = "Laranja"
    }else if (corEscolhida == 'vermelho' && corOp == 2){
        resultadoCor = Roxo;
        texto = "Roxo"
    }else if (corEscolhida == 'vermelho' && corOp == 3){
        resultadoCor = Vermelho;
        texto = "Vermelho"
    }
    
    return(
        <Container fluid id="cardSecundaria">
            <Row id="secundariaR">
                {texto}
            </Row>

            <Row id="imgR">
                <img src={resultadoCor} id="img"></img>
            </Row>
        </Container>
    );
}