import React from "react";
import { MDBRipple } from 'mdb-react-ui-kit';

const Portfolio = () => {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <section>
      <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded'
      rippleTag='div'
      rippleColor='light'
    >
      <a href='https://github.com/hcruz77/tech-blog' target="_blank" rel="noreferrer"><img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100'alt="..." />
        <div className='mask' style={{ backgroundColor: 'rgba(, 251, 251, .20)' }}></div>
      </a>
    </MDBRipple>

      </section>
    </div>
  );
};

export default Portfolio;
