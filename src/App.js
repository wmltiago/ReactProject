import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ProductDetails } from "./pages/productDetails/productDetails";
import { ShopContextProvider } from "./context/shop-context";
import Adm from "./pages/adm/adm";
import { FormAutor } from "./pages/adm/formAutor";
import { FormEditora } from "./pages/adm/formEditora";
import { FormCategoria } from "./pages/adm/formCategoria";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
           <Route path="/adm" element={<Adm />} />
           <Route path="/formAutor" element={<FormAutor/>} />
           <Route path="/formEditora" element={<FormEditora/>} />
           <Route path="/formCategoria" element={<FormCategoria/>} />         
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>

          {/* <footer>
            <p>Created by Peter Martens</p>
            <a href="https://github.com/petermartens98/React-Ecommerce-Site">
            <img className="github-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" />
            </a>
          </footer> */}

        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

