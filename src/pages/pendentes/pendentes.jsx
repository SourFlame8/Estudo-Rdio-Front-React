import React, { useEffect, useState } from "react";
import { Body, Button, Table } from "./style";
import { NavLink } from "react-router-dom";
import api from "../../services/api";

function Pendentes() {
  const [musica, setMusica] = useState([]);

  useEffect(() => {
    api.get("/Pendentes").then((response) => {
      setMusica(response?.data?.response?.pendentes);
    });
  }, [musica]);

  return (
    <Body>
      <h1>Pendentes</h1>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Artista</th>
            <th>Album</th>
            <th>Gravadora</th>
            <th>Situação Compra</th>
          </tr>
        </thead>
        <tbody>
          {musica?.map((d, i) => (
            <tr key={i}>
              <td>{d?.nome}</td>
              <td>{d?.artista}</td>
              <td>{d?.album}</td>
              <td>{d?.gravadora}</td>
              <td>{d?.situacao_compra}</td>
            </tr>
          ))}
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
