import React from "react";
import "./ElearningPortal.css";
import { link } from "framer-motion/client";

const ElearningPortal = () => {
  const institutes = [
    { id: 1, name: "Prof. Ram Meghe Institute of Technology & Research, Badnera",links:"https://mitra.ac.in/" },
    { id: 2, name: "Prof. Ram Meghe College of Engineering & Management Badnera, Amravati",links:"https://prmceam.ac.in/" },
    { id: 3, name: "Social Work College, Badnera – Amravati", links:"https://vywscswamt.org/" },
    { id: 4, name: "Institute of Pharmaceutical Education & Research, Boragon, Wardha",links:"https://iperwardha.com/" },
    { id: 5, name: "Institute of Pharmacy and Research, Badnera-Amravati",links:"https://iopr.in/" },
    { id: 6, name: "Dental College & Hospital, Amravati",links:"https://vywsdchamt.edu.in/" },
    { id: 7, name: "R.D.I.K. & N.K.D. Mahavidyalaya, Badnera.",links:"https://rdikandnkd.org/" },
    { id: 8, name: "Prof. Rajabhau Deshmukh Kala Mahavidyalaya Nandgaon (Kh) Dist Amravati", links:"https://prdkmv.org.in/" },
    { id: 9, name: "Mahila Arts & Commerce College, Chandur Railway, Amravati", links:"https://macccr.org/" },
    { id: 10, name: "Indirabai Meghe Mahila Mahavidyalaya, Amravati", links:"https://immmv.org/" },
    { id: 11, name: "Titans Public School (CBSE), Badnera-Amravati", links:"https://titanspublicschoolamravati.com/" },
    { id: 12, name: "Tapasya Public School (CBSE), Arvi-Wardha", links:"https://tapasyapublicschoolarvi.com/" },
  ];

  return (
    <div className="elearning">
    <div className="portal-container">
      <h2 className="portal-title">E-Learning Portal – A Response to COVID-19</h2>
      <p className="portal-text">
        As India faces a disruptive moment in education, teachers and students have the challenge of
        continuing to teach and learn during the lockdown. Technology can be an enabler in this
        moment of crisis. We, at the Centre for Education Innovation and Action Research, bring to
        you a wide range of resources to help you continue teaching and learning during this time.
      </p>
      <p className="portal-text">
        We are committed to offer our expertise and services to help our students and teachers in
        education transition to other modes of teaching and learning. The E-Learning Portal is our
        response to COVID-19 through which we hope to reach out to teachers and students.
      </p>

      <table className="portal-table">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name of Institute</th>
            <th>E-portal Link</th>
          </tr>
        </thead>
        <tbody>
          {institutes.map((inst) => (
            <tr key={inst.id}>
              <td>{inst.id}</td>
              <td>{inst.name}</td>
              <td>
                <a href={inst.links} className="portal-link">
                  Click Here
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ElearningPortal;
