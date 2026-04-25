import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line"/>
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo size={28}/>
          <p className="footer-tagline">Tecnologia que transforma dados em decisões.</p>
          <p className="footer-copy">© {new Date().getFullYear()} Engine Tec. Todos os direitos reservados.</p>
        </div>
        <div className="footer-links">
          <div className="fl-col">
            <span className="fl-head">Produto</span>
            <a href="#dashai">Dash AI</a>
            <a href="#dashai">Funcionalidades</a>
            <a href="#dashai">Como funciona</a>
          </div>
          <div className="fl-col">
            <span className="fl-head">Serviços</span>
            <a href="#services">Desenvolvimento</a>
            <a href="#services">IA & LLMs</a>
            <a href="#services">BI & Analytics</a>
          </div>
          <div className="fl-col">
            <span className="fl-head">Contato</span>
            <a href="mailto:marcos.uteich@gmail.com">Email</a>
            <a href={`https://wa.me/5551992275944`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://github.com/MarcosUteich/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://br.linkedin.com/in/marcos-uteich-30514026" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-mono">// Engine Tec · Built with React + Vite · Powered by Claude AI</span>
      </div>
    </footer>
  )
}
