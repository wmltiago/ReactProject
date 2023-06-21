import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListarEditora from "./listarEditoras";

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

export const FormEditora = () => {
  const [nomeEditora, setNomeAutor] = useState('');

  const salvarEditora = (e) => {

      axios.post('http://localhost:8080/api/bookstore/admin/autor/create', { //alterar endpoint para editora
          nome: nomeEditora,
        })

        .then(function (response) {
          alert("Editora salva com sucesso!")
          setNomeAutor('')
          console.log(response);

        })

        .catch(function (error) {
          console.log(error);
          
        });

      return e.preventDefault();
      
  }

  return (
    <ContactWrapper>
      <Title>Cadastro de Editora</Title>
      <Form onSubmit={salvarEditora}>
        <label htmlFor="name">Nome da Editora:</label><br/>
        <Input type="text"
         id="nomeEditora"
         name="nomeEditora"
         required
         value={nomeEditora ? nomeEditora : ''} onChange={event => setNomeAutor(event.target.value)}/>
        <Button type="submit">Enviar</Button>
      </Form>
      <br/><br/><br/>
      <div className="#">
                    <Link to="/autores">Lista de editoras</Link>
      </div>
      <div>
        <ListarEditora/>
      </div>
    </ContactWrapper>
  );
};
