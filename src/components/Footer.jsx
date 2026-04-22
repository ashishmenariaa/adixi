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
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      padding: '80px 40px 32px'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 60,
          marginBottom: 60
        }}>
          {/* COMPANY INFO */}
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8, color: 'white' }}>
              ADIXI ENGINEERING
            </h3>
            <p style={{ fontSize: 11, color: '#3b82f6', fontWeight: 700, letterSpacing: 1, marginBottom: 16 }}>
              SERVICES PRIVATE LIMITED
            </p>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>
              Premier engineering firm specialising in Mechanical, C&I and Civil engineering
              for power and cement plants. ISO 9001:2015 certified.
            </p>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p style={{ fontSize: 12, color: '#64748b' }}>GST: 09ABACA6120H1ZZ</p>
              <p style={{ fontSize: 12, color: '#64748b' }}>Reg: 09ABACA6120H1ZZ</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Partnerships', id: 'partnerships' },
                { label: 'Careers', id: 'careers' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={linkStyle}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#3b82f6')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Our Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Mechanical O&M / AMC',
                'Control & Instrumentation',
                'Civil Engineering',
                'Technical Manpower',
                'BESS Installation & AMC',
                'STP / ETP AMC'
              ].map((service, i) => (
                <p key={i} style={{ color: '#94a3b8', fontSize: 14, margin: 0 }}>
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Contact Us</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <Mail size={18} color="#3b82f6" style={{ flexShrink: 0 }} />
                <a
                  href="mailto:info@adixi.co.in"
                  style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none' }}
                >
                  info@adixi.co.in
                </a>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <Phone size={18} color="#3b82f6" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+919335824291"
                  style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none' }}
                >
                  +91 93358 24291
                </a>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <MapPin size={18} color="#3b82f6" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ color: '#94a3b8', fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                  Kota Basti, Shakti Nagar<br />
                  Sonbhadra, UP – 231222<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 32,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20
        }}>
          <p style={{ fontSize: 14, color: '#94a3b8', margin: 0 }}>
            © {currentYear} Adixi Engineering Services Private Limited. All rights reserved.
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
