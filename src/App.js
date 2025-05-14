import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Funcionalidades from './components/Funcionalidades';
import Precos from './components/Precos';
import Contato from './components/Contato';
import './styles/global.css';
import './styles/Footer.css';

const App = () => {
  return (
    <div>
      <Header />
      <Sobre />
      <Funcionalidades />
      <Precos />
      <Contato />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Meu Sistema ERP. Todos os direitos reservados.</p>
    </footer>
  );
}

export default App;
