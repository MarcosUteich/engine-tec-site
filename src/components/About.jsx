import './About.css'

const pillars = [
  {
    icon: '⚡',
    title: 'Velocidade de Entrega',
    desc: 'Do briefing ao MVP em dias, não em meses. Metodologia ágil com entregas incrementais.',
  },
  {
    icon: '🤖',
    title: 'IA como Motor',
    desc: 'Inteligência artificial integrada em cada solução — não como feature, mas como fundação.',
  },
  {
    icon: '🔗',
    title: 'Integração Real',
    desc: 'Conectamos com as APIs e sistemas que sua empresa já usa. Zero fricção, zero retrabalho.',
  },
  {
    icon: '📊',
    title: 'Dados Acionáveis',
    desc: 'Transformamos números brutos em insights que gestores realmente conseguem usar.',
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-text">
          <p className="section-label">Sobre a Empresa</p>
          <h2 className="section-title">
            Tecnologia que <span>resolve</span>,<br/>não que complica
          </h2>
          <p className="section-desc">
            A Engine Tec nasceu para aproximar gestores dos seus dados. Desenvolvemos software sob medida
            com inteligência artificial integrada — desde dashboards analíticos até automações de processos
            complexos — para empresas que precisam de decisões rápidas baseadas em dados reais.
          </p>
          <p className="section-desc" style={{marginTop: '16px'}}>
            Com foco em PMEs brasileiras, combinamos expertise técnica em .NET, React e AWS com
            orquestração de modelos de linguagem para criar produtos que funcionam desde o primeiro dia.
          </p>
          <div className="about-tags" style={{marginTop: '28px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
            {['.NET 10', 'React', 'AWS Bedrock', 'Claude AI', 'Node.js', 'PostgreSQL'].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="about-pillars">
          {pillars.map(p => (
            <div className="pillar card" key={p.title}>
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
