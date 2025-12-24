import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

/* Reusable animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <section
      id="services"
      style={{
        padding: '120px 40px',
        background: '#f9fafb'
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* SECTION HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <h2
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: '#111827',
              marginBottom: 16,
              letterSpacing: '-1px'
            }}
          >
            Our Services
          </h2>
          <p style={{ fontSize: 18, color: '#6b7280' }}>
            Comprehensive engineering solutions for power and cement plant operations
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 40
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
              }}
              style={{
                background: 'white',
                borderRadius: 20,
                padding: 48,
                border: '1px solid #e5e7eb'
              }}
            >
              {/* ICON + TITLE */}
              <div
                style={{
                  display: 'flex',
                  gap: 24,
                  marginBottom: 24
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background: 'rgba(37,99,235,0.1)',
                    borderRadius: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2563eb',
                    flexShrink: 0
                  }}
                >
                  <service.icon size={48} />
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 26,
                      fontWeight: 700,
                      color: '#111827',
                      marginBottom: 8
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: 15,
                  color: '#6b7280',
                  lineHeight: 1.7,
                  marginBottom: 24
                }}
              >
                {service.description}
              </p>

              {/* FEATURES */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  marginBottom: 20
                }}
              >
                {service.features.map((feature, j) => (
                  <div
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontSize: 14,
                      color: '#4b5563'
                    }}
                  >
                    <CheckCircle
                      size={18}
                      color="#2563eb"
                      style={{ flexShrink: 0 }}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <p
                style={{
                  fontSize: 13,
                  color: '#6b7280',
                  fontStyle: 'italic',
                  paddingTop: 16,
                  borderTop: '1px solid #e5e7eb'
                }}
              >
                {service.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
