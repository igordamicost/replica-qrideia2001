import logo from './assets/img/logo.png';
import user from './assets/img/user.png'
import './assets/css/style.css';
import { useState } from 'react';

function App() {
  const [ active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }
  return (
    <div className="container">
      <div className="navbar">
        <img src={logo} alt="Logomarga QRideia2001"/>
        <div className="links">
          <a href="url">Home</a>
          <a href="url">Eventos</a>
          <a href="url">Usuários</a>
          <a href="url">Relatórios</a>
        </div>
        <div className="user">
          <img src={user} alt="Sua foto aqui"/>
          <div className="username">
          <a href="url">Igor D'Amico Sotolani</a>
          <a href="url">Desconectar</a>
          </div>          

        </div>
      </div>
      <div className="bodyitens">

      </div>
    </div>
  );
}

export default App;
