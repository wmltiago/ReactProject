import { useEffect, useState } from "react";
import "./cssAdm/listarAutor.css"
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const ListarEditora = () => {
    const location = useLocation();

    const [editoras, setEditoras] = useState([]);

    useEffect(() => {
      buscaEditoras();
    }, [])

    const buscaEditoras = () => {
        axios.get('https://brasilapi.com.br/api/cptec/v1/cidade')
        // axios.get('http://localhost:8080/api/bookstore/admin/editora/list')
          .then(function (response) {
            setEditoras(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const deletarEditora = id => {
        axios.delete(`http://localhost:8080/api/bookstore/admin/autor/delete/${id}`)
          .then(function () {
            buscaEditoras()
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
                    {editoras.map(editora => {
                        return (           
                        <tr key={editora.id}> 
                            <td align="center" >{editora.id}</td>
                            <td align="center">{editora.nome}</td>
                            <td align="center">{editora.ativo ? 'Sim' : 'Nao'}</td>                            
                            <td align="center">
                                <Link to={`editar?nome=${editora.nome}&id=${editora.id}&ativo=${editora.ativo}`}>
                                    <a href="#" className="editar fa fa-fa fa-check-circle" title={`Editar ${editora.nome}`}></a>
                                </Link>                            
                            </td>
                            <td align="center"> <a href="#" className="deletar fa fa-times-circle" onClick={() => deletarEditora(editora.id)} title={`Excluir ${editora.nome}`}></a> </td>
                      
                        </tr>                        
                      )
                    })}

                    </tbody>
</table>
</div>


);}
export default ListarEditora;