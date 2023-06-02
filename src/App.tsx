import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeader from './components/header/MainHeader';
import Hero from './components/home/hero/Hero';
import HomeProject from './components/home/homeProject/HomeProject';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectPage from './components/projects/ProjectPage';
// import Contact from './components/contact/Contact';
import WorkExperience from './components/workExperience/WorkExperience';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/projects' element={<ProjectPage />} />
          {/* <Route path='/contacts' element={<Contact />} /> */}
          <Route path='/work_Experience' element={<WorkExperience />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
