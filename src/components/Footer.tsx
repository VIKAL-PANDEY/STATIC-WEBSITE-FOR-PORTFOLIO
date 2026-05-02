import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '40px 0',
      }}
    >
      <div
        className="container-main"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left: Brand */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '4px',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>VP</span> · {personal.name}
          </p>
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Built with <Heart size={11} style={{ color: 'var(--accent)', fill: 'var(--accent)' }} /> using React + Vite · © {year}
          </p>
        </div>

        {/* Right: Social links */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { href: personal.github, icon: <Github size={16} />, label: 'GitHub' },
            { href: personal.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: <Mail size={16} />, label: 'Email' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                background: 'var(--surface-glass)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--accent)';
                el.style.color = 'var(--accent)';
                el.style.background = 'var(--accent-dim)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border)';
                el.style.color = 'var(--text-muted)';
                el.style.background = 'var(--surface-glass)';
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
