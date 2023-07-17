import React from 'react'
import "./App.css";
import NavBar from "./components/NavBar"
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <div>
      <Router>
      
      <NavBar/>
     
      <Routes><Route exact path="/" element={<Home/>}></Route></Routes>
      <Routes><Route exact path="/about" element={<About/>}></Route></Routes>
      <Routes><Route exact path="/experience" element={<Experience/>}></Route></Routes>
      <Routes><Route exact path="/portfolio" element={<Portfolio/>}></Route></Routes>
      <Routes><Route exact path="/contact" element={<Contact/>}></Route></Routes>
      
      <SocialLinks/>
      
      </Router>
    </div>
  )
}

export default App