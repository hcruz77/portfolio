import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  const [currentView, setCurrentView] = useState ('AboutMe');

  if (currentView === 'AboutMe') {
    <AboutMe />
  }
  if (currentView === 'Contact') {
    <Contact />
  }
  if (currentView === 'Portfolio') {
    <Portfolio />
  }
  if (currentView === 'Resume') {
    <Resume />
  }
}

export default App;
