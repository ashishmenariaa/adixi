import React from 'react';
import { motion } from 'framer-motion';

/* Reusable animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Stats = () => {
  const stats = [
    { number: '300+', label: 'Skilled Professionals' },
    { number: '50+', label: 'Projects Completed' },
    { number: 'ISO', label: 'Certified Quality' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section
      style={{
        padding: '90px 40px',
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        color: 'white'
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 60
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{ textAlign: 'center' }}
            >
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 800,
                  marginBottom: 10,
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.number}
              </div>

              <div
                style={{
                  fontSize: 15,
                  opacity: 0.9,
                  fontWeight: 500
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
