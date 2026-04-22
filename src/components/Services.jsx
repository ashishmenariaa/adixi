import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const NEW_SERVICES = ['BESS Services', 'STP / ETP Services'];

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="services"
      style={{ padding: '120px 40px', background: '#f9fafb' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* SECTION HEADER */}
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
            WHAT WE DO
          </span>
          <h2 style={{
            fontSize: 44,
            fontWeight: 800,
            color: '#111827',
            marginBottom: 18,
            letterSpacing: '-1px'
          }}>
            Our Services
          </h2>
          <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 560, margin: '0 auto' }}>
            Comprehensive engineering solutions for power, cement, and industrial plant operations
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32
        }}>
          {services.map((service, i) => {
            const isNew = NEW_SERVICES.includes(service.title);
            const isExpanded = expanded === i;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.09)' }}
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: 36,
                  border: '1px solid #e5e7eb',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default'
                }}
              >
                {/* NEW BADGE */}
                {isNew && (
                  <span style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    background: 'linear-gradient(135deg,#10b981,#059669)',
                    color: 'white',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 50,
                    letterSpacing: 0.5
                  }}>
                    NEW 2025-26
                  </span>
                )}

                {/* ICON */}
                <div style={{
                  width: 64,
                  height: 64,
                  background: 'linear-gradient(135deg, #2563eb15, #3b82f620)',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563eb',
                  marginBottom: 24,
                  flexShrink: 0
                }}>
                  <service.icon size={32} />
                </div>

                {/* TITLE */}
                <h3 style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#111827',
                  marginBottom: 12
                }}>
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p style={{
                  fontSize: 14,
                  color: '#6b7280',
                  lineHeight: 1.7,
                  marginBottom: 20,
                  flexGrow: 1
                }}>
                  {service.description}
                </p>

                {/* FEATURES */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                  {(isExpanded ? service.features : service.features.slice(0, 3)).map((feature, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: 13,
                      color: '#4b5563'
                    }}>
                      <CheckCircle size={15} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* EXPAND TOGGLE */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2563eb',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    borderTop: '1px solid #e5e7eb',
                    width: '100%'
                  }}
                >
                  {isExpanded ? 'Show less' : `+${service.features.length - 3} more capabilities`}
                  <ArrowRight size={14} style={{
                    transform: isExpanded ? 'rotate(270deg)' : 'rotate(90deg)',
                    transition: 'transform 0.2s'
                  }} />
                </button>

                {/* DETAILS */}
                {isExpanded && (
                  <p style={{
                    fontSize: 12,
                    color: '#9ca3af',
                    fontStyle: 'italic',
                    marginTop: 12,
                    lineHeight: 1.6
                  }}>
                    {service.details}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
