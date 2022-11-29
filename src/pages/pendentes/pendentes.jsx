import React from 'react'
import { Body, Button } from './style';
import { NavLink } from 'react-router-dom';

function Pendentes() {
    return (
        <Body>
            <h1>Pendentes</h1>
            <Button>
                <NavLink exact to="/" style={{ "color": "white", "textDecoration": "none" }}>
                    Voltar
                </NavLink>
            </Button>
        </Body>
    )
}

export default Pendentes;