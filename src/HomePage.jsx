import React, { useEffect, useState } from "react";
import "./HomePage.css";

export default function HomePage() {
  
  return (
    <div className="homepage">

      
       <header className="navbar">
        <nav>
          <img className="logo" src="../public/vyws-logo.png" alt="VYWS Logo" />
          <h1>VYWS</h1>
        </nav>
        <div className="container">
            <a href="#about">About</a>
            <a href="#institutes">Institutes</a>
            <a href="#contact">Contact</a>
        </div>
      </header>

      
      <section className="hero">
        <div className="overlay">
          <h1 className="title">Vidarbha Youth Welfare Society</h1>
          <p className="subtitle">
            Established 1965 • Shaping Education Across Vidarbha
          </p>
          <div className="buttons">
            <a href="#institutes" className="btn primary">Explore Institutes</a>
            <a href="#contact" className="btn secondary">Contact Us</a>
          </div>
        </div>
      </section>

      
      <section className="about" id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Vidarbha Youth Welfare Society was founded by the great visionaries of this region Late. Prof Ram K. Meghe, Late. Surendra B. Deshmukh, Late. Prof. Baburao D. Hiwase, Late. Prof. Dinkarrao K. Deshmukh, Late. Pundlikrao B. Gohad, Late. Vasantrao N. Chaudhary, Late. Dr. Murlidhar R. Deshmukh, Shri. Shashikumar R. Deshmukh, Shri. Ramdas Alias Nanasaheb P. Dhande & Shri. Shankarrao D. Kale in the year 1965, with a clear vision of making it a world class premier organization for primary, secondary, higher, technical, and professional education.<br></br>
            The Society runs institutions in engineering, pharmacy, dental, social work, and schools.
          </p>
          </div>
          <div className="image-container">
           <img src="../public/vyws-logo.png" alt="About Us" />
          </div>
      </section>

      <section className="institutes">
        <div className="container">
          <h2>Our Institutes</h2>
          <h3>Carrying forward VYWS’s 60-year legacy of commitment to education.</h3>
          <div className="grid">
            <div className="card">
                <img className="logo" src="/src/assets/College.svg"/>
              <b>11 Colleges</b>
              <p>These institutions span diverse fields such as Arts, Science, Commerce, Engineering, Law, and Education, reflecting our vision of providing holistic learning opportunities. Each institute carries forward the society’s mission of academic excellence, discipline, and service to the community.</p>
            </div>
            <div className="card">               <img className="logo" src="/src/assets/School.svg"/>
              <b>19 Schools</b>
              <p>VYWS schools focus on building a strong base for students by blending quality education with cultural values and extracurricular activities. With an emphasis on holistic development, we ensure every child receives the right guidance from the very beginning of their educational journey.</p></div>
            <div className="card">                <img className="logo" src="/src/assets/hostel.svg"/>
              <b>2 Hostel</b>
              <p>VYWS provides safe, comfortable, and affordable hostel facilities for students coming from different parts of the region. Our hostels are designed to create a supportive environment where students can focus on their studies, build friendships, and experience community living.</p>
              </div>
            <div className="card">                <img className="logo" src="/src/assets/mcvc.svg"/>
              <b>6 MCVC</b>
              <p>Through MCVC programs, VYWS equips students with practical skills and industry-oriented training that enhance their employability. These vocational courses bridge the gap between education and employment, helping students build successful careers in diverse fields.</p>
              </div>
          </div>
        </div>
      </section>

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
  );
}
