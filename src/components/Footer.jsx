import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer style={{
      padding: '4rem 0 2rem',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            The Journey Continues
          </h3>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            These four divisions are not separate realms, but interconnected aspects of a single, 
            unified reality. Understanding their relationships opens the door to deeper wisdom.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {['Being', 'Knowledge', 'Experience', 'Time'].map((division, index) => (
            <motion.div
              key={division}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '1rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                document.getElementById(`division-${index + 1}`)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 500,
              }}>
                {division}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.9rem',
          }}>
            © 2024 The 4 Divisions. A philosophical exploration of consciousness and reality.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
