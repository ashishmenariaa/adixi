import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkStyle = {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    fontSize: 14,
    cursor: 'pointer',
    padding: 0,
    textAlign: 'left'
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        padding: '80px 40px 32px'
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 60,
            marginBottom: 60
          }}
        >
          {/* COMPANY INFO */}
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20 }}>
              ADIXI
            </h3>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>
              Leading provider of comprehensive engineering solutions for power
              and cement plants across India. ISO certified with 300+ skilled
              professionals.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['about', 'services', 'careers', 'contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  style={linkStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = '#2563eb')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = '#94a3b8')
                  }
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>
              Our Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Mechanical Engineering',
                'Electrical Engineering',
                'Instrumentation & Control',
                'Civil Engineering',
                'Operations & Maintenance',
                'Manpower Solutions'
              ].map((service, i) => (
                <p key={i} style={{ color: '#94a3b8', fontSize: 14, margin: 0 }}>
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>
              Contact Us
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <Mail size={18} color="#2563eb" />
                <a
                  href="mailto:info.adixi@gmail.com"
                  style={{
                    color: '#94a3b8',
                    fontSize: 14,
                    textDecoration: 'none'
                  }}
                >
                  info.adixi@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <Phone size={18} color="#2563eb" />
                <a
                  href="tel:+919896902045"
                  style={{
                    color: '#94a3b8',
                    fontSize: 14,
                    textDecoration: 'none'
                  }}
                >
                  +91 98969 02045
                </a>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <MapPin size={18} color="#2563eb" />
                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: 14,
                    margin: 0,
                    lineHeight: 1.6
                  }}
                >
                  Shakti, Uttar Pradesh<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 32,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20
          }}
        >
          <p style={{ fontSize: 14, color: '#94a3b8', margin: 0 }}>
            © {currentYear} Adixi Engineering Services Private Limited. All rights
            reserved.
          </p>

          <div style={{ display: 'flex', gap: 32 }}>
            <button style={linkStyle}>Privacy Policy</button>
            <button style={linkStyle}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
