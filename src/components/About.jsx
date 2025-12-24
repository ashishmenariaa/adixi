import React from 'react';
import { Zap, Factory, Building, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

/* Reusable animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {
  const industries = [
    { Icon: Zap, text: 'Thermal Power Plants' },
    { Icon: Factory, text: 'Cement Manufacturing' },
    { Icon: Building, text: 'Heavy Industries' },
    { Icon: Settings, text: 'Process Plants' }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '120px 40px',
        background: '#f9fafb'
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center'
          }}
        >
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: '#111827',
                marginBottom: 32,
                letterSpacing: '-1px'
              }}
            >
              About Adixi Engineering Services
            </h2>

            <p
              style={{
                fontSize: 17,
                color: '#6b7280',
                lineHeight: 1.8,
                marginBottom: 24
              }}
            >
              Established in 2022, Adixi Engineering Services Private Limited has
              rapidly emerged as a trusted partner for power and cement plants
              across India. With a team of over 300 skilled professionals, we
              deliver comprehensive engineering solutions that set industry
              standards.
            </p>

            <p
              style={{
                fontSize: 17,
                color: '#6b7280',
                lineHeight: 1.8,
                marginBottom: 24
              }}
            >
              Our ISO-certified processes ensure the highest standards in every
              project. From mechanical engineering to advanced control systems,
              civil infrastructure to skilled manpower deployment, we provide
              end-to-end solutions for industrial operations and maintenance.
            </p>

            <p
              style={{
                fontSize: 17,
                color: '#6b7280',
                lineHeight: 1.8,
                marginBottom: 40
              }}
            >
              We specialize in thermal power plants, cement manufacturing
              facilities, and heavy industries, offering reliable O&M and AMC
              services with 24/7 support availability.
            </p>

            {/* HIGHLIGHTS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 32
              }}
            >
              {[
                { title: 'ISO', label: 'Certified Quality' },
                { title: 'Pan India', label: 'Service Coverage' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    borderLeft: '4px solid #2563eb',
                    paddingLeft: 20
                  }}
                >
                  <p
                    style={{
                      fontSize: 36,
                      fontWeight: 800,
                      color: '#111827',
                      marginBottom: 4
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#6b7280',
                      fontWeight: 500
                    }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              borderRadius: 24,
              padding: 60,
              color: 'white'
            }}
          >
            <h3
              style={{
                fontSize: 36,
                fontWeight: 800,
                marginBottom: 40
              }}
            >
              Industries We Serve
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16
              }}
            >
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    background: 'rgba(255,255,255,0.15)',
                    padding: '20px 24px',
                    borderRadius: 12,
                    fontWeight: 600,
                    fontSize: 16
                  }}
                >
                  <industry.Icon size={24} />
                  <span>{industry.text}</span>
                </motion.div>
              ))}
            </div>

            {/* COMMITMENT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                marginTop: 40,
                padding: 24,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 16
              }}
            >
              <h4
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 16
                }}
              >
                Our Commitment
              </h4>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  opacity: 0.9
                }}
              >
                Delivering excellence through skilled workforce, cutting-edge
                technology, and unwavering dedication to safety and quality
                standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
