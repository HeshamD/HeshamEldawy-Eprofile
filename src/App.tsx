import './App.css'
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import ProjectModel from './pages/projects/ProjectModel';
import ContactModel from './pages/Contact/ContactModel';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/projects' element={<ProjectModel />} />
          <Route path='/contacts' element={<ContactModel />} />
          <Route path='/work_Experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
