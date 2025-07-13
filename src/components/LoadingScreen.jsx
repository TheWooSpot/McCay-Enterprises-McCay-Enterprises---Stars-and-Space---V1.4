import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h1 style={{
          fontSize: '3rem',
          fontFamily: 'Playfair Display, serif',
          marginBottom: '1rem',
          fontWeight: 600,
        }}>
          The 4 Divisions
        </h1>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.9,
          fontWeight: 300,
        }}>
          A Journey Through Consciousness
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
