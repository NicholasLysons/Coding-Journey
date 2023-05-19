import React from "react";
function Navigation({ currentPage, handlePageChange}) {
  return (
    <ul className="Navigation-Tabs">
      <li className="Navigation_Content">
        <a
        href="#Portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'Navagation-Link active' : 'Navagation-Link'}
        >
          Portfolio
        </a>
      </li>
      <li className="Navigation_Content">
        <a
        href="#Resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'Navagation-Link active' : 'Navagation-Link'}
        >
          Resume
        </a>
      </li>
      <li className="Navigation_Content">
        <a
        href="#Contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'Navagation-Link active' : 'Navagation-Link'}
        >
          Contact
        </a>
      </li>
      <li className="Navigation_Content">
        <a
        href="#About"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'Navagation-Link active' : 'Navagation-Link'}
        >
          About
        </a>
      </li>
    </ul>
  );
}

export default Navigation;

