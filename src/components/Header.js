import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Meu Sistema ERP</h1>
        <nav>
          <a href="/sobre" target="_blank" rel="noopener noreferrer">Sobre</a>
          <a href="/funcionalidades" target="_blank" rel="noopener noreferrer">Funcionalidades</a>
          <a href="/precos" target="_blank" rel="noopener noreferrer">Preços</a>
          <a href="/contato" target="_blank" rel="noopener noreferrer">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
