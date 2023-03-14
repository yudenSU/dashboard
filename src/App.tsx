import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './features/about/AboutPage';
import Account from './features/account/Account';
import Dashboard from './features/dashboard/Dashboard';
import Home from './features/home/Home';
import Projects from './features/projects/Projects';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/account" element = {<Account />}/>
        <Route path="/about" element = {<About />}/>
      </Routes>
    </div>
  );
}

export default App;
