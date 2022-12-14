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
import React, { useEffect, useState } from "react";
import { Body } from "./style";
import { NavLink } from "react-router-dom";
import api from "../../services/api";
import "@fontsource/montserrat";
import { AddIcon, ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import ModalAddPendentes from "../../components/modal/add/ModalAddPendentes";
import ModalEditPendentes from "../../components/modal/edit/ModalEditPendentes";
import Navbar from "../../components/navbar/navbar";

function Pendentes() {
  const [musica, setMusica] = useState([]);

  useEffect(() => {
    api.get("/Pendentes").then((response) => {
      setMusica(response?.data?.response?.pendentes);
    });
  }, [musica]);

  function remover(id) {
    api
      .delete(`/Pendentes/${id}`)
      .then((response) => alert(response.data.response.sucess))
      .catch((error) => alert("Deu erro" + " " + error));
  }

  return (
    <>
    <Navbar pagina="pendentes" />
      <Body>
        <Text fontFamily={"Montserrat"} fontSize={"30"}>
          Pendentes
        </Text>
        <ModalAddPendentes />
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
                <Th>Gravadora</Th>
                <Th>Situação Compra</Th>
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
                  <Td>{d?.gravadora}</Td>
                  <Td>{d?.situacao_compra}</Td>
                  <Td>
                    <ModalEditPendentes />
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
    </>
  );
}

export default Pendentes;
