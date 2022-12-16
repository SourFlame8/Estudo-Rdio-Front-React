import React from 'react'
import { Body } from "./style"
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Text } from '@chakra-ui/react';


function Home() {
    return (
        <Body>
            <Text fontSize={30} marginBottom={".5rem"}>Pagina inicial</Text>
            <Button colorScheme={'blue'} size={'lg'} marginBottom={"1rem"}>
                <NavLink exact to="/Compradas" style={{ "color": "white", "textDecoration": "none" }}>
                    Ver Musicas Compradas
                </NavLink>
            </Button>
            <Button colorScheme={'blue'} size={'lg'}>
                <NavLink exact to="/Pendentes" style={{ "color": "white", "textDecoration": "none" }}>
                    Ver Musicas Pendentes
                </NavLink>
            </Button>
        </Body>
    )
}

export default Home;