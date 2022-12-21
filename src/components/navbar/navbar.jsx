import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

function Navbar(pagina) {
  switch (pagina) {
    case "home":
      return (
        <header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: ".5rem",
          }}
        >
          <ButtonGroup variant="outline" spacing="6">
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
    case "compradas":
      return (
        <header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: ".5rem",
          }}
        >
          <ButtonGroup variant="outline" spacing="6">
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
          }}
        >
          <ButtonGroup variant="outline" spacing="6">
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
          }}
        >
          <ButtonGroup variant="outline" spacing="6">
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
