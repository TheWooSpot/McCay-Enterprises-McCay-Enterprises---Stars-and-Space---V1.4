import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
    }}>
      <div className="container" style={{ textAlign: 'center', zIndex: 2 }}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          The 4 Divisions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          A philosophical journey through the fundamental divisions that shape our reality, 
          consciousness, and understanding of existence itself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('division-1')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Begin the Journey
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2rem',
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '2rem',
        }}
      >
        ↓
      </motion.div>
    </section>
  )
}

export default Hero
