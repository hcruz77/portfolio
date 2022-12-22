import React from 'react';
import gitHub from '../assets/images/githubkitty.png'
import linkedin from '../assets/images/linkedin.png'
import email from '../assets/images/email.jpeg'


function Footer() {
  return (
    <footer className="footer p-4 bg-white shadow md:px-6 md:py-8 ">
      <div>
        <a href='https://github.com/hcruz77' target="_blank" rel="noreferrer" className="items-center mb-4 sm:w-30 sm:mb-0" alt="...">
          <img src={gitHub} className="mr-3 h-8" alt="Github Logo" />
        </a>
        <a href='https://www.linkedin.com/in/heather-cruz/' target="_blank" rel="noreferrer" className="items-center mb-4 sm:w-30 sm:mb-0" alt="...">
          <img src={linkedin} className="mr-3 h-8" alt="Linkedin Logo" />
        </a>
        <a href='mailto:chance.heather@gmail.com' target="_blank" rel="noreferrer" className="items-center mb-4 sm:w-30 sm:mb-0" alt="...">
          <img src={email} className="mr-3 h-8" alt="Linkedin Logo" />
        </a>
      </div>
      <span> © 2022 🦋 Heather Cruz </span>
    </footer>
  );
}

export default Footer;