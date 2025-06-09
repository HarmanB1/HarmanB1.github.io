import { useState } from 'react'
import {HashRoutr, Route, Routes, Link, HashRouter} from "react-router-dom"
import './App.css'

function App() {


  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</link>
          </li>
          <li>
            <Link to="About">About</link>
          </li>
          <li>
            <Link to ="/Projects">Projects</link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path path='s' element ={< >} />
        <Route path path='s' element ={< >} />
        <Route path path='s' element ={< >} />
        <Route path path='s' element ={< >} />
      </Routes>
    </HashRouter>
    
  )
}

export default App
