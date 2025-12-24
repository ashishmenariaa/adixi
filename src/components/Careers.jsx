import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { positions } from '../data/positions';

const Careers = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form connected to backend ✔');
  };

  return (
    <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 12 }}>
            Careers at Adixi
          </h2>
          <p style={{ color: '#64748b', fontSize: 18 }}>
            Join our growing engineering workforce across India
          </p>
        </div>

        {/* OPENINGS */}
        <div style={{ marginBottom: 70 }}>
          <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 24 }}>
            Current Openings
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16
            }}
          >
            {positions.map((p, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  padding: '14px 18px',
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.05)'
                }}
              >
                <CheckCircle size={18} color="#2563eb" />
                <span style={{ fontSize: 15 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FORM CARD */}
        <div
          style={{
            background: 'white',
            borderRadius: 24,
            padding: 50,
            boxShadow: '0 30px 60px rgba(0,0,0,0.08)'
          }}
        >
          <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 30 }}>
            Submit Your Application
          </h3>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20
              }}
            >
              <Input name="name" placeholder="Full Name" onChange={handleChange} />
              <Input name="email" type="email" placeholder="Email Address" onChange={handleChange} />
              <Input name="phone" placeholder="Phone Number" onChange={handleChange} />

              <select
                name="position"
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Select Position</option>
                {positions.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </select>
            </div>

            <Input
              name="experience"
              placeholder="Experience (e.g. 3 years)"
              onChange={handleChange}
              style={{ marginTop: 20 }}
            />

            {/* FILE */}
            <div
              style={{
                marginTop: 20,
                padding: 18,
                border: '2px dashed #cbd5f5',
                borderRadius: 14
              }}
            >
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              style={{
                marginTop: 30,
                width: '100%',
                padding: 18,
                borderRadius: 14,
                border: 'none',
                background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
                color: 'white',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Submit Application <ArrowRight size={18} style={{ marginLeft: 6 }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* Reusable Input */
const inputStyle = {
  padding: '14px 16px',
  borderRadius: 12,
  border: '1px solid #e5e7eb',
  fontSize: 15,
  outline: 'none'
};

const Input = ({ name, type = 'text', placeholder, onChange, style }) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    required
    style={{ ...inputStyle, ...style }}
  />
);

export default Careers;
