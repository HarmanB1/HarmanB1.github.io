import { useState } from 'react'
import {HashRoutr, Route, Routes, Link, HashRouter} from "react-router-dom"
import './App.css'

import {home} from './home.js'
import {contact} from './contact.js'
import {about} from './about.js'
import { projects } from '../projects.js'

function App() {


  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to ="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Roout   path='/' element ={<home />} />
        <Route   path='/about' element ={<about />} />
        <Route   path='/projects' element ={<projects />} />
        <Route   path='/contact' element ={<contact />} />
      </Routes>
    </HashRouter>
    
  )
}

export default App
