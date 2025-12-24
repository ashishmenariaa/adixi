import React from 'react';
import { Award, Users, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/* Reusable animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        padding: '160px 40px 120px',
        background: 'linear-gradient(180deg, #f8fbff 0%, #eef6ff 100%)',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 80,
          alignItems: 'center'
        }}
      >
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
              background: '#e0ecff',
              color: '#1e40af',
              padding: '8px 18px',
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 28
            }}
          >
            <Award size={16} />
            ISO Certified • GST: 09ABACA6120H1ZZ
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.12,
              marginBottom: 24,
              letterSpacing: '-1.2px'
            }}
          >
            Engineering Excellence for{' '}
            <span style={{ color: '#2563eb' }}>
              Power & Cement Industries
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              maxWidth: 560,
              fontSize: 18,
              color: '#475569',
              lineHeight: 1.75,
              marginBottom: 40
            }}
          >
            Delivering comprehensive mechanical, control & instrumentation, and
            civil engineering solutions with over 300 skilled professionals
            serving clients across India.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}
          >
            <motion.a
              href="#services"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              style={{
                background: '#2563eb',
                color: 'white',
                padding: '14px 34px',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                boxShadow: '0 8px 20px rgba(37,99,235,0.25)',
                textDecoration: 'none'
              }}
            >
              Our Services <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#careers"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'transparent',
                color: '#2563eb',
                padding: '14px 34px',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                border: '2px solid #2563eb',
                textDecoration: 'none'
              }}
            >
              Join Our Team
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            background: '#2563eb',
            borderRadius: 24,
            padding: 36,
            boxShadow: '0 20px 50px rgba(37,99,235,0.25)',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 20
            }}
          >
            {[
              { Icon: Users, num: '300+', label: 'Skilled Professionals' },
              { Icon: MapPin, num: 'Pan India', label: 'Service Coverage' },
              { Icon: Award, num: 'ISO', label: 'Certified Company' },
              { Icon: Clock, num: '24/7', label: 'Support Available' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  padding: 26,
                  borderRadius: 14,
                  textAlign: 'center'
                }}
              >
                <item.Icon
                  size={36}
                  color="white"
                  style={{ marginBottom: 12 }}
                />
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: 'white',
                    marginBottom: 4
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: 500
                  }}
                >
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* SINCE BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              position: 'absolute',
              bottom: -24,
              left: 32,
              background: 'white',
              borderRadius: 14,
              padding: '18px 28px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#2563eb',
                lineHeight: 1
              }}
            >
              Since 2022
            </div>
            <div
              style={{
                fontSize: 13,
                color: '#64748b',
                fontWeight: 600
              }}
            >
              Growing Strong
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
