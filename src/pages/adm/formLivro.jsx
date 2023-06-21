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
  const [paginas, setPaginas] = useState('');
  const [fotoLivro, setFotoLivro] = useState('');
  const [precoLivro, setPrecoLivro] = useState('');
  const [nomeAutorLivro, setNomeAutorLivro] = useState('');
  const [categoriaLivro, setCategoriaLivro] = useState('');
  const [editoraLivro, setEditoraLivro] = useState('');

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


  const salvarLivro = (e) => {

      axios.post('http://localhost:8080/api/bookstore/admin/autor/create', {
          titulo: nomeLivro,
          paginas: paginas,
          pathFoto: fotoLivro,
          preco: precoLivro,
          autor: nomeAutorLivro,
          editora: editoraLivro,
          categoria: categoriaLivro,

        })

        .then(function (response) {
          alert("Livro salvo com sucesso!")
          setNomeAutorLivro('')
          setPaginas('')
          setFotoLivro('')
          setPrecoLivro('')
          setNomeAutorLivro('')
          setCategoriaLivro('')
          setEditoraLivro('')

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
      <Form onSubmit={salvarLivro}>
      <label htmlFor="name">Nome do Livro:</label>
        <Input type="text"
         id="nomeLivro"
         name="nomeLivro"
         required
         value={nomeLivro ? nomeLivro : ''} onChange={event => setNomeLivro(event.target.value)}/><br/>

      <label htmlFor="name">Nº de Páginas:</label>
        <Input type="number"
         id="paginas"
         name="paginas"
         required
         value={paginas ? paginas : ''} onChange={event => setPaginas(event.target.value)}/><br/>

      <label htmlFor="name">Preço:</label>
        <Input type="number"
         id="precoLivro"
         name="precoLivro"
         required
         value={precoLivro ? precoLivro : ''} onChange={event => setPrecoLivro(event.target.value)}/><br/>
      
      <label htmlFor="name">Selecione um autor:</label>
         <select name="nomeAutorLivro" id="nomeAutorLivro">
          <option></option>
         {autores.map((autor) => (
         <option key={autor.id}>{autor.nome}</option>))}
         </select><br/>      

      <label htmlFor="name">Selecione uma categoria:</label>
      <select name="categoriaLivro" id="categoriaLivro">
         <option></option>
         {autores.map((autor) => (
         <option key={autor.id}>{autor.nome}</option>))}
         </select><br/>  

      <label htmlFor="name">Selecione uma editora:</label>
      <select name="editoraLivro" id="editoraLivro">
         <option></option>
         {autores.map((autor) => (
         <option key={autor.id}>{autor.nome}</option>))}
         </select><br/><br/>

         <label htmlFor="name">Escolha uma Imagem:</label>
        <Input type="file"
         id="fotoLivro"
         name="fotoLivro"
         required
         value={fotoLivro ? fotoLivro : ''} onChange={event => setFotoLivro(event.target.value)}/><br/> <br/> 
      
        <Button type="submit">Enviar</Button>
      </Form>
      <br/><br/><br/>
      <div className="#">
                    <Link to="/autores">Lista de livros</Link>
      </div>
    </ContactWrapper>
  );
};
