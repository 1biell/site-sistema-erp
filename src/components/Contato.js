import React from 'react';
import '../styles/Contato.css'; 


const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2>Contato</h2>
        <p>Entre em contato conosco para mais informações sobre o sistema.</p>
        <form>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <textarea placeholder="Sua mensagem" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contato;
