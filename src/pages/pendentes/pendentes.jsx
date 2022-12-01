import React from "react";
import { Body, Button, Table } from "./style";
import { NavLink } from "react-router-dom";

function Pendentes() {
  return (
    <Body>
      <h1>Pendentes</h1>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Artista</th>
            <th>Album</th>
            <th>Lincença Comprada</th>
            <th>Vencimento da Licença</th>
            <th>Gravadora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Black</td>
            <td>Pearl Jam</td>
            <td>Ten</td>
            <td>Dia</td>
            <td>Dia</td>
            <td>Gravadora</td>
          </tr>
        </tbody>
      </Table>
      <Button>
        <NavLink
          exact
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Voltar
        </NavLink>
      </Button>
    </Body>
  );
}

export default Pendentes;
