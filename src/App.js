import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Funcionalidades from './components/Funcionalidades';
import Precos from './components/Precos';
import Contato from './components/Contato';
import './styles/global.css';
import './styles/Footer.css';

const Home = () => (
  <>
    <Sobre />
    <Funcionalidades />
    <Precos />
    <Contato />
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Outras rotas que quiser adicionar aqui */}
      </Routes>
      <footer className="footer">
        <p>&copy; 2025 Meu Sistema ERP. Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
};

export default App;
