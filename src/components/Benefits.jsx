import React from 'react';
import { Heart, Shield, BookOpen, TrendingUp, Building, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { Icon: Heart, title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family" },
    { Icon: Shield, title: "PF & ESI", desc: "Provident Fund and Employee State Insurance benefits" },
    { Icon: BookOpen, title: "Training Programs", desc: "Regular skill development and technical training" },
    { Icon: TrendingUp, title: "Career Growth", desc: "Clear career progression paths and promotions" },
    { Icon: Building, title: "Accommodation", desc: "Housing facilities at project sites (where applicable)" },
    { Icon: Users, title: "Team Culture", desc: "Collaborative and supportive work environment" }
  ];

  return (
    <section style={{
      padding: '120px 40px',
      background: 'white'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="section-title" style={{
            fontSize: 42,
            fontWeight: 800,
            color: '#111827',
            marginBottom: 16
          }}>
            Employee Benefits
          </h2>
          <p style={{ fontSize: 18, color: '#6b7280' }}>
            We care for our team with comprehensive benefits and growth opportunities
          </p>
        </div>
        
        <div className="benefits-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40
        }}>
          {benefits.map((benefit, i) => (
            <div key={i} style={{
              background: '#f9fafb',
              borderRadius: 20,
              padding: 40,
              textAlign: 'center',
              transition: 'all 0.3s'
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
                <benefit.Icon style={{ width: 32, height: 32 }} />
              </div>
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#111827',
                marginBottom: 12
              }}>
                {benefit.title}
              </h3>
              <p style={{
                fontSize: 15,
                color: '#6b7280',
                lineHeight: 1.6
              }}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;