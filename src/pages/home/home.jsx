import React from 'react'
import { Body, Button } from "./style"
import { useNavigate, NavLink } from "react-router-dom";


function Home() {
    return (
        <Body>
            <h1>Pagina inicial</h1>
            <Button>
                <NavLink exact to="/Compradas" style={{ "color": "white", "textDecoration": "none" }}>
                    Ver Musicas compradas
                </NavLink>
            </Button>
        </Body>
    )
}

export default Home;