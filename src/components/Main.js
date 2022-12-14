import React from 'react';
import { useState } from "react";
//import Header from "./Header";
import Footer from "./Footer";
import headerBg from "../assets/images/headerBg2.png";
import NavBar from './NavBar';
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function Main() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover'
      }} >
        <header className="header">
          <div className="ps-5">
            <h1 className="display-2">Heather Cruz</h1>
            <h4 className="fw-lighter text-muted">Front End Design & Development</h4>
          </div>

          {/* We are passing the currentPage from state and the function to update it */}
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      </div>
      {/* Here we are calling the renderPage method which will return a component  */}
      <div>
        {renderPage()}

      </div>



      <div>
        <Footer />
      </div>

    </>
  );
}
