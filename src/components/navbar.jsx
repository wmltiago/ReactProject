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
          P&H Library 
        </Link>
      </div>
      <div className="links">
      <Link to="/adm" className={location.pathname === "/adm" ? "active-link" : ""}>
          Gerenciar
        </Link>

        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Shop
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active-link" : ""}
        >
          Contact
        </Link>
        <Link to="/cart" id="cartlink" className={location.pathname === "/cart" ? "active-link" : ""}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
