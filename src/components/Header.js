import React from 'react';
import '../styles/Header.css'; // Vamos adicionar o CSS depois

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Meu Sistema ERP</h1>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#precos">Preços</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
