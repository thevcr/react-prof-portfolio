import React from "react";
import NavReactBootstrap from 'react-bootstrap/Nav';

function Nav({ currentPage, handlePageChange }) {
    return (
    <NavReactBootstrap variant='pills' bg='light' fixed='top' className='justify-content-end'>
      <NavReactBootstrap.Item>
        <NavReactBootstrap.Link
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
        </NavReactBootstrap.Link>
    </NavReactBootstrap.Item>
        <NavReactBootstrap.Item>
          <NavReactBootstrap.Link
            href="#project"
            onClick={() => handlePageChange('Project')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </NavReactBootstrap.Link>
        </NavReactBootstrap.Item>
        <NavReactBootstrap.Item>
          <NavReactBootstrap.Link
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </NavReactBootstrap.Link>
        </NavReactBootstrap.Item>
        <NavReactBootstrap.Item>
          <NavReactBootstrap.Link
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </NavReactBootstrap.Link>
        </NavReactBootstrap.Item>
      </NavReactBootstrap>
    );
  }
  
  export default Nav;
  