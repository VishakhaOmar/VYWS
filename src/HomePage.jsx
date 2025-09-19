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

    const circulars = [
  "परिपत्रक क्र.5 (लेखा व वित्त विभाग)",
  "परिपत्रक क्र.01 (अकाउंट विभाग)",
  "परिपत्रक क्र.9 (आरोग्य विभाग)",
];

const notices = [
  "केवळ हंगामी / अस्थायी तात्पुरत्या स्वरुपाच्या शिक्षक नियुक्तीसाठी",
  "रायगड विभाग, कामोठे शैक्षणिक वर्ष २०२५-२६",
  "मुलाखतीच्या सूचना",
];

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

      <section className="Management">
        <div className="container">
          <h2>Management of VYWS</h2>
          <div className="grid">
            <div className="cardcontent"> 
            <div className="card">
              <img className="image" src="/src/assets/president.jpeg"/>
              <div className="name">
              <p className="post"><b>President</b></p>
              <p>Dr. Nitin R. Dhande</p>
            </div>
            </div>
            </div>
            <div className="cardcontent">
            <div className="card">               
              <img className="image" src="/src/assets/vice-president.jpeg"/>
              <div className="name">
              <p className="post"><b>Vice President</b></p>
              <p>Dr. Anjali S. Patil</p>
              </div>
            </div>
            </div>
            <div className="cardcontent">
            <div className="card">               
              <img className="image" src="/src/assets/treasurer.jpeg"/>
              <div className="name">
              <p className="post"><b>Dr. Priya S. Patil</b></p>
              <p>Treasurer</p>
            </div>
            </div>
            </div>
              <div className="cardcontent">
                <div className="card">
                 <img className="image" src="/src/assets/secretary.png"/>
                 <div className="name">
              <p className="post"><b>Dr. Snehal S. Patil</b></p>
              <p>Secretary</p>
            </div>
            </div>
            </div>             
          </div>
          <div className="button">
          <button>View More</button>
          </div>
        </div>
      </section>

      <section className="news">
      <div className="container">
        <h2 className="news-title">News</h2>
      <div className="news-wrapper">
        {/* Circulars */}
        <div className="news-card">
          <div className="card-header">
            <h3>Circulars</h3>
            <button className="view-btn">VIEW ALL</button>
          </div>

          <div className="scroll-box">
            <motion.div
              className="scroll-content"
              animate={{ y: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            >
              {circulars.concat(circulars).map((item, i) => (
                <div key={i} className="news-item">
                  <span>{item}</span>
                  <span className="pdf-icon">📄</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Notices */}
        <div className="news-card">
          <div className="card-header">
            <h3>Notices</h3>
            <button className="view-btn">VIEW ALL</button>
          </div>

          <div className="scroll-box">
            <motion.div
              className="scroll-content"
              animate={{ y: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            >
              {notices.concat(notices).map((item, i) => (
                <div key={i} className="news-item">
                  <span>{item}</span>
                  <span className="pdf-icon">📄</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <div className="dashboard">
      <div className="dashboardcontainer">
       <h2 className="upper">VYWS's Dashboard</h2>       
          <div className="middle">
          <div className="col col1">
                <li>Engineering colleges</li>
                <li>Mangement colleges</li>
                <li>Polytechnic Diploma</li>
                <li>Dental colleges</li>
          </div>
          <div className="col col2">
              <div className="maindiv">
                <div className="colgcontent">
                  <h3>Founder</h3>
                  Late Prof. Ram K. Meghe
                  <h3>Work area:</h3>
                educational institutions across Amravati and Wardha regions
                </div>
                </div>
          </div>
          <div className="col col3">
              <li>Pharmacy Colleges</li>
              <li>Arts Colleges</li>
              <li>Commerce Colleges</li>
              <li>Social work Colleges</li>
          </div>
          </div>
          <div className="lower">
              Schools under VYWS are affiliated with State Board, CBSE, and other recognized boards.
          </div>
        </div>
    </div>

    <div className="last">
      <div className="last-container">
        <h2>Institution's area of work</h2>
        <div className="grid2">
          <div className="cards" data-title="Amravati">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Badnera">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Wardha">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Borgaon">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Chandur">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Dhamak">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Pipri">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Chincholi">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Virul">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Nandgaon">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title=" Gawandgaon">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Bahilopar">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Kharanja">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Rajura">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
          <div className="cards" data-title="Madani">
            <img src="/src/assets/badnera.png" alt="" />
          </div>
          
        </div>
      </div>
    </div>
    
</div>
  )
}