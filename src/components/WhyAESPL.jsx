import React from 'react';
import {
  Users, Globe, Handshake, Lightbulb, Heart, Leaf, ShieldCheck, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const differentiators = [
  {
    Icon: Users,
    title: 'Expert Team',
    description: 'Skilled engineers and technicians with deep power sector knowledge and hands-on field execution experience.',
    color: '#2563eb',
    bg: '#eff6ff'
  },
  {
    Icon: Globe,
    title: 'Proven Track Record',
    description: 'Successful project delivery across India and internationally, with completed assignments in Zambia alongside Thermax Limited.',
    color: '#059669',
    bg: '#ecfdf5'
  },
  {
    Icon: Handshake,
    title: 'Reputed Partners',
    description: 'Executing projects with Thermax Limited and other industry leaders, ensuring best-in-class delivery standards.',
    color: '#7c3aed',
    bg: '#f5f3ff'
  },
  {
    Icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Modern technology and cutting-edge methodologies for advanced, future-ready, cost-effective engineering outcomes.',
    color: '#d97706',
    bg: '#fffbeb'
  },
  {
    Icon: Heart,
    title: 'Client-Centric',
    description: 'Dedicated to understanding and meeting each client\'s unique requirements with personalised attention and service.',
    color: '#dc2626',
    bg: '#fef2f2'
  },
  {
    Icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Committed to environmentally responsible engineering — promoting long-term ecological balance in all projects.',
    color: '#16a34a',
    bg: '#f0fdf4'
  },
  {
    Icon: ShieldCheck,
    title: 'HSE Focused',
    description: 'Unwavering commitment to Health, Safety & Environment. Mandatory PPE, toolbox talks, mock drills and zero-tolerance for unsafe acts.',
    color: '#0284c7',
    bg: '#f0f9ff'
  }
];

const WhyAESPL = () => (
  <section id="why" style={{ padding: '120px 40px', background: 'white' }}>
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
          OUR DIFFERENTIATORS
        </span>
        <h2 style={{
          fontSize: 44,
          fontWeight: 800,
          color: '#111827',
          marginBottom: 18,
          letterSpacing: '-1px'
        }}>
          Why Choose AESPL?
        </h2>
        <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 580, margin: '0 auto' }}>
          Seven reasons why leading power and cement companies trust us to deliver
        </p>
      </motion.div>

      {/* GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 28,
        marginBottom: 72
      }}>
        {differentiators.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
            style={{
              background: '#fafafa',
              borderRadius: 18,
              padding: '32px 28px',
              border: '1px solid #e5e7eb'
            }}
          >
            <div style={{
              width: 52,
              height: 52,
              background: item.bg,
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20
            }}>
              <item.Icon size={26} color={item.color} />
            </div>

            <h3 style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#111827',
              marginBottom: 12
            }}>
              {item.title}
            </h3>

            <p style={{
              fontSize: 13,
              color: '#6b7280',
              lineHeight: 1.7
            }}>
              {item.description}
            </p>
          </motion.div>
        ))}

        {/* CTA CARD */}
        <motion.a
          href="#contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.56 }}
          whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(37,99,235,0.25)' }}
          style={{
            background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
            borderRadius: 18,
            padding: '32px 28px',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'white', marginBottom: 16 }}>
              Ready to work together?
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
              Tell us about your project and our team will respond within 24 hours.
            </p>
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 28,
            background: 'white',
            color: '#1e40af',
            padding: '10px 18px',
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 13,
            width: 'fit-content'
          }}>
            Get In Touch <ArrowRight size={14} />
          </div>
        </motion.a>
      </div>

      {/* CERTIFICATIONS BAR */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
          borderRadius: 20,
          padding: '36px 52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 32,
          border: '1px solid #e2e8f0'
        }}
      >
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#64748b', letterSpacing: 1, marginBottom: 6 }}>
            CERTIFICATIONS & REGISTRATIONS
          </p>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111827' }}>
            Quality You Can Trust
          </h3>
        </div>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { label: 'Quality Management', value: 'ISO 9001:2015' },
            { label: 'GST Registration', value: '09ABACA6120H1ZZ' },
            { label: 'Reg. No.', value: '09ABACA6120H1ZZ' }
          ].map((cert, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 18, fontWeight: 800, color: '#1e40af' }}>{cert.value}</p>
              <p style={{ fontSize: 12, color: '#6b7280', fontWeight: 500 }}>{cert.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyAESPL;
