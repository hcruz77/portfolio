import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";



function viewPage(currentView) {
  if (currentView === "AboutMe") {
    return <AboutMe />
  }
if (currentView === "Portfolio") {
  return <Portfolio />;
}
if (currentView === "Resume") {
  return <Resume />;
}
if (currentView === "Contact") {
  return <Contact />;
}
};

function App() {
  const [currentView, setCurrentView] = useState("AboutMe");
  return (
    <div>
      <nav>
        <a onClick={() => setCurrentView(" AboutMe ")}> About </a>

        <a onClick={() => setCurrentView(" Portfolio ")}> Portfolio </a>

        <a onClick={() => setCurrentView(" Resume ")}> Resume </a>

        <a onClick={() => setCurrentView(" Contact ")}> Contact </a>

      </nav>
      {viewPage(currentView)}
    </div>
  );
}

export default App;
