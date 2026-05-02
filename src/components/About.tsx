import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Zap } from 'lucide-react';
import { personal, education } from '../data';
import { fadeUp } from '../lib/motion';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const anim = (delay = 0) => inView ? fadeUp(delay) : { initial: { opacity: 0 } };

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px' }}>
          {/* Left: Text */}
          <div>
            <motion.p className="section-label" {...anim(0)}>
              About Me
            </motion.p>
            <motion.h2
              className="h2-section"
              {...anim(0.1)}
              style={{ marginBottom: '32px' }}
            >
              Algorithms meet
              <br />
              <span className="text-gradient">product thinking.</span>
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {personal.about.map((para, i) => (
                <motion.p
                  key={i}
                  {...anim(0.15 + i * 0.1)}
                  style={{ fontSize: '0.97rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Meta chips */}
            <motion.div
              {...anim(0.45)}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}
            >
              {[
                { icon: <MapPin size={13} />, text: personal.location },
                { icon: <Calendar size={13} />, text: education.period },
                { icon: <Zap size={13} />, text: 'Open to Internships' },
              ].map(chip => (
                <span
                  key={chip.text}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    background: 'var(--surface-glass)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>{chip.icon}</span>
                  {chip.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Education card */}
          <motion.div {...anim(0.3)}>
            <div
              className="card"
              style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Accent corner glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle at top right, var(--accent-glow), transparent 70%)',
                }}
              />

              <p style={{
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px',
              }}>
                Education
              </p>
              <h3 className="h3-card" style={{ marginBottom: '4px', lineHeight: 1.3 }}>
                {education.degree}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                {education.institution}
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                {education.period}
              </p>
              <div style={{ height: '1px', background: 'var(--border)', marginBottom: '20px' }} />
              <p style={{
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px',
              }}>
                Key Courses
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {education.highlights.map(h => (
                  <span key={h} className="tag-chip">{h}</span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '12px' }}>
              {[
                { value: '2+', label: 'Projects Shipped' },
                { value: '5+', label: 'Languages Known' },
                { value: '∞',  label: 'Problems Solved' },
              ].map(stat => (
                <div key={stat.label} className="card" style={{ padding: '16px', textAlign: 'center' }}>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: '1.6rem',
                    fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em',
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '2px', lineHeight: 1.3 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
