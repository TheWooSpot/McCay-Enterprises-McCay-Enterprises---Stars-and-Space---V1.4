import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DivisionSection = ({ division, index, setCurrentSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setCurrentSection(division.id)
      }
    }
  })

  const isEven = index % 2 === 0

  return (
    <section
      id={`division-${division.id}`}
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0',
        background: `linear-gradient(135deg, ${division.color}15 0%, ${division.color}05 100%)`,
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ order: isEven ? 1 : 2 }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '400px',
                background: `linear-gradient(135deg, ${division.color}30 0%, ${division.color}10 100%)`,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: '200px',
                  height: '200px',
                  border: `3px solid ${division.color}60`,
                  borderRadius: '50%',
                  borderTopColor: division.color,
                }}
              />
              
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '3rem',
                color: division.color,
                fontWeight: 'bold',
              }}>
                {division.id}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ order: isEven ? 2 : 1 }}
          >
            <motion.h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600,
                marginBottom: '1rem',
                color: division.color,
              }}
            >
              {division.title}
            </motion.h2>

            <motion.h3
              style={{
                fontSize: '1.5rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '2rem',
                fontWeight: 300,
              }}
            >
              {division.subtitle}
            </motion.h3>

            <motion.p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {division.description}
            </motion.p>

            <motion.div
              style={{
                marginBottom: '2rem',
              }}
            >
              <h4 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: 'white',
                fontWeight: 500,
              }}>
                Key Concepts:
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
              }}>
                {division.concepts.map((concept, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    style={{
                      padding: '0.5rem 0',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '1.1rem',
                      position: 'relative',
                      paddingLeft: '1.5rem',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: division.color,
                      fontWeight: 'bold',
                    }}>
                      •
                    </span>
                    {concept}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: 'rgba(255, 255, 255, 0.6)',
                borderLeft: `4px solid ${division.color}`,
                paddingLeft: '1.5rem',
                margin: '2rem 0',
              }}
            >
              "{division.quote}"
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DivisionSection
