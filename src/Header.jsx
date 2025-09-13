import React, { useEffect, useState } from "react";
import "./Header.css";
import { motion, useMotionValue, useTransform, animate,AnimatePresence } from "framer-motion";

export default function Header() {
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 60, {
      duration: 4
    });
  }, []);

  const items = [  {
    id: 1,
    content: "Commitment to Education"
  },
  {
    id: 2,
    content: "Pursuit of Excellence"
  },
  {
    id: 3,
    content: "Empowerment through Knowledge"
  }
];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    
    <div className="homepage">

    <header>
      <div className="top-strip"></div>

      <div className="header-main">
    
        <div className="header-left">
          <img
            src="/src/assets/logo-vyws.png" 
            alt="vyws Logo"
            className="vywslogo"/>
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
            className="founder-img"
          />
        </div>
        </div>
 </header>

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
    </div>
  );
}
