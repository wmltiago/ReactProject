import { useEffect, useState } from "react";
import "./cssAdm/listarAutor.css"
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const ListarAutor2 = () => {
    const location = useLocation();

    const [autores, setAutores] = useState([]);

    useEffect(() => {
        buscaAutores();
    }, [])

    const buscaAutores = () => {
        axios.get('https://brasilapi.com.br/api/cptec/v1/cidade')
        // axios.get('http://localhost:8080/api/bookstore/admin/autor/list')
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
<div className="style-tabela">
<table border="0" cellpadding="0" cellspacing="0" width="1000px" height="100%">
               
                    <tbody>
                    
                        <tr>
                           <td className="top center">ID<i class="icofont-users-alt-4"></i></td>
                           <td className="top center"><strong>Nome</strong></td>
                           <td className="top center"><strong>Ativo</strong></td>                           
                           <td className="top center" colspan="2" width="1"><strong>Ações</strong></td>
                        </tr>
                    
                    </tbody>
                    <tbody>   
                    {autores.map(autor => {
                        return (           
                        <tr key={autor.id}> 
                            <td align="center" >{autor.id}</td>
                            <td align="center">{autor.nome}</td>
                            <td align="center">{autor.ativo ? 'Sim' : 'Nao'}</td>                            
                            <td align="center">
                                <Link to={`editar?nome=${autor.nome}&id=${autor.id}&ativo=${autor.ativo}`}>
                                    <a href="#" className="editar fa fa-fa fa-check-circle" title={`Editar ${autor.nome}`}></a>
                                </Link>                            
                            </td>
                            <td align="center"> <a href="#" className="deletar fa fa-times-circle" onClick={() => deletarAutor(autor.id)} title={`Excluir ${autor.nome}`}></a> </td>
                      
                        </tr>                        
                      )
                    })}

                    </tbody>
</table>
</div>


);}
export default ListarAutor2;