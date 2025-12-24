import React from 'react';
import { Shield, Award, Target, CheckCircle, Users, Clock } from 'lucide-react';

const CoreValues = () => {
  const values = [
    { Icon: Shield, title: "Safety First", desc: "Unwavering commitment to workplace safety" },
    { Icon: Award, title: "Quality Excellence", desc: "ISO certified quality management" },
    { Icon: Target, title: "Innovation", desc: "Cutting-edge engineering solutions" },
    { Icon: CheckCircle, title: "Integrity", desc: "Ethical business practices always" },
    { Icon: Users, title: "Teamwork", desc: "Collaborative approach to success" },
    { Icon: Clock, title: "Reliability", desc: "Consistent delivery on commitments" }
  ];

  return (
    <section style={{
      padding: '80px 40px',
      background: 'white',
      borderTop: '1px solid #e5e7eb',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h3 className="section-title" style={{
            fontSize: 42,
            fontWeight: 800,
            color: '#111827',
            marginBottom: 16,
            letterSpacing: '-1px'
          }}>
            Our Core Values
          </h3>
          <p style={{ fontSize: 18, color: '#6b7280' }}>
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="values-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 32
        }}>
          {values.map((value, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: 72,
                height: 72,
                background: 'rgba(37,99,235,0.1)',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#2563eb'
              }}>
                <value.Icon style={{ width: 28, height: 28 }} />
              </div>
              <h4 style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#111827',
                marginBottom: 8
              }}>
                {value.title}
              </h4>
              <p style={{ fontSize: 13, color: '#6b7280' }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;