import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data';
import { fadeUp } from '../lib/motion';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Glow blob */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        {/* Available badge */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '32px' }}>
          <span className="badge badge-accent">
            <span className="glow-dot" />
            Available for Opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 className="h1-display" {...fadeUp(0.2)} style={{ marginBottom: '24px' }}>
          <span className="text-gradient">{personal.role}</span>
          <br />
          <span style={{ color: 'var(--text-primary)' }}>& Engineer</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.35)}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            lineHeight: 1.65,
            marginBottom: '40px',
          }}
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}
        >
          <a href="#projects" className="btn-primary" id="hero-cta-projects">
            View Projects
            <ArrowDown size={15} />
          </a>
          <a href="#contact" className="btn-ghost" id="hero-cta-contact">
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.65)}
          style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Find me on
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { href: personal.github, icon: <Github size={18} />, label: 'GitHub' },
              { href: personal.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, icon: <Mail size={18} />, label: 'Email' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                style={{
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  background: 'var(--surface-glass)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-dim)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--surface-glass)';
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} style={{ color: 'var(--text-muted)' }} />
          </motion.div>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
