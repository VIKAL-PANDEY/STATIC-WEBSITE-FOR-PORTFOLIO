import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Lightbulb, Wrench } from 'lucide-react';
import { projects } from '../data';
import { fadeUp } from '../lib/motion';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const anim = (delay = 0) => inView ? fadeUp(delay) : { initial: { opacity: 0 } };

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container-main">
        <motion.p className="section-label" {...anim(0)}>
          Selected Work
        </motion.p>
        <motion.h2 className="h2-section" {...anim(0.08)} style={{ marginBottom: '12px' }}>
          Problems I've solved.
        </motion.h2>
        <motion.p
          {...anim(0.15)}
          style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', marginBottom: '56px', maxWidth: '460px' }}
        >
          Every project starts with a real problem. Here's how I approached them.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {projects.map((project, pi) => (
            <ProjectCard key={project.id} project={project} index={pi} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const anim = (delay = 0) => inView ? fadeUp(delay) : { initial: { opacity: 0 } };

  return (
    <motion.article
      {...anim(0.2 + index * 0.12)}
      className="card"
      style={{ padding: '0', overflow: 'hidden', position: 'relative' }}
    >
      {/* Top accent bar */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div style={{ padding: '32px' }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          marginBottom: '28px', flexWrap: 'wrap', gap: '12px',
        }}>
          <div>
            {project.featured && (
              <span className="badge badge-accent" style={{ marginBottom: '10px', display: 'inline-flex' }}>
                Featured
              </span>
            )}
            <h3 className="h3-card" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', marginBottom: '4px' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{project.subtitle}</p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`} className="btn-ghost"
                style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                <Github size={14} /> Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                aria-label={`${project.title} live demo`} className="btn-primary"
                style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        </div>

        {/* Problem / Solution */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px', marginBottom: '28px',
        }}>
          <div style={{
            padding: '18px', background: 'rgba(239,68,68,0.06)',
            border: '1px solid rgba(239,68,68,0.12)', borderRadius: '10px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Lightbulb size={13} style={{ color: '#f87171' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f87171' }}>
                Problem
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {project.problem}
            </p>
          </div>

          <div style={{
            padding: '18px', background: 'rgba(34,197,94,0.06)',
            border: '1px solid rgba(34,197,94,0.12)', borderRadius: '10px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Wrench size={13} style={{ color: '#4ade80' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4ade80' }}>
                Solution
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <ul style={{
          listStyle: 'none', display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '8px', marginBottom: '24px',
        }}>
          {project.highlights.map(h => (
            <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <ArrowRight size={13} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.stack.map(tech => (
            <span key={tech} className="tag-chip">{tech}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
