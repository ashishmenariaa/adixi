import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: scrolled ? 80 : 90,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1000
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          height: '100%',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* LOGO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img
            src="/images/logo.png"
            alt="Adixi Engineering"
            style={{
              width: scrolled ? 48 : 56,
              height: scrolled ? 48 : 56,
              objectFit: 'contain',
              transition: 'all 0.3s ease'
            }}
          />

          <div>
          <div
  style={{
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: '-0.4px',
    lineHeight: 1.2,
    background: 'linear-gradient(135deg, #1e40af, #2563eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}
>
  ADIXI ENGINEERING
</div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#2563eb',
                letterSpacing: 1
              }}
            >
              SERVICES PRIVATE LIMITED
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {['Home', 'Services', 'About', 'Careers', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: '#475569',
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: 4
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.color = '#2563eb')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.color = '#475569')
              }
            >
              {item}
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '0%',
                  height: 2,
                  background: '#2563eb',
                  transition: 'width 0.3s ease'
                }}
                className="nav-underline"
              />
            </a>
          ))}

          {/* CTA */}
          <a
            href="#careers"
            style={{
              padding: '12px 30px',
              borderRadius: 10,
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: 'white',
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 10px 20px rgba(37,99,235,0.25)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 14px 28px rgba(37,99,235,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 10px 20px rgba(37,99,235,0.25)';
            }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
