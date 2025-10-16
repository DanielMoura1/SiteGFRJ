import { Routes, Route, useNavigate } from 'react-router-dom'
import Projetos from './Projetos'
import Subsistemas from './Subsistemas'
import Contato from './Contato'

function App() {
  const navigate = useNavigate()

  return (
    <>
     
        <div>
          <header className="header">
            <img src="logogfrj.png" alt="Logo GFRJ" />
            <nav>
              <ul>
                <li><a href="/">Início</a></li>
                <li><a onClick={() => navigate('/projetos')}>Projetos</a></li>
                <li><a onClick={() => navigate('/subsistemas')}>Subsistemas</a></li>
                <li><a onClick={() => navigate('/Contato')}>Contato</a></li>
              </ul>
            </nav>
          </header>

          <section className="hero">
            <h1>Grupo de Foguetes do Rio de Janeiro</h1>
            <p>Ciência, tecnologia e inovação no espaço estudantil</p>
          </section>

          <section>
            <h2>Sobre Nós</h2>
            <div className="cards">
              <div className="card">
                <h3>Missão</h3>
                <p>Promover a educação em ciência e tecnologia aeroespacial.</p>
              </div>
              <div className="card">
                <h3>Projetos</h3>
                <p>Participação em competições nacionais e internacionais de foguetes.</p>
              </div>
              <div className="card">
                <h3>Equipe</h3>
                <p>Formada por estudantes apaixonados por engenharia e inovação.</p>
              </div>
            </div>
          </section>

          <footer>
            <p>&copy; 2025 GFRJ - Grupo de Foguetes do Rio de Janeiro</p>
            <p>
              <a href="#">Instagram</a> | 
              <a href="#">LinkedIn</a> | 
              <a href="#">Email</a>
            </p>
          </footer>
        </div>
     

    
    </>
  )
}

export default App
