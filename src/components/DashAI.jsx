import { useState } from 'react'
import './DashAI.css'

const features = [
  {
    id: 'chat',
    label: 'Criação por IA',
    img: '/screenshots/dash-chat.png',
    title: 'Descreva. A IA constrói.',
    desc: 'Digite o que você quer ver e a IA gera o dashboard completo — com gráficos, KPIs e filtros configurados automaticamente. Sem arrastar elemento por elemento.',
    tags: ['Zero código', 'NLP em PT-BR', '< 5 minutos'],
  },
  {
    id: 'dashboard',
    label: 'Dashboard Gerado',
    img: '/screenshots/dash-editor.png',
    title: '31 widgets em segundos.',
    desc: 'O editor visual permite ajustes com drag-and-drop. Cada widget é conectado diretamente às APIs reais da empresa — dados ao vivo, sem importação manual.',
    tags: ['10+ tipos de gráfico', 'Drag & Drop', 'APIs reais'],
  },
  {
    id: 'dark',
    label: 'Modo Publicado',
    img: '/screenshots/dash-dark.png',
    title: 'Publique com um link.',
    desc: 'Dashboards publicados ficam acessíveis por link público, sem necessidade de login. Clientes e parceiros acessam dados em tempo real com filtros interativos.',
    tags: ['Link público', 'Sem login', 'Tempo real'],
  },
  {
    id: 'assistants',
    label: 'Assistentes de IA',
    img: '/screenshots/dash-assistants.png',
    title: 'Especialistas por domínio.',
    desc: 'CFO Assistant, Growth Analyst, People Analytics, Assistente de Vendas — cada um com system prompt, ferramentas e contexto próprio do negócio.',
    tags: ['5 assistentes', 'Tool Router', 'Contexto real'],
  },
  {
    id: 'chat-sales',
    label: 'Chat com Dados',
    img: '/screenshots/dash-sales.png',
    title: 'Pergunte. Receba dados reais.',
    desc: 'O usuário pergunta em português e o assistente consulta as APIs reais respondendo com tabelas, variações percentuais e alertas automáticos de anomalias.',
    tags: ['PT-BR nativo', 'Dados ao vivo', 'Alertas automáticos'],
  },
]

export default function DashAI() {
  const [active, setActive] = useState(0)
  const feat = features[active]

  return (
    <section className="dashai" id="dashai">
      <div className="dashai-inner">
        <div className="dashai-header">
          <p className="section-label">Produto Principal</p>
          <h2 className="section-title">
            <span>Dash AI</span> — Dashboard<br/>Intelligence Platform
          </h2>
          <p className="section-desc">
            A única plataforma que combina geração automática de dashboards por IA
            com assistentes conversacionais especializados — conectado diretamente
            às APIs da empresa, sem código e sem intermediários.
          </p>
          <div className="dashai-badges">
            <div className="badge-item">
              <span className="badge-val">MVP</span>
              <span className="badge-sub">Funcional</span>
            </div>
            <div className="badge-sep"/>
            <div className="badge-item">
              <span className="badge-val">Zero</span>
              <span className="badge-sub">Código</span>
            </div>
            <div className="badge-sep"/>
            <div className="badge-item">
              <span className="badge-val">24+</span>
              <span className="badge-sub">Fontes de dados</span>
            </div>
            <div className="badge-sep"/>
            <div className="badge-item">
              <span className="badge-val">5</span>
              <span className="badge-sub">Assistentes IA</span>
            </div>
          </div>
        </div>

        <div className="dashai-tabs">
          {features.map((f, i) => (
            <button
              key={f.id}
              className={`tab-btn ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="dashai-showcase">
          <div className="showcase-screen">
            <div className="screen-chrome">
              <div className="chrome-dots">
                <span/><span/><span/>
              </div>
              <div className="chrome-url">app.dashai.com.br · {feat.label}</div>
            </div>
            <div className="screen-body">
              <img
                src={feat.img}
                alt={feat.title}
                className="screen-img"
                key={feat.id}
              />
            </div>
          </div>

          <div className="showcase-info">
            <div className="showcase-num">0{active + 1}</div>
            <h3 className="showcase-title">{feat.title}</h3>
            <p className="showcase-desc">{feat.desc}</p>
            <div className="showcase-tags">
              {feat.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="showcase-nav">
              <button
                className="nav-btn"
                onClick={() => setActive(a => Math.max(0, a - 1))}
                disabled={active === 0}
              >← Anterior</button>
              <div className="nav-dots">
                {features.map((_, i) => (
                  <button
                    key={i}
                    className={`nav-dot ${i === active ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
              <button
                className="nav-btn"
                onClick={() => setActive(a => Math.min(features.length - 1, a + 1))}
                disabled={active === features.length - 1}
              >Próximo →</button>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="how-it-works">
          <h3 className="how-title">Como funciona em 3 passos</h3>
          <div className="steps">
            {[
              { n: '01', title: 'Conecte', desc: 'Informe a URL de qualquer API REST da empresa. A plataforma mapeia os campos e aprende o contexto dos dados automaticamente.' },
              { n: '02', title: 'Descreva', desc: 'Digite o que você quer ver. A IA gera widgets, escolhe os melhores gráficos e configura as agregações — em linguagem natural.' },
              { n: '03', title: 'Use e Compartilhe', desc: 'Edite com drag-and-drop, ajuste filtros, adicione assistentes de IA e publique com um link para quem precisar.' },
            ].map(s => (
              <div className="step card" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
