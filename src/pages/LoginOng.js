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
      <Label htmlFor="email">E-mail:</Label>
      <Input placeholder="E-mail de acesso" id="email" type="email" required />
      <Label htmlFor="password">Senha:</Label>
      <Input
        placeholder="Nova senha de acesso"
        id="password"
        type="password"
        required
      />
      <Button>Cadastrar</Button>
    </form>
  );
}

export default function LoginOng() {
    return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2vh 30vw",
        flexDirection: "column",
      }}>
      <h1 style={{ textAlign: "center" }}>Login Ong</h1>
      <p
        style={{
          textAlign: "center",
        }}>
        Logue para acompanhar vagas postadas 
      </p>
      <FormVoluntario></FormVoluntario>
    </div>
  );
}