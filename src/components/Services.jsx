import './Services.css'

const services = [
  {
    icon: '◈',
    title: 'Desenvolvimento de Software Sob Medida',
    desc: 'Sistemas web e APIs customizadas com .NET, React e Node.js. Do levantamento de requisitos ao deploy em produção, com arquitetura escalável e código limpo.',
    items: ['APIs RESTful e integrações', 'Aplicações web fullstack', 'Sistemas de gestão internos', 'Integrações com ERPs e CRMs'],
    accent: 'cyan',
  },
  {
    icon: '◉',
    title: 'Integração de IA e LLMs',
    desc: 'Implementação de assistentes inteligentes, automação de processos e análise de dados com modelos como Claude, GPT e Llama via AWS Bedrock e APIs nativas.',
    items: ['Chatbots com dados reais da empresa', 'Automação de documentos e relatórios', 'Orquestração de agentes de IA', 'Fine-tuning e RAG customizado'],
    accent: 'violet',
  },
  {
    icon: '◇',
    title: 'Business Intelligence e Analytics',
    desc: 'Dashboards interativos, pipelines de dados e relatórios executivos que transformam dados brutos em insights acionáveis para gestores e times de negócio.',
    items: ['Dashboards e painéis analíticos', 'Conexão com APIs e bancos de dados', 'KPIs e métricas de negócio', 'Publicação e compartilhamento de dados'],
    accent: 'green',
  },
  {
    icon: '△',
    title: 'Automação de Processos',
    desc: 'Eliminamos tarefas manuais repetitivas através de automações inteligentes que integram diferentes sistemas e reduzem erros operacionais.',
    items: ['Automação de relatórios e planilhas', 'Integrações entre plataformas', 'Workflows automatizados', 'Notificações e alertas inteligentes'],
    accent: 'cyan',
  },
  {
    icon: '□',
    title: 'Consultoria Técnica',
    desc: 'Avaliação de arquitetura, escolha de stack tecnológico e planejamento de migração para empresas que precisam evoluir seus sistemas com segurança.',
    items: ['Auditoria de sistemas legados', 'Arquitetura de microsserviços', 'Estratégia de dados e BI', 'Migração para cloud (AWS)'],
    accent: 'violet',
  },
  {
    icon: '✦',
    title: 'Produtos SaaS B2B',
    desc: 'Desenvolvimento completo de produtos SaaS — da ideia ao lançamento. MVP validável em semanas, com modelo de negócio freemium e infraestrutura escalável.',
    items: ['MVP em 4 a 8 semanas', 'Autenticação e multi-tenancy', 'Billing e planos de assinatura', 'Infraestrutura AWS escalável'],
    accent: 'green',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <p className="section-label">Nossos Serviços</p>
          <h2 className="section-title">
            Tudo que sua empresa<br/>precisa para <span>crescer</span>
          </h2>
          <p className="section-desc">
            Da estratégia ao código, da IA ao deploy — entregamos soluções completas
            com a qualidade técnica de uma big tech e a agilidade de uma startup.
          </p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div className={`service-card card accent-${s.accent}`} key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-list">
                {s.items.map(item => (
                  <li key={item}><span className="check">›</span> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
