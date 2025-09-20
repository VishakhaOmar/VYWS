import React, { useEffect, useState } from "react";
import "./Header.css";
import { motion, useMotionValue, useTransform, animate,AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Header() {

  const [showPopup, setShowPopup] = useState(false);

  return (

    <header>
        <div className="header">
      <div className="header-main">

        <div className="header-left">
          <img
            src="/src/assets/logo-vyws.png" 
            alt="vyws Logo"
            className="image"/>
           </div>

          <div className="header-text">
            <h3 className="tagline">Shaping Education Across Vidarbha since 1965</h3>
            <h1 className="title">Vidarbha Youth Welfare Society</h1>
            <h3 className="founder">Founder Late prof.Ram K. Meghe</h3>
            <h3 className="location">Amravati</h3>
         </div>
      
      <div className="header-right">
          <img
            src="/src/assets/founder.png"
            alt="Founder"
            className="image"
          />
        </div>
        </div>
        </div>
 

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li> <Link to="/">
                    Home 
                  </Link></li>
          <li onClick={() => setShowPopup(true)}>
            About ▼ 
            {showPopup && (
              <div className="popup-content">
                <div className="row">
                  <Link to="/history" onClick={(e) => {
                    e.stopPropagation();
                    setShowPopup(false);
                  }}>
                    Our History
                  </Link>
                </div>
                <div className="row">
                  <Link to="/objectives" onClick={(e) => {
                    e.stopPropagation();
                    setShowPopup(false);
                  }}>
                    Aims and objectives
                  </Link>
                  </div>
                <button
                  className="close-btn"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    setShowPopup(false);
                  }}
                >
                  ×
                </button>
              </div>
            )}
          </li>
          <li><Link to="/founders">
                    Founders
                  </Link></li>
          <li><Link to="/elearning">
                    E-Learning Portal
                  </Link></li>
          <li><Link to="/executives">
                    Executive commitie
                  </Link></li>
          <li><Link to="/institutes">
                    Institutes
                  </Link></li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
