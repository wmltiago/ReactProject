import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListarAutor from "./listarAutor";
import "./cssAdm/forms.css";

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

export const FormAutor = () => {
  const [nomeAutor, setNomeAutor] = useState('');

  const salvarAutor = (e) => {

      axios.post('http://localhost:8080/api/bookstore/admin/autor/create', {
          nome: nomeAutor,
        })

        .then(function (response) {
          alert("Autor salvo com sucesso!")
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
      <Title>Cadastro de Autor</Title>
      <div className="container_form">
      <Form onSubmit={salvarAutor} >
        <label htmlFor="name">Nome do Autor:</label><br/>
        <Input type="text"
         id="nomeAutor"
         name="nomeAutor"
         required
         value={nomeAutor ? nomeAutor : ''} onChange={event => setNomeAutor(event.target.value)}/><br/>
        <Button type="submit">Enviar</Button>
      </Form>
      </div>
      <br/><br/><br/>
      <div className="#">
                    <Link to="/listarAutor">Lista de autores</Link>
      </div>
      <div>
        <ListarAutor/>
      </div>
    </ContactWrapper>
  );
};
