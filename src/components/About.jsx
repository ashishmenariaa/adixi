import React from 'react';
import { Zap, Factory, Waves, Atom, Sun, Droplets, Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const industries = [
  { Icon: Zap,      text: 'Thermal Power Plants',    sub: 'Full O&M, AMC, Overhaul, C&I, Manpower' },
  { Icon: Waves,    text: 'Hydro Power Plants',       sub: 'Mechanical Maintenance, Electrical, Manpower' },
  { Icon: Atom,     text: 'Nuclear Power Plants',     sub: 'Instrumentation, Piping, Structural Works' },
  { Icon: Sun,      text: 'Renewable Energy Plants',  sub: 'Erection, Commissioning, BESS Services' },
  { Icon: Factory,  text: 'Cement Plants',            sub: 'Boiler O&M, C&I AMC, Manpower, Overhaul' },
  { Icon: Droplets, text: 'Industrial Process Plants', sub: 'STP/ETP AMC, Piping, Mechanical Maintenance' }
];

const About = () => (
  <section id="about" style={{ padding: '120px 40px', background: '#f9fafb' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>

      {/* SECTION LABEL */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
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
          WHO WE ARE
        </span>
        <h2 style={{
          fontSize: 44,
          fontWeight: 800,
          color: '#111827',
          marginBottom: 18,
          letterSpacing: '-1px'
        }}>
          About Adixi Engineering Services
        </h2>
        <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 700, margin: '0 auto' }}>
          A premier engineering firm delivering end-to-end solutions for power, cement,
          and industrial plants across India and internationally.
        </p>
      </motion.div>

      {/* MISSION & VISION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          marginBottom: 80
        }}
      >
        {[
          {
            Icon: Target,
            title: 'Our Mission',
            color: '#2563eb',
            bg: '#eff6ff',
            text: 'To deliver state-of-the-art engineering services ensuring the efficient and sustainable operation of power and cement plants — contributing to a greener, safer, and more reliable energy future.'
          },
          {
            Icon: Eye,
            title: 'Our Vision',
            color: '#7c3aed',
            bg: '#f5f3ff',
            text: 'To be a globally recognised leader in innovative, sustainable, technology-driven engineering solutions for the power and process industry — driving progress through expertise and integrity.'
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            style={{
              background: item.bg,
              borderRadius: 20,
              padding: '40px 44px',
              borderLeft: `4px solid ${item.color}`
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 20
            }}>
              <div style={{
                width: 44,
                height: 44,
                background: item.color,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <item.Icon size={22} color="white" />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111827' }}>{item.title}</h3>
            </div>
            <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.8 }}>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ABOUT TEXT + INDUSTRIES */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'start'
      }}>
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{
            fontSize: 34,
            fontWeight: 800,
            color: '#111827',
            marginBottom: 28,
            letterSpacing: '-0.5px'
          }}>
            Your Trusted Engineering Partner
          </h3>

          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, marginBottom: 20 }}>
            Adixi Engineering Services Private Limited (AESPL) is a premier engineering firm
            specialising in Mechanical, Control &amp; Instrumentation (C&amp;I), and Civil engineering
            services for power and cement plants.
          </p>

          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, marginBottom: 20 }}>
            Established with a commitment to excellence and innovation, AESPL has rapidly
            positioned itself as a trusted partner for high-quality engineering solutions —
            delivering end-to-end project execution, manpower supply, operations &amp; maintenance,
            and annual maintenance contracts for thermal, hydro, and industrial plants.
          </p>

          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, marginBottom: 40 }}>
            ISO 9001:2015 certified, with a proven track record in India and internationally,
            and ongoing partnerships with industry leaders like Thermax Limited.
          </p>

          {/* HIGHLIGHTS */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { title: 'ISO 9001:2015', label: 'Certified Quality' },
              { title: 'Pan India', label: 'Service Coverage' },
              { title: '300+', label: 'Skilled Professionals' },
              { title: 'International', label: 'Project Experience' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                style={{
                  borderLeft: '4px solid #2563eb',
                  paddingLeft: 20,
                  paddingTop: 4,
                  paddingBottom: 4
                }}
              >
                <p style={{ fontSize: 26, fontWeight: 800, color: '#111827', marginBottom: 4 }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — INDUSTRIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
            borderRadius: 24,
            padding: '52px 48px',
            color: 'white'
          }}
        >
          <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>
            Industries We Serve
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  background: 'rgba(255,255,255,0.12)',
                  padding: '16px 20px',
                  borderRadius: 12
                }}
              >
                <industry.Icon size={22} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{industry.text}</p>
                  <p style={{ fontSize: 12, opacity: 0.8 }}>{industry.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
