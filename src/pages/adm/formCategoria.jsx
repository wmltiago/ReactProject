import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListarCategoria from "./listarCategoria";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
`;


const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0060cb;
  }
`;

export const FormCategoria = () => {
  const [nomeCategoria, setNomeCategoria] = useState('');

  const salvarCategoria = (e) => {

      axios.post('http://localhost:8080/api/bookstore/admin/autor/create', {
          nome: nomeCategoria,
        })

        .then(function (response) {
          alert("Categoria salva com sucesso")
          setNomeCategoria('')
          console.log(response);

        })

        .catch(function (error) {
          console.log(error);
          
        });

      return e.preventDefault();
      
  }

  return (
    <ContactWrapper>
      <Title>Cadastro da Categoria</Title>
      <Form onSubmit={salvarCategoria}>
        <label htmlFor="name">Nome da Categoria:</label><br/>
        <Input type="text"
         id="nomeCategoria"
         name="nomeCategoria"
         required
         value={nomeCategoria ? nomeCategoria : ''} onChange={event => setNomeCategoria(event.target.value)}/><br/>
        <Button type="submit">Enviar</Button>
      </Form>
      <br/><br/><br/>
      <div className="#">
                    <Link to="/autores">Lista de categorias</Link>
      </div>
      <div>
        <ListarCategoria/>       
      </div>
    </ContactWrapper>
  );
};
