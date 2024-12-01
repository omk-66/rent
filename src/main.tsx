import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {motion} from "motion/react"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <motion.div initial={{y:3, opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration: 0.5, type:"spring"}}
    >
    <App />
    </motion.div>
  </StrictMode>,
)
