import React from 'react';
import { Award, Users, MapPin, Clock, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

/* Floating orb config */
const orbs = [
  { w: 480, h: 480, top: '-120px', left: '-100px', color: 'rgba(37,99,235,0.10)' },
  { w: 360, h: 360, top: '60px',  right: '-80px',  color: 'rgba(96,165,250,0.12)' },
  { w: 280, h: 280, bottom: '-60px', left: '38%', color: 'rgba(30,64,175,0.08)' }
];

const Hero = () => (
  <section
    id="home"
    style={{
      padding: '160px 40px 140px',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f2ff 40%, #f5f9ff 100%)'
    }}
  >
    {/* MESH GRADIENT ORBS */}
    {orbs.map((orb, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          width: orb.w,
          height: orb.h,
          top: orb.top,
          left: orb.left,
          right: orb.right,
          bottom: orb.bottom,
          background: orb.color,
          borderRadius: '50%',
          filter: 'blur(72px)',
          pointerEvents: 'none'
        }}
      />
    ))}

    {/* DOT GRID PATTERN */}
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle, #2563eb18 1px, transparent 1px)',
      backgroundSize: '36px 36px',
      pointerEvents: 'none'
    }} />

    {/* DIAGONAL LINES ACCENT (top-right) */}
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: 320,
      height: 320,
      backgroundImage: 'repeating-linear-gradient(45deg, #2563eb0a 0px, #2563eb0a 1px, transparent 1px, transparent 12px)',
      pointerEvents: 'none'
    }} />

    <div style={{
      maxWidth: 1400,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 80,
      alignItems: 'center',
      position: 'relative',
      zIndex: 1
    }}>
      {/* LEFT CONTENT */}
      <div>
        {/* TRUST BADGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'white',
            color: '#1e40af',
            padding: '8px 18px',
            borderRadius: 50,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 28,
            boxShadow: '0 2px 12px rgba(37,99,235,0.15)',
            border: '1px solid #dbeafe'
          }}
        >
          <Award size={15} color="#2563eb" />
          ISO 9001:2015 Certified &nbsp;·&nbsp; GST: 09ABACA6120H1ZZ
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-1.5px'
          }}
        >
          Engineering Excellence{' '}
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            for Power & Cement
          </span>
          <br />
          Industries
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: 540,
            fontSize: 17,
            color: '#475569',
            lineHeight: 1.8,
            marginBottom: 40
          }}
        >
          Delivering comprehensive Mechanical, Control &amp; Instrumentation, and Civil
          engineering solutions with 300+ skilled professionals across India and internationally.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 52 }}
        >
          <motion.a
            href="#services"
            whileHover={{ y: -2, boxShadow: '0 16px 32px rgba(37,99,235,0.35)' }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: 'white',
              padding: '15px 36px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 15,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 8px 24px rgba(37,99,235,0.28)',
              textDecoration: 'none'
            }}
          >
            Our Services <ArrowRight size={17} />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'white',
              color: '#1e40af',
              padding: '15px 36px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 15,
              border: '2px solid #dbeafe',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* TRUST INDICATORS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}
        >
          {[
            { label: 'Thermax Limited', sub: 'Execution Partner' },
            { label: 'Pan India + Intl.', sub: 'Project Reach' },
            { label: '4 Projects', sub: 'Delivered / Ongoing' }
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {i > 0 && <div style={{ width: 1, height: 32, background: '#cbd5e1' }} />}
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', margin: 0 }}>{t.label}</p>
                <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>{t.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT STATS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ position: 'relative' }}
      >
        {/* MAIN CARD */}
        <div style={{
          background: 'linear-gradient(145deg, #1e40af 0%, #2563eb 60%, #3b82f6 100%)',
          borderRadius: 28,
          padding: 40,
          boxShadow: '0 24px 60px rgba(37,99,235,0.30)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* CARD INNER PATTERN */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            top: -60, right: -60,
            width: 200, height: 200,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '50%'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
            position: 'relative',
            zIndex: 1
          }}>
            {[
              { Icon: Users,  num: '300+',     label: 'Skilled Professionals' },
              { Icon: MapPin, num: 'Pan India', label: 'Service Coverage' },
              { Icon: Shield, num: 'ISO',       label: '9001:2015 Certified' },
              { Icon: Clock,  num: '24/7',      label: 'Support Available' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, background: 'rgba(255,255,255,0.20)' }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'rgba(255,255,255,0.13)',
                  padding: '24px 20px',
                  borderRadius: 16,
                  textAlign: 'center',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}
              >
                <item.Icon size={32} color="white" style={{ marginBottom: 12, opacity: 0.9 }} />
                <div style={{ fontSize: 26, fontWeight: 800, color: 'white', marginBottom: 4 }}>
                  {item.num}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.80)', fontWeight: 500 }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SINCE BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            position: 'absolute',
            bottom: -22,
            left: 32,
            background: 'white',
            borderRadius: 14,
            padding: '16px 26px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
            border: '1px solid #e2e8f0'
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: '#2563eb', lineHeight: 1 }}>
            Since 2024
          </div>
          <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, marginTop: 4 }}>
            Growing Strong
          </div>
        </motion.div>

        {/* SECTORS BADGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            position: 'absolute',
            top: -18,
            right: 24,
            background: 'white',
            borderRadius: 14,
            padding: '14px 20px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: '#1e40af', lineHeight: 1 }}>6+</div>
          <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600, marginTop: 4 }}>
            Sectors Served
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
