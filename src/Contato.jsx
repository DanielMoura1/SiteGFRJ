import { useNavigate } from 'react-router-dom';
import './App.css';

function Contato() {
  const navigate = useNavigate();

  return (
    <div className="contato-page">
      {/* ======== HEADER ======== */}
      <header className="header">
        <img src="logogfrj.png" alt="Logo GFRJ" />
        <nav>
          <ul>
            <li><a onClick={() => navigate('/')}>Início</a></li>
            <li><a onClick={() => navigate('/projetos')}>Projetos</a></li>
            <li><a onClick={() => navigate('/subsistemas')}>Subsistemas</a></li>
            <li><a onClick={() => navigate('/contato')}>Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* ======== HERO ======== */}
      <section className="hero contato-hero">
        <h1>Fale Conosco </h1>
        <p>Entre em contato para tirar dúvidas ou conhecer mais sobre nossos projetos!</p>
      </section>

     
      <main className="contato-main">
      

        <div className="contato-info">
          <h2>Outras formas de contato:</h2>
          <p> Email: Exemplo@gfrj.com.br</p>
          <p> Telefone: (21) 99999-9999</p>
          <p> Endereço: Rua Exemplo, Rio de Janeiro, RJ</p>
        </div>
      </main>

      {/* ======== FOOTER ======== */}
      <footer>
        <p>&copy; 2025 GFRJ - Grupo de Foguetes do Rio de Janeiro</p>
        <p>
          <a href="#">Instagram</a> | 
          <a href="#">LinkedIn</a> | 
          <a href="#">Email</a>
        </p>
      </footer>
    </div>
  );
}

export default Contato;
