import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import DivisionSection from './components/DivisionSection'
import PhilosophyCanvas from './components/PhilosophyCanvas'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

const divisions = [
  {
    id: 1,
    title: "The Division of Being",
    subtitle: "Existence & Non-Existence",
    description: "The fundamental division between what is and what is not. This primordial split creates the foundation of all reality, where consciousness first encounters the boundary between existence and void.",
    color: "#ff6b6b",
    concepts: [
      "The nature of existence itself",
      "The void as creative potential",
      "Consciousness as the bridge between being and non-being",
      "The paradox of something from nothing"
    ],
    quote: "In the beginning was the Word, and the Word was the division between silence and sound, between nothing and everything."
  },
  {
    id: 2,
    title: "The Division of Knowledge",
    subtitle: "Known & Unknown",
    description: "The eternal dance between what we know and what remains mysterious. This division drives all learning, discovery, and the expansion of consciousness through the exploration of the unknown.",
    color: "#4ecdc4",
    concepts: [
      "The limits of human understanding",
      "Mystery as the engine of growth",
      "The relationship between knowledge and wisdom",
      "The unknown as infinite potential"
    ],
    quote: "The more we know, the more we realize how much we don't know. The unknown is not our enemy, but our greatest teacher."
  },
  {
    id: 3,
    title: "The Division of Experience",
    subtitle: "Subject & Object",
    description: "The fundamental split between the observer and the observed, the self and the world. This division creates the very possibility of experience, relationship, and the rich tapestry of conscious life.",
    color: "#45b7d1",
    concepts: [
      "The nature of consciousness and perception",
      "The relationship between self and world",
      "The role of the observer in creating reality",
      "Unity within apparent separation"
    ],
    quote: "We are not separate from the world we observe; we are the world observing itself through countless eyes."
  },
  {
    id: 4,
    title: "The Division of Time",
    subtitle: "Past, Present & Future",
    description: "The temporal division that creates the flow of experience, memory, and anticipation. This division allows for growth, change, and the unfolding story of consciousness through time.",
    color: "#96ceb4",
    concepts: [
      "The nature of temporal experience",
      "Memory as the foundation of identity",
      "The eternal now within linear time",
      "The future as creative possibility"
    ],
    quote: "Time is not a river flowing in one direction, but an ocean in which all moments exist simultaneously."
  }
]

function App() {
  const [loading, setLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <PhilosophyCanvas />
          <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
          
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Hero />
            
            {divisions.map((division, index) => (
              <DivisionSection
                key={division.id}
                division={division}
                index={index}
                setCurrentSection={setCurrentSection}
              />
            ))}
            
            <Footer />
          </motion.main>
        </>
      )}
    </div>
  )
}

export default App
