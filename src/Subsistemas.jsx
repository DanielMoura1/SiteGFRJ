// src/Subsistemas.jsx
import './App.css'

function Subsistemas() {
  return (
    <div className="subsistemas-page">
      {/* ======== HEADER (igual da Home) ======== */}
      <header className="header">
        <img src="logogfrj.png" alt="Logo GFRJ" />
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/projetos">Projetos</a></li>
            <li><a href="/subsistemas">Subsistemas</a></li>
            <li><a href="/Contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* ======== HERO DIFERENCIADO ======== */}
      <section className="hero subsistemas-hero">
        <h1>Nossos Subsistemas </h1>
        <p>Conheça os principais componentes que tornam nossos projetos possíveis</p>
      </section>

      {/* ======== LISTA DE SUBSISTEMAS ======== */}
      <section className="subsistemas-list">
        <div className="subsistema-card">
          <h2>🛠️ Estrutura e Aerodinâmica</h2>
          <p>
            Desenvolvimento da fuselagem e design aerodinâmico dos foguetes, garantindo estabilidade e performance.
          </p>
        </div>

        <div className="subsistema-card">
          <h2>⚡ Propulsão</h2>
          <p>
            Projeto de motores e sistemas de combustível, incluindo motores híbridos e seguros para competições.
          </p>
        </div>

        <div className="subsistema-card">
          <h2>🛰️ Eletrônica e Sensores</h2>
          <p>
            Desenvolvimento de sistemas de controle, telemetria, sensores e monitoramento durante o voo.
          </p>
        </div>

        <div className="subsistema-card">
          <h2>📡 Comunicação</h2>
          <p>
            Subsistema responsável pelo envio e recepção de dados, garantindo rastreabilidade e segurança.
          </p>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="cta-section">
        <h2>Quer conhecer todos os detalhes?</h2>
        <p>Entre em contato e descubra como cada subsistema é desenvolvido pelo grupo!</p>
        <a href="#" className="btn-contato">📧 Fale Conosco</a>
      </section>

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
  )
}

export default Subsistemas
