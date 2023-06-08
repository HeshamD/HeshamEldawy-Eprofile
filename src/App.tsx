import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeader from './components/header/MainHeader';
import Hero from './pages/Home/hero/Hero';
import HomeProject from './pages/Home/project/Project';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectPage from './pages/projects/ProjectPage';
import Contact from './components/contact/Contact';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/work_Experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />


        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
