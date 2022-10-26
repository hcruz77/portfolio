import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function viewPage() {
  if (currentView === "AboutMe") {
    return <AboutMe />;
  }
  if (currentView === "Contact") {
    return <Contact />;
  }
  if (currentView === "Portfolio") {
    return <Portfolio />;
  }
  if (currentView === "Resume") {
    return <Resume />;
  }
}

function App() {
  const [currentView, setCurrentView] = useState("AboutMe");
  return (
    <div>
      <nav>
        <a onClick={() => setCurrentView(" AboutMe ")}>About</a>

        <a onClick={() => setCurrentView(" Contact ")}>Contact</a>

        <a onClick={() => setCurrentView(" Portfolio ")}>Portfolio</a>

        <a onClick={() => setCurrentView(" Resume ")}>Resume</a>
      </nav>
      {viewPage(currentView)}
    </div>
  );
}

export default App;
