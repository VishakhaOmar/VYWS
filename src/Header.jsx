import React, { useEffect, useState } from "react";
import "./Header.css";
import { motion, useMotionValue, useTransform, animate,AnimatePresence } from "framer-motion";

export default function Header() {

  return (

    <header>
      <div className="top-strip"></div>

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
 

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About ▼</li>
          <li>Founder</li>
          <li>E-Learning Portal</li>
          <li>Academics</li>
          <li>Ececutive Committee</li>
          <li>Institutes</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
