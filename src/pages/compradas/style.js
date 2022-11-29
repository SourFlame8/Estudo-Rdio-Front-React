import styled from "styled-components";

export const Body = styled.body`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    background-color: blue; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        background-color: #4CAF50;
        color: white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`