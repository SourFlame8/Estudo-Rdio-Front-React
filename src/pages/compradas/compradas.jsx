import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { Body, Button } from './style';

function Compradas() {
    return (
        <Body>
            <h1>Compradas</h1>
            <Button>
                <NavLink exact to="/" style={{ "color": "white", "textDecoration": "none" }}>
                    Voltar
                </NavLink>
            </Button>
        </Body>
    )
}

export default Compradas;