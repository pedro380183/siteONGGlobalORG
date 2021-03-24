import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid;
  margin: 10px 0;
`;

const Textbox = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid;
  margin: 10px 0;
`;


const Button = styled.button`
  background: black;
  color: white;
  font-weight: bold;
  position: relative;
  left: 38%;
  width: 30%;
  height: 40px;
  border-radius: 10px;
`;

function changeCityfunction(e) {}

function FormVoluntario() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Label htmlFor="titulo">Descrição da Vaga:</Label>
      <Input placeholder="Titulo da Vaga" id="titulo" required />

      <Label htmlFor="conteudo">Conteudo da Vaga:</Label>
      <Textbox placeholder="Conteudo da Vaga" id="conteudo" required />
      
      <Label htmlFor="categoria">Categoria da Vaga:</Label>
      <Textbox placeholder="Categoria da Vaga" id="categoria" required />

      <Label htmlFor="quantidade_de_voluntario">Quantidade de Voluntarios:</Label>
      <Textbox placeholder="Quantidade de Voluntarios:" id="quantidade_de_voluntario" required />

      <Label htmlFor="city">Cidade:</Label>
      <div className="dropdown" open="">
        <span>
          <i class="fas fa-map-marker-alt"></i>
        </span>
        <Input
          placeholder="Cidade em que você reside"
          id="city"
          type="text"
          autocomplete="false"
          onChange={changeCityfunction()}
          required
        />
      </div>
      <Button>Cadastrar</Button>
    </form>
  );
}

export default function CadastroVaga() {
    return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2vh 30vw",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}> Inserir uma vaga </h1>
      <p
        style={{
          textAlign: "center",
        }}>
        Crie uma vaga para que voluntarios possam inscrever
      </p>
      <FormVoluntario></FormVoluntario>
    </div>
  );
}