import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" id="NavTitle">
          Livraria Dracol
        </Link>
      </div>
      <div className="links">
      <Link to="/formLivro" className={location.pathname === "/formLivro" ? "active-link" : ""}>
          Cadastrar Livro
        </Link>
      
        <Link to="/formAutor" className={location.pathname === "/formAutor" ? "active-link" : ""}>
          Cadastrar Autor
        </Link>
        <Link to="/formEditora" className={location.pathname === "/formEditora" ? "active-link" : ""}>
          Cadastrar Editora
        </Link>
        <Link to="/formCategoria" className={location.pathname === "/formCategoria" ? "active-link" : ""}>
          Cadastrar Categoria
        </Link>
        <Link to="#" >
           |
        </Link>

        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Shop
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active-link" : ""}
        >
          Contato
        </Link>
        <Link to="/cart" id="cartlink" className={location.pathname === "/cart" ? "active-link" : ""}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
