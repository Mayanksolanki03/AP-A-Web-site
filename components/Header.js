'use client'; // interactivity

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-xl">
          {/* ⬅️ add nav-grid to make 3 columns */}
          <div className="navbar-container nav-grid">
            {/* LEFT: logo (unchanged) */}
            <div className="logo-container">
              <a className="navbar-brand" href="/">
                <img src="/images/marko-logo.png" className="site-logo img-fluid" alt="AP&A System" />
              </a>
            </div>

            {/* mobile toggler */}
            <button
              className="navbar-toggler nav-btn"
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            {/* CENTER: nav (add nav-center, nav-list) */}
            <div className={`collapse navbar-collapse nav-center ${isNavOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav nav-list">
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="/projects">Products</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="/career">Careers</a></li>
              </ul>
            </div>

            {/* RIGHT: actions (unchanged) */}
            <div className="navbar-action-container">
              
              <div className="navbar-icon-wrapper">
                <div className="icon-circle">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <a href="https://wa.me/919006016444"><h6>+91 90060 16444</h6></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
