import React from 'react';
import './css/main.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import {Route, Routes} from 'react-router-dom';
import ProjectItem from './pages/ProjectItem';

function App() {
  return (
    <div className="App">
        <Navbar /> 
            <Routes> 
                <Route path="/projects" element={<Projects />} exact/>
                <Route path="/contacts" element={<Contacts />} exact/>
                <Route path="/home" element={<Home />} exact/>
                <Route path="/projectItem/:id" element={<ProjectItem />} exact />
            </Routes>
        <Footer />
    </div>
  );
}

export default App;
