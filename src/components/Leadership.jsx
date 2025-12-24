import React from 'react';

const Leadership = () => {
  return (
    <section style={{ padding: '120px 40px', background: 'white' }}>
      <div
        className="about-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 80,
          alignItems: 'center'
        }}
      >
        {/* LEFT: LEADERSHIP IMAGE */}
        <div
          style={{
            width: '100%',
            height: 500,
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
          }}
        >
          <img
            src="/images/leader.jpeg"
            alt="Adixi Engineering Leadership"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          {/* Overlay Text */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1))',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 32,
              color: 'white'
            }}
          >
            <div>
              <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
                Leadership
              </h3>
              <p style={{ fontSize: 18 }}>Pramod Kumar Giri</p>


              <p style={{ fontSize: 14, opacity: 0.85, marginTop: 8 }}>
                Directors
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: LEADERSHIP MESSAGE */}
        <div
          style={{
            background: '#f9fafb',
            padding: 48,
            borderRadius: 24
          }}
        >
          <div
            style={{
              fontSize: 60,
              color: '#2563eb',
              lineHeight: 1,
              marginBottom: 20
            }}
          >
            "
          </div>

          <p
            style={{
              fontSize: 22,
              color: '#111827',
              lineHeight: 1.8,
              marginBottom: 32,
              fontStyle: 'italic'
            }}
          >
            Excellence is not a destination, it’s a continuous journey. At Adixi
            Engineering, we push the boundaries of engineering innovation while
            maintaining unwavering focus on safety, quality, and client
            satisfaction. Our team of 300+ skilled professionals represents our
            greatest asset and our promise to deliver world-class industrial
            solutions.
          </p>

          <div
            style={{
              borderLeft: '4px solid #2563eb',
              paddingLeft: 20
            }}
          >
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#111827',
                marginBottom: 4
              }}
            >
              Leadership Team
            </p>
            <p style={{ fontSize: 15, color: '#6b7280' }}>
              Adixi Engineering Services Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
