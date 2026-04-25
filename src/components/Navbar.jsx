import { useState } from 'react'
import Logo from './Logo'
import './Navbar.css'

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'Sobre' },
    { href: '#dashai', label: 'Dash AI' },
    { href: '#services', label: 'Serviços' },
    { href: '#contact', label: 'Contato' },
  ]
  return (
    <nav className={`navbar ${scrollY > 60 ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo"><Logo size={48} /></a>
        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li><a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Falar Conosco</a></li>
        </ul>
        <button className="burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}
