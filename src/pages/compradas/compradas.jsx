import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../../services/api";
import { Body, Button, Table } from "./style";

function Compradas() {
  const [musica, setMusica] = useState([]);

  useEffect(() => {
    api.get("/TesteMusica").then((response) => {
      setMusica(response?.data?.response?.compradas);
    });
  }, [musica]);

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
          {musica?.map((d, i) => (
            <tr key={i}>
              <td>{d?.nome}</td>
              <td>{d?.artista}</td>
              <td>{d?.album}</td>
              <td>{moment(d?.lincenca_comprada).format("DD - MM - YYYY")}</td>
              <td>{moment(d?.venc_licenca).format("DD - MM - YYYY")}</td>
              <td>{d?.gravadora}</td>
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

export default Compradas;
