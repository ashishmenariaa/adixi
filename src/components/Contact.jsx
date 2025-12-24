import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error();

      alert('Message sent successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <section id="contact" style={{ padding: '120px 40px', background: 'white' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: '#111827', marginBottom: 16 }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: 18, color: '#6b7280' }}>
            We're here to answer your questions and discuss your project needs
          </p>
        </div>

        {/* INFO CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
          marginBottom: 80
        }}>
          {[
            { icon: <Mail />, title: 'Email Us', value: 'careers@adixi.co.in' },
            { icon: <Phone />, title: 'Call Us', value: '+91 98969 02045' },
            { icon: <MapPin />, title: 'Visit Us', value: 'Gurugram, Haryana, India' }
          ].map((item, i) => (
            <div key={i} style={{
              background: '#f9fafb',
              borderRadius: 20,
              padding: 48,
              textAlign: 'center'
            }}>
              <div style={{
                width: 72,
                height: 72,
                background: 'rgba(37,99,235,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                color: '#2563eb'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>{item.title}</h3>
              <p style={{ fontSize: 15, color: '#2563eb', marginTop: 8 }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
          borderRadius: 24,
          padding: 80,
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h3 style={{ fontSize: 32, fontWeight: 700, textAlign: 'center', marginBottom: 16 }}>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <Input name="name" label="Your Name *" value={form.name} onChange={handleChange} />
                <Input name="email" label="Email Address *" value={form.email} onChange={handleChange} />
                <Input name="phone" label="Phone Number *" value={form.phone} onChange={handleChange} />
                <Input name="company" label="Company Name" value={form.company} onChange={handleChange} />
              </div>

              <Input name="subject" label="Subject *" value={form.subject} onChange={handleChange} />

              <Textarea name="message" label="Message *" value={form.message} onChange={handleChange} />

              <button type="submit" style={{
                width: '100%',
                background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
                color: 'white',
                padding: 18,
                border: 'none',
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                cursor: 'pointer'
              }}>
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

/* REUSABLE INPUT */
const Input = ({ name, label, value, onChange }) => (
  <div style={{ marginBottom: 24 }}>
    <label style={{ fontSize: 14, fontWeight: 600 }}>{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      required={label.includes('*')}
      style={{
        width: '100%',
        padding: '14px 18px',
        border: '1px solid #d1d5db',
        borderRadius: 10,
        marginTop: 8
      }}
    />
  </div>
);

/* TEXTAREA */
const Textarea = ({ name, label, value, onChange }) => (
  <div style={{ marginBottom: 32 }}>
    <label style={{ fontSize: 14, fontWeight: 600 }}>{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={6}
      required
      style={{
        width: '100%',
        padding: '14px 18px',
        border: '1px solid #d1d5db',
        borderRadius: 10,
        marginTop: 8,
        resize: 'vertical'
      }}
    />
  </div>
);

export default Contact;
