import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>FORMULÁRIO DE CADASTRO</h1>
        
        <form className="form">
          
      <input          
            type="text"
            placeholder='Nome'
            required
          />
          <input          
            type="text"
            placeholder='Sobrenome'
            required
          />
          <input          
            type="text"
            placeholder='E-mail'
            required
          />
          <input          
            type="text"
            placeholder='Endereço'
            required
          /> 
          <input          
            type="password"
            placeholder='Senha'
            required
          />
          <button type='submit'>Salvar</button>
          </form>
          </header> 
    </div>
  );
}

export default App;
