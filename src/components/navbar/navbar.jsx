import { Button, ButtonGroup, Img } from "@chakra-ui/react";
import React from "react";
import teste from "../../assets/react.svg";

function Navbar(props) {
  switch (props.pagina) {
    case "home":
      return (
        <header
          style={{
            display: "flex",
            marginTop: ".5rem",
            marginRight: "1rem",
          }}
        >
          <Img src={teste} alt="teste" />
          <ButtonGroup variant="outline" spacing="6" direction="row" marginLeft={"85%"}>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/Compradas">Compradas</a>
            </Button>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/Pendentes">Pendentes</a>
            </Button>
          </ButtonGroup>
        </header>
      );
    case "compradas":
      return (
        <header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: ".5rem",
            marginRight: ".5rem",
          }}
        >
          <ButtonGroup variant="outline" spacing="6" direction="row" marginLeft={"85%"}>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/">Home</a>
            </Button>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/Pendentes">Pendentes</a>
            </Button>
          </ButtonGroup>
        </header>
      );
    case "pendentes":
      return (
        <header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: ".5rem",
            marginRight: ".5rem",
          }}
        >
          <ButtonGroup variant="outline" spacing="6" direction="row" marginLeft={"85%"}>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/">Home</a>
            </Button>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/Compradas">Compradas</a>
            </Button>
          </ButtonGroup>
        </header>
      );
    default:
      return (
        <header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: ".5rem",
            marginRight: ".5rem",
          }}
        >
          <ButtonGroup variant="outline" spacing="6" direction="row" marginLeft={"85%"}>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/">Home</a>
            </Button>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/Compradas">Compradas</a>
            </Button>
            <Button colorScheme={"blue"} variant="ghost">
              <a href="/Pendentes">Pendentes</a>
            </Button>
          </ButtonGroup>
        </header>
      );
  }
}

export default Navbar;
