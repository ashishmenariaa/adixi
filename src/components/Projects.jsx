import React from 'react';
import { MapPin, Briefcase, Users, CheckCircle, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const COMPLETED = [
  {
    project: 'Piccadaly Sugar & Power',
    location: 'Mahasamund, Chhattisgarh',
    scope: '40 TPH Boiler Electrical, C&I Equipment & Instrument Erection & Commissioning',
    partner: 'Thermax Limited',
    international: false,
    highlights: ['Boiler Erection', 'C&I Commissioning', 'Instrument Loop Checking']
  },
  {
    project: 'Donglia Cement',
    location: 'Zambia (International)',
    scope: 'Manpower Supply for Boiler Overhaul (OH)',
    partner: 'Thermax Limited',
    international: true,
    highlights: ['International Deployment', 'Boiler Overhaul', 'Skilled Manpower Supply']
  }
];

const ONGOING = [
  {
    project: 'Rim Jhim Ispat',
    location: 'Jhonpur, Uttar Pradesh',
    scope: 'AMC of 60 MW Power Plant',
    partner: 'Thermax Limited',
    international: false,
    highlights: ['60 MW Plant AMC', 'Mechanical & C&I Maintenance', 'O&M Operations']
  },
  {
    project: 'Orient Paper Mill',
    location: 'Amlai, Madhya Pradesh',
    scope: 'Power Plant AMC — Operations & Maintenance',
    partner: 'Thermax Limited',
    international: false,
    highlights: ['Power Plant AMC', 'Operations & Maintenance', 'Mechanical & C&I Services']
  }
];

const ProjectCard = ({ data, status, delay }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.10)' }}
    style={{
      background: 'white',
      borderRadius: 20,
      padding: 36,
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
      background: status === 'ongoing'
        ? 'linear-gradient(90deg, #f59e0b, #fbbf24)'
        : 'linear-gradient(90deg, #10b981, #34d399)'
    }} />

    {/* STATUS BADGE */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: status === 'ongoing' ? '#fffbeb' : '#ecfdf5',
        color: status === 'ongoing' ? '#d97706' : '#059669',
        fontSize: 12,
        fontWeight: 700,
        padding: '5px 12px',
        borderRadius: 50,
        border: `1px solid ${status === 'ongoing' ? '#fde68a' : '#a7f3d0'}`
      }}>
        {status === 'ongoing'
          ? <><Clock size={12} /> ONGOING</>
          : <><CheckCircle size={12} /> COMPLETED</>
        }
      </span>

      {data.international && (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          background: '#eff6ff',
          color: '#2563eb',
          fontSize: 11,
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: 50
        }}>
          <Globe size={11} /> INTERNATIONAL
        </span>
      )}
    </div>

    {/* PROJECT NAME */}
    <h3 style={{
      fontSize: 22,
      fontWeight: 800,
      color: '#111827',
      marginBottom: 16,
      lineHeight: 1.2
    }}>
      {data.project}
    </h3>

    {/* META */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <MapPin size={15} color="#6b7280" style={{ flexShrink: 0, marginTop: 2 }} />
        <span style={{ fontSize: 14, color: '#4b5563' }}>{data.location}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <Briefcase size={15} color="#6b7280" style={{ flexShrink: 0, marginTop: 2 }} />
        <span style={{ fontSize: 14, color: '#4b5563' }}>{data.scope}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Users size={15} color="#6b7280" style={{ flexShrink: 0 }} />
        <span style={{ fontSize: 14, color: '#2563eb', fontWeight: 600 }}>Partner: {data.partner}</span>
      </div>
    </div>

    {/* HIGHLIGHTS */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {data.highlights.map((h, i) => (
        <span key={i} style={{
          background: '#f1f5f9',
          color: '#374151',
          fontSize: 12,
          fontWeight: 500,
          padding: '5px 12px',
          borderRadius: 50
        }}>
          {h}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" style={{ padding: '120px 40px', background: 'white' }}>
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
          TRACK RECORD
        </span>
        <h2 style={{
          fontSize: 44,
          fontWeight: 800,
          color: '#111827',
          marginBottom: 18,
          letterSpacing: '-1px'
        }}>
          Project Portfolio
        </h2>
        <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 560, margin: '0 auto' }}>
          Delivering successful projects across India and internationally, in partnership with industry leaders
        </p>
      </motion.div>

      {/* COMPLETED */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 48 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{
            width: 40,
            height: 40,
            background: '#ecfdf5',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <CheckCircle size={20} color="#10b981" />
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>Completed Projects</h3>
          <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {COMPLETED.map((p, i) => (
            <ProjectCard key={i} data={p} status="completed" delay={i * 0.1} />
          ))}
        </div>
      </motion.div>

      {/* ONGOING */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{
            width: 40,
            height: 40,
            background: '#fffbeb',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Clock size={20} color="#f59e0b" />
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>Ongoing Projects</h3>
          <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {ONGOING.map((p, i) => (
            <ProjectCard key={i} data={p} status="ongoing" delay={i * 0.1} />
          ))}
        </div>
      </motion.div>

      {/* THERMAX BANNER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          marginTop: 64,
          background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
          borderRadius: 20,
          padding: '40px 52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
          color: 'white'
        }}
      >
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, opacity: 0.8, letterSpacing: 1, marginBottom: 8 }}>
            STRATEGIC EXECUTION PARTNER
          </p>
          <h3 style={{ fontSize: 28, fontWeight: 800 }}>Thermax Limited</h3>
          <p style={{ fontSize: 15, opacity: 0.85, marginTop: 8 }}>
            All three projects executed in partnership with Thermax Limited — a globally recognised engineering group.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {[
            { num: '4', label: 'Projects Together' },
            { num: '3', label: 'States + 1 Country' },
            { num: '100%', label: 'On-Time Delivery' }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 800 }}>{s.num}</div>
              <div style={{ fontSize: 13, opacity: 0.8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
