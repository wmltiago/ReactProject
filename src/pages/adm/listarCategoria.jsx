import { useEffect, useState } from "react";
import "./cssAdm/listarAutor.css"
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const ListarCategoria = () => {
    const location = useLocation();

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        buscaAutores();
    }, [])

    const buscaAutores = () => {
        axios.get('https://brasilapi.com.br/api/cptec/v1/cidade')
        // axios.get('http://localhost:8080/api/bookstore/admin/autor/list')
          .then(function (response) {
            setCategorias(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const deletarCategoria = id => {
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
                           <td className="top center"><strong>E-mail</strong></td>
                           <td className="top center"><strong>Data de Cadastro</strong></td>
                           <td className="top center" colspan="2" width="1"><strong>Ações</strong></td>
                        </tr>
                    
                    </tbody>
                    <tbody>   
                    {categorias.map(categoria => {
                        return (           
                        <tr key={categoria.id}> 
                            <td align="center" >{categoria.id}</td>
                            <td align="center">{categoria.nome}</td>
                            <td align="center">{categoria.ativo ? 'Sim' : 'Nao'}</td>
                            <td align="center">{categoria.estado}</td>
                            <td align="center">
                                <Link to={`editar?nome=${categoria.nome}&id=${categoria.id}&ativo=${categoria.ativo}`}>
                                    <a href="#" className="editar fa fa-fa fa-check-circle" title={`Editar ${categoria.nome}`}></a>
                                </Link>                            
                            </td>
                            <td align="center"> <a href="#" className="deletar fa fa-times-circle" onClick={() => deletarCategoria(categoria.id)} title={`Excluir ${categoria.nome}`}></a> </td>
                      
                        </tr>                        
                      )
                    })}

                    </tbody>
</table>
</div>


);}
export default ListarCategoria;