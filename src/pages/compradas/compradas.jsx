import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Body, Button, Table } from "./style";

function Compradas() {
  return (
    <Body>
      <h1>Compradas</h1>
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

export default Compradas;
