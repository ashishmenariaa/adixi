import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      padding: '120px 40px',
      background: 'white'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="section-title" style={{
            fontSize: 42,
            fontWeight: 800,
            color: '#111827',
            marginBottom: 16
          }}>
            What Our Clients Say
          </h2>
          <p style={{ fontSize: 18, color: '#6b7280' }}>
            Trusted by leading power and cement plants across India
          </p>
        </div>
        
        <div style={{ position: 'relative' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: 24,
            padding: 60,
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
          }}>
            <div style={{
              display: 'flex',
              gap: 8,
              marginBottom: 24,
              justifyContent: 'center'
            }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} style={{
                  width: 24,
                  height: 24,
                  fill: '#fbbf24',
                  color: '#fbbf24'
                }} />
              ))}
            </div>
            
            <p style={{
              fontSize: 22,
              color: '#111827',
              lineHeight: 1.8,
              marginBottom: 32,
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              "{testimonials[active].text}"
            </p>
            
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#111827',
                marginBottom: 4
              }}>
                {testimonials[active].name}
              </p>
              <p style={{
                fontSize: 15,
                color: '#2563eb',
                marginBottom: 4
              }}>
                {testimonials[active].role}
              </p>
              <p style={{ fontSize: 14, color: '#6b7280' }}>
                {testimonials[active].company}
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginTop: 32
          }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: active === i ? '#2563eb' : '#d1d5db',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;