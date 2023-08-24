import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about'
import BuildWithUs from './pages/build_with_us'
import CloneProjects from './pages/clone_projects'
import ContactUs from './pages/contact_us';
import CustomSolutions from './pages/custom_solutions';
import OurServices from './pages/our_services';
import Portfolio from './pages/portfolio';
import Projects from './pages/projects';
import TechTeam from './pages/tech_team';
import Technology from './pages/technology';

function App() {
  return (
    <div>
      <Portfolio />
      <About />
      <TechTeam />
      <BuildWithUs />
      <Technology />
      <CloneProjects />
      <Projects />
      <OurServices />
      <CustomSolutions />
      <ContactUs />
    </div>
  );
}

export default App;
