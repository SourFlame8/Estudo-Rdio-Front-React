import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../../services/api";
import { Body, Button, Table } from "./style";

function Compradas() {
  const [teste, setTeste] = useState("");

  useEffect(() => {
    api.get("/TesteMusica").then((response) => {
      setTeste(response?.data);
    });
    console.log(teste);
  }, [teste]);

  return (
    <Body>
      <h1>Compradas</h1>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Artista</th>
            <th>Album</th>
            <th>Licença Comprada</th>
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
          <tr>
            <td>{teste.nome}</td>
            <td>{teste.artista}</td>
            <td>{teste.album}</td>
            <td>{teste.lincenca}</td>
            <td>{teste.vencimento}</td>
            <td>{teste.gravadora}</td>
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
