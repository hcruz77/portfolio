import React from "react";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from "./components/Main";
import Project from '/components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
