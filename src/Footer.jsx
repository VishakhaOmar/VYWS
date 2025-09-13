import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Footer() {
  return (
    <div className="Footer">
        <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            Chaitanya Building, In front of Telephone Office, Camp Road, Amravati – 444602
          </p>
          <p>Email: secretary_vyws@rediffmail.com | Phone: 0721-2662618</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Vidarbha Youth Welfare Society</p>
          <nav>
            <a href="#about">About</a>
            <a href="#institutes">Institutes</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
};
