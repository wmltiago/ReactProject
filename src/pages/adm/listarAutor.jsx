import { useEffect, useState } from "react";
// import "./index.css"
import axios from "axios";
import { Link } from "react-router-dom";

const ListarAutor = () => {

    const [autores, setAutores] = useState([]);

    useEffect(() => {
        buscaAutores();
    }, [])

    const buscaAutores = () => {
        axios.get('http://localhost:8080/api/bookstore/admin/autor/list')
          .then(function (response) {
            setAutores(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const deletarAutor = id => {
        axios.delete(`http://localhost:8080/api/bookstore/admin/autor/delete/${id}`)
          .then(function () {
            buscaAutores()
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="container">

            <h1>Lista de autores</h1>

            <table className="tableAutores">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ativo</th>
                        <th>Acao</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map(autor => {
                        return (
                            <tr key={autor.id}>
                                <th>{autor.id}</th>
                                <th>{autor.nome}</th>
                                <th>{autor.ativo ? 'Sim' : 'Nao'}</th>
                                <th>
                                    <div>
                                        <Link to={`editar?nome=${autor.nome}&id=${autor.id}&ativo=${autor.ativo}`}>
                                            <span title={`Editar ${autor.nome}`}>✏️</span>
                                        </Link>
                                        <span onClick={() => deletarAutor(autor.id)} title={`Excluir ${autor.nome}`}>X</span>
                                    </div>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListarAutor;