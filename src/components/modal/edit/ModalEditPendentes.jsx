import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "@fontsource/montserrat";

function ModalEditPendentes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [artista, setArtista] = useState("");
  const [album, setAlbum] = useState("");
  const [gravadora, setGravadora] = useState("");
  const [situacaoCompra, setSituacaoCompra] = useState("");

  return (
    <>
      <Button onClick={onOpen}>
        <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontStyle={"Montserrat"}>Editar Musica</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={"enviar"}>
              <Text mb="8px" fontStyle={"Montserrat"}>
                Nome:
              </Text>
              <Input
                value={name}
                defaultValue="nome"
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o nome da musica"
                size="sm"
                required={"required"}
                marginBottom={".5rem"}
              />
              <Text mb="8px" fontStyle={"Montserrat"}>
                Artista:
              </Text>
              <Input
                value={artista}
                defaultValue="artista"
                onChange={(e) => setArtista(e.target.value)}
                placeholder="Digite o artista da musica"
                size="sm"
                required={"required"}
                marginBottom={".5rem"}
              />
              <Text mb="8px" fontStyle={"Montserrat"}>
                Album:
              </Text>
              <Input
                value={album}
                defaultValue="album"
                onChange={(e) => setAlbum(e.target.value)}
                placeholder="Digite o album da musica"
                size="sm"
                required={"required"}
                marginBottom={".5rem"}
              />
              <Text mb="8px" fontStyle={"Montserrat"}>
                Gravadora:
              </Text>
              <Input
                value={gravadora}
                defaultValue="gravadora"
                onChange={(e) => setGravadora(e.target.value)}
                placeholder="Digite a gravadora da musica"
                size="sm"
                required={"required"}
                marginBottom={".5rem"}
              />
              <Text mb="8px" fontStyle={"Montserrat"}>
                Situação Compra:
              </Text>
              <Select
                variant="outline"
                placeholder="Selecione uma situação"
                onChange={(e) => setSituacaoCompra(e.target.value)}
                required={"required"}
                size="sm"
              >
                <option value={"Pendente"}>Pendente</option>
                <option value={"Inciada"}>Inciada</option>
                <option value={"Comprada"}>Comprada</option>
              </Select>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: ".5rem",
                }}
              >
                <Button
                  colorScheme={"blue"}
                  fontStyle={"Montserrat"}
                  type="submit"
                >
                  Editar
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalEditPendentes;
