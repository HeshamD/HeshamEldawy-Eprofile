import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeader from './components/header/MainHeader';
import Hero from './components/hero/Hero';

function App() {

  return (
    <div className="App">
      <MainHeader />
      <Hero />
    </div >
  )
}

export default App
