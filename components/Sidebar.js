'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <div>
        <div className="content-overlay">
          <div className="content-edit-sidebar">
            <div className="sidebar-header">

              <div className="close-btn-second">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <div className="content">
              <span>Click on the Edit Content button to edit/add the content.</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
        <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <div className="sidebar-header">
            <div className="logo">
              <img src="/images/marko-logo.png" className="site-logo img-fluid" alt="Marko Logo" />
            </div>
            <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
              <span>X</span>
            </button>
          </div>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/projects">Our Products</a></li>
            <li><a href="/career">Careers</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}


