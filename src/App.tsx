import { useState, useEffect }  from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  return (
    <main>
      <div className="flex-container">
        <motion.div 
          className='card'
          whileHover={{ cursor: 'pointer' }}
          animate={{
            backgroundColor: "white"
          }}
        ></motion.div>
      </div>
    </main>
  )
}

export default App
