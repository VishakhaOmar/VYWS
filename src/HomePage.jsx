import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { motion, useMotionValue, useTransform, animate,AnimatePresence } from "framer-motion";

export default function HomePage() {

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
  
  return(
    <div className="homepage">
    <section className="hero">
        <div className="overlay">
          <span className="hero-text">
         Carrying forward VYWS’s <motion.span className="count">{rounded}</motion.span><p className="count">+ </p>years legacy of <br /><motion.span className="count"
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
        >
          {items[index].content}
        </motion.span>.
        </span>
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
          <img className="border" src="/src/assets/border.svg" alt="Border" />
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
</div>
  )
}