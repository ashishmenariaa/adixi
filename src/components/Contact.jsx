import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{
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
            Get In Touch
          </h2>
          <p style={{ fontSize: 18, color: '#6b7280' }}>
            We're here to answer your questions and discuss your project needs
          </p>
        </div>

        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
          marginBottom: 80
        }}>
          <div style={{
            background: '#f9fafb',
            borderRadius: 20,
            padding: 48,
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
              <Mail style={{ width: 32, height: 32 }} />
            </div>
            <h3 style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#111827',
              marginBottom: 12
            }}>
              Email Us
            </h3>
            <a href="mailto:info.adixi@gmail.com" style={{
              fontSize: 15,
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: 500
            }}>
              info.adixi@gmail.com
            </a>
          </div>

          <div style={{
            background: '#f9fafb',
            borderRadius: 20,
            padding: 48,
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
              <Phone style={{ width: 32, height: 32 }} />
            </div>
            <h3 style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#111827',
              marginBottom: 12
            }}>
              Call Us
            </h3>
            <a href="tel:+919896902045" style={{
              fontSize: 15,
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: 500
            }}>
              +91 98969 02045
            </a>
          </div>

          <div style={{
            background: '#f9fafb',
            borderRadius: 20,
            padding: 48,
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
              <MapPin style={{ width: 32, height: 32 }} />
            </div>
            <h3 style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#111827',
              marginBottom: 12
            }}>
              Visit Us
            </h3>
            <p style={{
              fontSize: 15,
              color: '#6b7280',
              lineHeight: 1.6
            }}>
              Gurugram, Haryana<br />India
            </p>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderRadius: 24,
          padding: 80,
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <div style={{
            maxWidth: 800,
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#111827',
              marginBottom: 16,
              textAlign: 'center'
            }}>
              Send Us a Message
            </h3>
            <p style={{
              fontSize: 16,
              color: '#6b7280',
              marginBottom: 40,
              textAlign: 'center'
            }}>
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            <form
              action="https://formsubmit.co/info.adixi@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Contact Form Submission - Adixi Engineering" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 24,
                marginBottom: 24
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 8
                  }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '1px solid #d1d5db',
                      borderRadius: 10,
                      fontSize: 15,
                      outline: 'none',
                      background: 'white'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 8
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '1px solid #d1d5db',
                      borderRadius: 10,
                      fontSize: 15,
                      outline: 'none',
                      background: 'white'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 24,
                marginBottom: 24
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 8
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '1px solid #d1d5db',
                      borderRadius: 10,
                      fontSize: 15,
                      outline: 'none',
                      background: 'white'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 8
                  }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name (optional)"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '1px solid #d1d5db',
                      borderRadius: 10,
                      fontSize: 15,
                      outline: 'none',
                      background: 'white'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: 8
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this regarding?"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '1px solid #d1d5db',
                    borderRadius: 10,
                    fontSize: 15,
                    outline: 'none',
                    background: 'white'
                  }}
                />
              </div>

              <div style={{ marginBottom: 32 }}>
                <label style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: 8
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '1px solid #d1d5db',
                    borderRadius: 10,
                    fontSize: 15,
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    background: 'white'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  color: 'white',
                  padding: 18,
                  border: 'none',
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(37,99,235,0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,99,235,0.3)';
                }}
              >
                Send Message <ArrowRight style={{ width: 20, height: 20 }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;