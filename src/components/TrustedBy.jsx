import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Thermax Limited',
    sub: 'Execution Partner — 4 Projects',
    accent: '#2563eb'
  },
  {
    name: 'M/s Malti Construction',
    sub: 'JV Partner — Mechanical & C&I',
    accent: '#7c3aed'
  },
  {
    name: 'M/S Atom Power Pvt. Ltd.',
    sub: 'JV Partner — Turbine & Generator',
    accent: '#059669'
  },
  {
    name: 'Piccadaly Sugar & Power',
    sub: 'Client — Mahasamund, CG',
    accent: '#d97706'
  },
  {
    name: 'Rim Jhim Ispat',
    sub: 'Client — Jhonpur, UP',
    accent: '#dc2626'
  },
  {
    name: 'Orient Paper Mill',
    sub: 'Client — Amlai, MP',
    accent: '#0284c7'
  },
  {
    name: 'Donglia Cement',
    sub: 'Client — Zambia (International)',
    accent: '#16a34a'
  }
];

const TrustedBy = () => (
  <section style={{
    padding: '56px 40px',
    background: 'white',
    borderTop: '1px solid #f1f5f9',
    borderBottom: '1px solid #f1f5f9'
  }}>
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>

      {/* LABEL */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 700,
          color: '#94a3b8',
          letterSpacing: 2,
          marginBottom: 36
        }}
      >
        TRUSTED PARTNERS & CLIENTS
      </motion.p>

      {/* SCROLLING STRIP */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* FADE EDGES */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
          background: 'linear-gradient(90deg, white, transparent)',
          zIndex: 2, pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
          background: 'linear-gradient(270deg, white, transparent)',
          zIndex: 2, pointerEvents: 'none'
        }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: 24, width: 'max-content' }}
        >
          {/* Duplicate the list for seamless loop */}
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 14,
                padding: '16px 24px',
                flexShrink: 0,
                minWidth: 240
              }}
            >
              {/* INITIAL BADGE */}
              <div style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: `${p.accent}15`,
                border: `1.5px solid ${p.accent}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: 16,
                fontWeight: 800,
                color: p.accent
              }}>
                {p.name.charAt(0)}
              </div>

              <div>
                <p style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#1e293b',
                  margin: 0,
                  whiteSpace: 'nowrap'
                }}>
                  {p.name}
                </p>
                <p style={{
                  fontSize: 11,
                  color: '#94a3b8',
                  margin: 0,
                  marginTop: 2,
                  whiteSpace: 'nowrap'
                }}>
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustedBy;
