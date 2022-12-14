import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/api';


function Teste() {
  const [teste, setTeste] = useState("")

  useEffect(() => {
    api.get("/").then((response) => {setTeste(response?.data.sucess)});
    console.log(teste);
  }, [teste]);

  return (
    <div><h1>{teste}</h1></div>
  )
}

export default Teste;