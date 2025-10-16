import { useNavigate } from 'react-router-dom';
import './App.css';

function Projetos() {
  const navigate = useNavigate();

  return (
    <div className="projeto">
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

      {/* ======== CONTEÚDO PRINCIPAL ======== */}
      <main className="projeto-main">
        <h1 className="projeto-titulo">Título do Projeto</h1>
        
        <div className="projeto-imagem">
          <img src="/foguete.jpg" alt="Foguete do Projeto" />
        </div>

        <p className="projeto-texto">
          Aqui vai a descrição do projeto. Explique os objetivos, desafios e conquistas. 
          Esse espaço pode ser usado para contar a história do desenvolvimento do foguete, 
          as tecnologias aplicadas e a participação em competições.
        </p>
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

export default Projetos;
