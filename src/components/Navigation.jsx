import React from 'react'
import { motion } from 'framer-motion'

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = [
    { id: 0, name: 'Home' },
    { id: 1, name: 'Being' },
    { id: 2, name: 'Knowledge' },
    { id: 3, name: 'Experience' },
    { id: 4, name: 'Time' },
  ]

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId)
    if (sectionId === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(`division-${sectionId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      style={{
        position: 'fixed',
        top: '50%',
        right: '2rem',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {sections.map((section) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: currentSection === section.id ? '60px' : '40px',
            height: '3px',
            background: currentSection === section.id 
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              : 'rgba(255, 255, 255, 0.3)',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
          }}
        >
          <span style={{
            position: 'absolute',
            right: '70px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '0.9rem',
            color: 'white',
            opacity: currentSection === section.id ? 1 : 0,
            transition: 'opacity 0.3s ease',
            whiteSpace: 'nowrap',
            fontWeight: 500,
          }}>
            {section.name}
          </span>
        </motion.button>
      ))}
    </motion.nav>
  )
}

export default Navigation
