import React from 'react';
import App from './App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router";

function Root () {
    return (
        <Router>
        <div className="todo-app-container">
           <NavBar/>
           <div className="content">
            <Routes>
               <Route path="/" element={<App />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/contact" element={<Contact />}/>
            </Routes>
           </div>
        </div>
        </Router>
    )
}

export default Root; 