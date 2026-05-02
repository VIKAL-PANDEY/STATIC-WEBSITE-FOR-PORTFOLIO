import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { personal } from '../data';
import { fadeUp } from '../lib/motion';

const contactLinks = [
  {
    id: 'contact-github',
    href: personal.github,
    icon: <Github size={20} />,
    label: 'GitHub',
    handle: '@VIKAL-PANDEY',
    description: 'See my code',
    color: '#a78bfa',
  },
  {
    id: 'contact-linkedin',
    href: personal.linkedin,
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    handle: 'vikal-pandey',
    description: 'Connect professionally',
    color: '#60a5fa',
  },
  {
    id: 'contact-email',
    href: `mailto:${personal.email}`,
    icon: <Mail size={20} />,
    label: 'Email',
    handle: personal.email,
    description: 'Send a message',
    color: '#34d399',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const anim = (delay = 0) => inView ? fadeUp(delay) : { initial: { opacity: 0 } };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container-main">
        {/* Hero CTA */}
        <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative' }}>
          <motion.p
            className="section-label"
            style={{ justifyContent: 'center', display: 'flex' }}
            {...anim(0)}
          >
            Let's Work Together
          </motion.p>

          <motion.h2
            {...anim(0.1)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '20px',
              color: 'var(--text-primary)',
            }}
          >
            Have a project?
            <br />
            <span className="text-gradient">Let's build it.</span>
          </motion.h2>

          <motion.p
            {...anim(0.18)}
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              maxWidth: '420px',
              margin: '0 auto 32px',
            }}
          >
            I'm open to internships, collaborations, and full-time roles. Reach out via any channel below.
          </motion.p>

          <motion.div {...anim(0.25)}>
            <a href={`mailto:${personal.email}`} id="contact-cta-email" className="btn-primary"
              style={{ fontSize: '0.95rem', padding: '14px 32px' }}>
              <Send size={16} />
              Send me an email
            </a>
          </motion.div>
        </div>

        {/* Contact cards */}
        <motion.div
          {...anim(0.35)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          {contactLinks.map(link => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-card"
              style={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: `${link.color}15`, border: `1px solid ${link.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: link.color, marginBottom: '12px',
              }}>
                {link.icon}
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                {link.label}
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 500 }}>
                {link.handle}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                {link.description}
              </p>
            </a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.p
          {...anim(0.5)}
          style={{
            textAlign: 'center', marginTop: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)',
          }}
        >
          <MapPin size={13} />
          Based in {personal.location} · Open to remote globally
        </motion.p>
      </div>
    </section>
  );
}
