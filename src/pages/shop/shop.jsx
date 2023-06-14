import { PRODUCTS } from "../../products";
import { Product } from "./product";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./shop.css";

export const Shop = () => {

  


  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>Listagem de Livros</h3>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};