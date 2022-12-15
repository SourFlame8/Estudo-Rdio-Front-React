import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../../services/api";
import { Body, Button } from "./style";

function Compradas() {
  const [musica, setMusica] = useState([]);

  useEffect(() => {
    api.get("/Compradas").then((response) => {
      setMusica(response?.data?.response?.compradas);
    });
  }, [musica]);

  return (
    <Body>
      <h1>Compradas</h1>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Artista</Th>
              <Th>Album</Th>
              <Th>Licença Comprada</Th>
              <Th>Vencimento da Licença</Th>
              <Th>Gravadora</Th>
            </Tr>
          </Thead>
          <Tbody>
            {musica?.map((d, i) => (
              <Tr key={i}>
                <Td>{d?.nome}</Td>
                <Td>{d?.artista}</Td>
                <Td>{d?.album}</Td>
                <Td>{moment(d?.lincenca_comprada).format("DD - MM - YYYY")}</Td>
                <Td>{moment(d?.venc_licenca).format("DD - MM - YYYY")}</Td>
                <Td>{d?.gravadora}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
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
