import React from 'react';
import { Wrench, Zap, Handshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const partners = [
  {
    name: 'M/s Malti Construction',
    type: 'Joint Venture Partner',
    specialisation: 'Mechanical and C&I Maintenance',
    description: 'Leading Mechanical and Control & Instrumentation Maintenance Service Provider with extensive field execution experience across power and industrial plants.',
    Icon: Wrench,
    color: '#2563eb',
    bg: '#eff6ff',
    capabilities: [
      'Mechanical Plant Maintenance',
      'C&I Field Execution',
      'Industrial Plant Services',
      'Equipment Overhaul & Repair'
    ]
  },
  {
    name: 'M/S Atom Power Pvt. Ltd.',
    type: 'Joint Venture Partner',
    specialisation: 'Turbine & Generator Maintenance',
    description: 'Leading Turbine and Generator Maintenance Service Provider specialising in turbine overhaul, precision alignment, and dynamic balancing for power generation units.',
    Icon: Zap,
    color: '#7c3aed',
    bg: '#f5f3ff',
    capabilities: [
      'Turbine Overhaul & Maintenance',
      'Generator Maintenance',
      'Precision Alignment Services',
      'Dynamic Balancing'
    ]
  }
];

const Partnerships = () => (
  <section id="partnerships" style={{ padding: '120px 40px', background: '#f9fafb' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>

      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 72 }}
      >
        <span style={{
          display: 'inline-block',
          background: '#e0ecff',
          color: '#1e40af',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 1,
          padding: '6px 18px',
          borderRadius: 50,
          marginBottom: 16
        }}>
          JOINT VENTURES
        </span>
        <h2 style={{
          fontSize: 44,
          fontWeight: 800,
          color: '#111827',
          marginBottom: 18,
          letterSpacing: '-1px'
        }}>
          Our Partnerships
        </h2>
        <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 560, margin: '0 auto' }}>
          Collaborating with specialised partners to deliver comprehensive, best-in-class engineering outcomes
        </p>
      </motion.div>

      {/* PARTNER CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, marginBottom: 64 }}>
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.10)' }}
            style={{
              background: 'white',
              borderRadius: 24,
              padding: '48px 44px',
              border: '1px solid #e5e7eb',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* TOP ACCENT */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: 4,
              background: `linear-gradient(90deg, ${partner.color}, ${partner.color}80)`
            }} />

            {/* ICON + TYPE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{
                width: 56,
                height: 56,
                background: partner.bg,
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <partner.Icon size={28} color={partner.color} />
              </div>
              <div>
                <p style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: partner.color,
                  letterSpacing: 1,
                  marginBottom: 4
                }}>
                  {partner.type.toUpperCase()}
                </p>
                <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>
                  {partner.specialisation}
                </p>
              </div>
            </div>

            {/* PARTNER NAME */}
            <h3 style={{
              fontSize: 26,
              fontWeight: 800,
              color: '#111827',
              marginBottom: 16,
              lineHeight: 1.2
            }}>
              {partner.name}
            </h3>

            {/* DESCRIPTION */}
            <p style={{
              fontSize: 15,
              color: '#6b7280',
              lineHeight: 1.75,
              marginBottom: 28
            }}>
              {partner.description}
            </p>

            {/* CAPABILITIES */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {partner.capabilities.map((cap, j) => (
                <div key={j} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 14,
                  color: '#374151'
                }}>
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: partner.color,
                    flexShrink: 0
                  }} />
                  {cap}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* THERMAX SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'white',
          borderRadius: 24,
          padding: '48px 52px',
          border: '2px solid #e0ecff',
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          flexWrap: 'wrap'
        }}
      >
        <div style={{
          width: 64,
          height: 64,
          background: '#eff6ff',
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Handshake size={32} color="#2563eb" />
        </div>

        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#2563eb', letterSpacing: 1, marginBottom: 6 }}>
            EXECUTION PARTNER
          </p>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: '#111827', marginBottom: 10 }}>
            Thermax Limited
          </h3>
          <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7 }}>
            AESPL executes projects in partnership with Thermax Limited — a globally recognised, multi-billion-dollar engineering and chemical conglomerate. Together we have delivered projects across India and internationally (Zambia), covering boiler commissioning, AMC, and manpower supply.
          </p>
        </div>

        <a
          href="#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#2563eb',
            color: 'white',
            padding: '14px 28px',
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}
        >
          View Projects <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Partnerships;
