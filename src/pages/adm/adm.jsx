import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import NavbarAdm from '../../components/navbarAdm'
import axios from 'axios';


const Adm = () => {

  const [livros, setLivros] = useState([])

  const getLivros = async () => {

    try {
      
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

      console.log(response);
      const data = response.data;

      setLivros(data);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() =>{

    getLivros();

  }, [])

  return (

    <div>
      <NavbarAdm/>

    <div>
      <h1>ULTIMOS LIVROS</h1>

      {livros.length === 0 ? (<p>Carregando...</p>) : (

          livros.map((livro) => (
            <div className="livro" key={livro.id}>
              <h2>{livro.title}</h2>
              <p>{livro.body}</p>
              <Link to={`/livros/${livro.id}`} className='btn'>
                Detalhes do Livro
              </Link>
            </div>
          ))

      )}

    </div>


    </div>
    

  )
}

export default Adm