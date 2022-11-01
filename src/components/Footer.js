import React from 'react';
import gitHub from '../assets/images/githubkitty.png'



function Footer() {
  return (
    <footer className="footer p-4 bg-white shadow md:px-6 md:py-8 ">
      <div>
     <a href='https://github.com/hcruz77?tab=repositories'target="_blank" rel="noreferrer"className="items-center mb-4 sm:w-30 sm:mb-0" alt="...">
      <img src={gitHub} className="mr-3 h-8" alt="Github Logo" />
      </a>

      </div>
      <div>
       
      </div>
    </footer>
  );
}

export default Footer;