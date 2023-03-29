
import './Form.css';

function Form() {
  return (

    <div className="container" >  
    
    <div className="content"> 
      <div id="cadastro">
        <form method="post" action=""> 
          <h1>Cadastro</h1> 
          
          <p> 
            <label for="nome_cad">Primeiro Nome</label>
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Luiz" />
          </p>
          <p> 
            <label for="nome_cad">Sobrenome</label>
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Augusto" />
          </p>
          <p> 
            <label for="nome_cad">Endereço</label>
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Rua Amarela 318 - Prazeres - Jaboatão" />
          </p>
          
          <p> 
            <label for="email_cad">Seu e-mail</label>
            <input id="email_cad" name="email_cad" required="required" type="email" placeholder="contato@htmlecsspro.com"/> 
          </p>
          
          <p> 
            <label for="senha_cad">Sua senha</label>
            <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="1234"/>
          </p>
          
          <p> 
            <input type="submit" value="Salvar"/> 
          </p>        
          
        </form>
      </div>
    </div>
  </div> 
);
}

export default Form;
