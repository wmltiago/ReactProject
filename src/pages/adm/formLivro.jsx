import React, { useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

export const FormLivro = () => {
  const [nomeLivro, setNomeLivro] = useState('');
  const [nomeAutor, setNomeAutor] = useState('');
  const [autores, setAutores] = useState([]);


  
  const getLivros = async () => {

    try {
      
      const response = await axios.get("https://brasilapi.com.br/api/ibge/uf/v1");

      console.log(response);
      const data = response.data;

      setAutores(data);
      console.log(data);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() =>{

    getLivros();

  }, [])

  



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
      <Title>Cadastro de Livro</Title>
      <Form onSubmit={salvarAutor}>
      <label htmlFor="name">Nome do Livro:</label><br/>
        <Input type="text"
         id="nomeLivro"
         name="nomeLivro"
         required
         value={nomeLivro ? nomeLivro : ''} onChange={event => setNomeLivro(event.target.value)}/>

      <label htmlFor="name">Preço:</label><br/>
        <Input type="number"
         id="nomeAutor"
         name="nomeAutor"
         required
         value={nomeAutor ? nomeAutor : ''} onChange={event => setNomeAutor(event.target.value)}/>
      
      <label htmlFor="name">Selecione um autor:</label>
         <select >
         {autores.map((autor) => (
         <option key={autor.id}>{autor.nome} {autor.id}</option>))}
         </select><br/>      

      <label htmlFor="name">Selecione uma categoria:</label>
         <select >
         {autores.map((autor) => (
         <option key={autor.id}>{autor.nome} {autor.id}</option>))}
         </select><br/>  

      <label htmlFor="name">Selecione um gênero:</label>
         <select >
         {autores.map((autor) => (
         <option key={autor.id}>{autor.nome} {autor.id}</option>))}
         </select><br/> 
      
        <Button type="submit">Enviar</Button>
      </Form>
      <br/><br/><br/>
      <div className="#">
                    <Link to="/autores">Lista de autores</Link>
      </div>
    </ContactWrapper>
  );
};
