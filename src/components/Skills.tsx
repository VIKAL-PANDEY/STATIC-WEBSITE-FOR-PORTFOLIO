import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Globe, Database } from 'lucide-react';
import { skills } from '../data';
import { fadeUp } from '../lib/motion';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={18} />,
  Globe: <Globe size={18} />,
  Database: <Database size={18} />,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const anim = (delay = 0) => inView ? fadeUp(delay) : { initial: { opacity: 0 } };

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container-main">
        <motion.p className="section-label" {...anim(0)}>
          Skills & Technologies
        </motion.p>
        <motion.h2
          className="h2-section"
          {...anim(0.08)}
          style={{ marginBottom: '56px' }}
        >
          Tools of the trade.
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {skills.map((group, gi) => (
            <motion.div key={group.category} className="card" {...anim(0.15 + gi * 0.1)} style={{ padding: '28px' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'var(--accent-dim)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0,
                }}>
                  {iconMap[group.icon]}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.88rem',
                  fontWeight: 700, letterSpacing: '0.04em',
                  textTransform: 'uppercase', color: 'var(--text-secondary)',
                }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + gi * 0.1 + si * 0.04, duration: 0.35, ease: 'easeOut' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          {...anim(0.5)}
          style={{
            marginTop: '48px', padding: '20px 0',
            borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
            overflow: 'hidden', position: 'relative',
          }}
        >
          <div style={{ display: 'flex', gap: '48px', animation: 'marquee 20s linear infinite', width: 'max-content' }}>
            {[...skills.flatMap(s => s.items), ...skills.flatMap(s => s.items)].map((item, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap',
              }}>
                {item}
              </span>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
