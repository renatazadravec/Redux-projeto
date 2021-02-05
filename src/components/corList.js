import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";

import addCorAction from "../actions/addCorAction.js";
import addCorOp from "../actions/addCorOp.js";
import CardCor from "./cardCor.js";
import CardCorOp from "./cardCorOp.js";
import CardSecundaria from "./cardSecundaria.js";

import "./corList.css";

import Mais from "../assets/images/add.png";

export default function CorList() {
  const cor = useSelector((state) => state.cor.data);
  const corOp = useSelector((state) => state.corOp.data);
  const secundaria = useSelector((state) => state.secundaria.data);

  //console.log(secudaria);

  const dispatch = useDispatch();
  const dispatchOp = useDispatch();

  function addCor() {
    dispatch(addCorAction(document.getElementById("inputCor").value));
  }

  function randonOp() {
    let result = Math.floor(Math.random() * 3) + 1;
    dispatchOp(addCorOp(result));
  }

  return (
    <Row>
      <Container>
        <Col xs="12" mb="5">
          <Row>
            <Col md="4">
              <br />
              <p id="instrucoes">
                <h4>Instruções:</h4>
                <b>1</b> - Escolha sua Cor;
                <br />
                <b>2</b> - Clique em adicionar Cor;
                <br />
                <b>3</b> - Clique em Misturar;
                <br />
                <b>4</b> - O resultado da Cor Secundaria aparecerá.
              </p>
            </Col>
            <Col md="4">
              <div className="select">
                <label id="t">Escolha sua Cor:</label>
                <select id="inputCor" name="inputCor">
                  <option value="amarelo">Amarelo</option>
                  <option value="azul">Azul</option>
                  <option value="vermelho">Vermelho</option>
                </select>
              </div>
            </Col>
            <Col md="4">
              <br />
              <button id="botaoA" type="button" onClick={addCor}>
                Adicionar Cor
              </button>
              <br />
              <br />
              <button id="botaoJ" type="button" onClick={randonOp}>
                Misturar
              </button>

              <br />
            </Col>
          </Row>
        </Col>

        <Col xs="12" mb="5">
          <Row>
            {cor.map((cor) => (
              <CardCor key={cor} nome={cor} />
            ))}
            <img
              id="imgMais"
              src={Mais}
              alt=""
              width="200px"
              height="200px"
            ></img>
            {corOp.map((cor) => (
              <CardCorOp key={cor} nome={corOp} />
            ))}
          </Row>
          <Row>
            {secundaria.map((secundaria) => (
              <CardSecundaria
                key={secundaria}
                nome={secundaria}
                seu={cor}
                op={corOp}
              />
            ))}
          </Row>
        </Col>
      </Container>
    </Row>
  );
}
