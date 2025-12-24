import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/9455950672" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        background: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        cursor: 'pointer',
        zIndex: 999,
        transition: 'transform 0.3s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <MessageCircle style={{ width: 30, height: 30, color: 'white' }} />
    </a>
  );
};

export default WhatsAppButton;