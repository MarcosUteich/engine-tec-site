import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Scan line */}
      <div className="scan-line" />

      <div className="hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Engine Tec · Tecnologia &amp; Inteligência Artificial</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-line-1">Transforme Dados</span>
          <span className="hero-line-2">em <em>Decisões</em></span>
          <span className="hero-line-3">Inteligentes</span>
        </h1>

        <p className="hero-desc">
          Desenvolvemos soluções de software com IA integrada que automatizam processos,
          revelam insights e aceleram o crescimento das empresas brasileiras.
        </p>

        <div className="hero-actions">
          <a href="#dashai" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Conhecer o Dash AI
          </a>
          <a href="#services" className="btn-secondary">Ver Serviços</a>
        </div>

        <div className="hero-stats">
          {[
            { value: '24+', label: 'Fontes de Dados' },
            { value: '10+', label: 'Tipos de Gráficos' },
            { value: '5',   label: 'Assistentes de IA' },
            { value: '<5m', label: 'Deploy em Minutos' },
          ].map(s => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating mock terminal */}
      <div className="hero-terminal">
        <div className="terminal-bar">
          <span className="tb-dot red"/><span className="tb-dot yellow"/><span className="tb-dot green"/>
          <span className="tb-title">dash-ai · assistente</span>
        </div>
        <div className="terminal-body">
          <div className="t-line"><span className="t-prompt">›</span> <span className="t-cmd">crie um dashboard de vendas por categoria</span></div>
          <div className="t-line t-resp"><span className="t-ai">AI</span> Analisando APIs disponíveis...</div>
          <div className="t-line t-resp"><span className="t-ai">AI</span> 31 widgets gerados com sucesso ✓</div>
          <div className="t-line t-resp"><span className="t-ai">AI</span> Dashboard publicado → <span className="t-link">dash.ai/pub/vendas</span></div>
          <div className="t-line t-cursor"><span className="t-prompt">›</span> <span className="cursor-blink">_</span></div>
        </div>
      </div>
    </section>
  )
}
