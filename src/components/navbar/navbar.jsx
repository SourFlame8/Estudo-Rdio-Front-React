import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

function navbar() {
  return (
      <header style={{ display: "flex", justifyContent: "flex-end" }}>
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

export default navbar;
