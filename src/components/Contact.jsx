import './Contact.css'

const WA_NUMBER = '5551992275944'

function buildWhatsAppUrl(data) {
  const msg = encodeURIComponent(
    `Olá Marcos! Vi o site da Engine Tec e gostaria de falar sobre um projeto.\n\n` +
    `*Nome:* ${data.nome}\n` +
    `*Empresa:* ${data.empresa || 'Não informado'}\n` +
    `*Email:* ${data.email}\n` +
    `*Serviço:* ${data.servico || 'Não informado'}\n` +
    `*Mensagem:* ${data.mensagem}`
  )
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = {
      nome:     form.nome.value,
      empresa:  form.empresa.value,
      email:    form.email.value,
      servico:  form.servico.value,
      mensagem: form.mensagem.value,
    }
    window.open(buildWhatsAppUrl(data), '_blank')
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="section-label">Contato</p>
          <h2 className="section-title">
            Pronto para transformar<br/>seus <span>dados</span>?
          </h2>
          <p className="section-desc">
            Fale com a gente sobre seu projeto. Respondemos rápido e sem enrolação —
            do primeiro contato ao orçamento em menos de 24 horas.
          </p>
          <div className="contact-links">
            <a href={`https://wa.me/${WA_NUMBER}`} className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="cl-icon">💬</div>
              <div>
                <div className="cl-label">WhatsApp</div>
                <div className="cl-value">+55 51 99227-5944</div>
              </div>
            </a>
            <a href="mailto:marcos.uteich@gmail.com" className="contact-link">
              <div className="cl-icon">✉</div>
              <div>
                <div className="cl-label">Email</div>
                <div className="cl-value">marcos.uteich@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/MarcosUteich/" className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="cl-icon">⌥</div>
              <div>
                <div className="cl-label">GitHub</div>
                <div className="cl-value">github.com/MarcosUteich</div>
              </div>
            </a>
            <a href="https://br.linkedin.com/in/marcos-uteich-30514026" className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="cl-icon">◈</div>
              <div>
                <div className="cl-label">LinkedIn</div>
                <div className="cl-value">linkedin.com/in/marcos-uteich</div>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form card">
          <h3 className="form-title">Enviar mensagem via WhatsApp</h3>
          <div className="wa-hint">
            <span className="wa-icon">💬</span>
            Ao clicar em enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Nome *</label>
                <input name="nome" type="text" placeholder="Seu nome" required />
              </div>
              <div className="field">
                <label>Empresa</label>
                <input name="empresa" type="text" placeholder="Nome da empresa" />
              </div>
            </div>
            <div className="field">
              <label>Email *</label>
              <input name="email" type="email" placeholder="seu@email.com" required />
            </div>
            <div className="field">
              <label>Como podemos ajudar?</label>
              <select name="servico">
                <option value="">Selecione um serviço</option>
                <option>Dash AI — Demo e Teste</option>
                <option>Desenvolvimento de Software</option>
                <option>Integração de IA / LLMs</option>
                <option>Business Intelligence</option>
                <option>Automação de Processos</option>
                <option>Consultoria Técnica</option>
                <option>Produto SaaS</option>
              </select>
            </div>
            <div className="field">
              <label>Mensagem *</label>
              <textarea name="mensagem" rows="4" placeholder="Conte sobre seu projeto ou desafio..." required />
            </div>
            <button type="submit" className="btn-primary btn-wa">
              <span className="wa-btn-icon">💬</span>
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
