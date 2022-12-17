import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "@fontsource/montserrat";

function ModalAdd() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [artista, setArtista] = useState("");
  const [album, setAlbum] = useState("");
  const [gravadora, setGravadora] = useState("");

  return (
    <>
      <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme={"blue"} marginBottom={".5rem"}>
        Adicionar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontStyle={"Montserrat"}>Adicionar Musica</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="8px" fontStyle={"Montserrat"}>
              Nome:
            </Text>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome da musica"
              size="sm"
            />
            <Text mb="8px" fontStyle={"Montserrat"}>
              Artista:
            </Text>
            <Input
              value={artista}
              onChange={(e) => setArtista(e.target.value)}
              placeholder="Digite o artista da musica"
              size="sm"
            />
            <Text mb="8px" fontStyle={"Montserrat"}>
              Album:
            </Text>
            <Input
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              placeholder="Digite o album da musica"
              size="sm"
            />
            <Text mb="8px" fontStyle={"Montserrat"}>
              Gravadora:
            </Text>
            <Input
              value={gravadora}
              onChange={(e) => setGravadora(e.target.value)}
              placeholder="Digite a gravadora da musica"
              size="sm"
            />
          </ModalBody>
          <ModalFooter alignSelf={"center"}>
            <Button
              colorScheme={"blue"}
              onClick={onClose}
              fontStyle={"Montserrat"}
              leftIcon={<AddIcon />}
            >
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalAdd;
