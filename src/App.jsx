import React from 'react';
import {BrowserRouter,Routes,Route,Link}
from 'react-router-dom';

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function Skills() {
  return <h2>My Skills: HTML, CSS, React</h2>;
}

function Projects() {
  return <h2>My Projects</h2>;
}

function Contact() {
  return <h2>Contact: example@gmail.com</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/skills">Skills</Link> |
        <Link to="/projects">Projects</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;