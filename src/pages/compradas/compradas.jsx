import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Button,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../../services/api";
import { Body } from "./style";
import "@fontsource/montserrat";
import { AddIcon, ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import ModalAddCompradas from "../modal/add/ModalAddCompradas";
import ModalEditCompradas from "../modal/edit/ModalEditCompradas";

function Compradas() {
  const [musica, setMusica] = useState([]);

  useEffect(() => {
    api.get("/Compradas").then((response) => {
      setMusica(response?.data?.response?.compradas);
    });
  }, [musica]);

  function remover(id) {
    api
      .delete(`/Compradas/${id}`)
      .then((response) => alert(response.data.response.sucess))
      .catch((error) => alert("Deu erro" + " " + error));
  }

  return (
    <Body>
      <Text fontFamily={"Montserrat"} fontSize={30}>
        Compradas
      </Text>
      <ModalAddCompradas />
      <TableContainer
        border={"1px solid black"}
        borderRadius={"10px"}
        marginBottom={".5rem"}
        fontFamily={"Montserrat"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Artista</Th>
              <Th>Album</Th>
              <Th>Licença Comprada</Th>
              <Th>Vencimento da Licença</Th>
              <Th>Gravadora</Th>
              <Th />
              <Th />
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
                <Td>
                  <ModalEditCompradas />
                </Td>
                <Td>
                  <Button onClick={() => remover(d.id)}>
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Button
        colorScheme={"blue"}
        size={"lg"}
        fontFamily={"Montserrat"}
        leftIcon={<ArrowBackIcon />}
      >
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
