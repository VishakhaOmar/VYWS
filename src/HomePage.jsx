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

      {/* <div className="top-strip"></div> */}

      
      <section className="about-section">
        <div className="containerabout">
          
         <motion.div
          className="box left-box"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: -300, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="about-heading">About Us     </span>
       Vidarbha Youth Welfare Society was founded by the great visionaries of this region Late. Prof Ram K. Meghe, Late. Surendra B. Deshmukh, Late. Prof. Baburao D. Hiwase, Late. Prof. Dinkarrao K. Deshmukh, Late. Pundlikrao B. Gohad, Late. Vasantrao N. Chaudhary, Late. Dr. Murlidhar R. Deshmukh, Shri. Shashikumar R. Deshmukh, Shri. Ramdas Alias Nanasaheb P. Dhande & Shri. Shankarrao D. Kale in the year 1965, with a clear vision of making it a world class premier organization for primary, secondary, higher, technical, and professional education.
        </motion.div>

        {/* Right Div */}
        <motion.img
          className="box right-box"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 300, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
           src="/public/vyws-logo.png"
        >
        </motion.img>
      </div>

      <div className="info">
        <div className="grid">

          <div className="value">
              <img src="/src/assets/college.svg" alt="" />
            <div>
              <h1>11</h1>
              <h3>Colleges</h3>
            </div>
          </div>
          <div className="value value1">
            <img src="/src/assets/school.svg" alt="" />
            <div>
              <h1>19</h1>
              <h3>Schools</h3>
            </div>
          </div>
          <div className="value value1">
            <img src="/src/assets/hostel.svg" alt="" />
            <div>
              <h1>2</h1>
              <h3>Hostels</h3>
            </div>
            </div>
          <div className="value value1">
            <img src="/src/assets/mcvc.svg" alt="" />
            <div>
              <h1>6</h1>
              <h3>MCVC</h3>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="institutes">
        <div className="container">
          <h2>Management of <br /> Vidarbha Youth Welfare Society</h2>
          <div className="grid">
            <div className="card">
              <img className="image" src="/src/assets/president.jpeg"/>
              <div>
              <p><b>Dr. Nitin R. Dhande</b></p>
              <p>President</p>
            </div>
            </div>
            <div className="card">               
              <img className="image" src="/src/assets/vice-president.jpeg"/>
              <div>
              <p><b>Dr. Anjali S. Patil</b></p>
              <p>Vice President</p>
              </div>
            </div>
            <div className="card">               
              <img className="image" src="/src/assets/treasurer.jpeg"/>
              <div>
              <p><b>Dr. Priya S. Patil</b></p>
              <p>Treasurer</p>
            </div>
            </div>
            <div className="card">             
                 <img className="image" src="/src/assets/secretary.png"/>
                 <div>
              <p><b>Dr. Snehal S. Patil</b></p>
              <p>Secretary</p>
            </div>
            </div>
          </div>
          <div className="button">
          <button>View More</button>
          </div>
        </div>
      </section>

      <section className="methodology-cards">
      <div className="container">
      <h2 className="methodology-heading">Our Educational Methodology</h2>
        <div className="card-container">
      <div className="card card1">
        <h3>Educational Excellence</h3>
        <p>
          We uphold rigorous academic standards, employ highly qualified educators,
          and continuously innovate to ensure every student receives world-class education.
        </p>
        <span className="icon1"></span>
      </div>

      <div className="card card2">
        <h3>Student-Centered Learning</h3>
        <p>
          Our approach places students at the heart of the educational process,
          fostering critical thinking, creativity, and independent learning skills.
        </p>
        <span className="icon"></span>
      </div>

      <div className="card card1">
        <h3>Global Perspective</h3>
        <p>
          We prepare students for success in an interconnected world by incorporating
          cultural awareness and global citizenship into our curriculum.
        </p>
        <span className="icon1"></span>
      </div>

      <div className="card card2">
        <h3>Future-Ready Skills</h3>
        <p>
          Beyond academics, we focus on skills for the future workplace – digital literacy,
          problem-solving, and adaptability.
        </p>
        <span className="icon"></span>
      </div>
      </div>
      </div>
    </section>
</div>
  )
}