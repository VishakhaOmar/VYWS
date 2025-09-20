import React from "react";
import "./Institutes.css"

const Institutes=()=>{

  const colleges=[
    {id:1, name:"Prof. Ram Meghe Institute of Technology & Research Badnera, Amravati.", 	num:"0721-2681246",	year:1983},
    {id:2, name:"Prof. Ram Meghe College of Engineering & Management Badnera, Amravati.",	num:"0721-2580371",	year:2009},
    {id:3, name:"Polytechnic Badnera, Amravati.", num:"0721-2681306",	year:1985},
    {id:4, name:"Dental College & Hospital, Amravati.",	num:"0721-2662166",	year:1989},
    {id:5, name:"Institute of Pharmaceutical Education & Research, Borgaon (Meghe) Dist. Wardha.",	num:"07152-2240284",	year:1982},
    {id:6, name:"Indirabai Meghe Mahila Mahavidyalaya, Amravati.",	num:"0721-2020601", year:1989},
    {id:7, name:"Bar. R.D.I.K. & N.K.D. Mahavidyalaya, Badnera.",	num:"0721-2681232",	year:1989},
    {id:8, name:"Prof. Rajabhau Deshmukh Kala Mahavidyalaya Nandgaon (Kh) Dist. Amravati.",	num:"0721-222606", year:1990},
    {id:9, name:"Mahila Arts & Commerce College, Chandur Railway, Amravati",	num:"07222-254183",	year:1991},
    {id:10, name:"Social Work College, Badnera – Amravati.",	num:"0721-2660503",	year:1993},
    {id:11, name:"Institute of Pharmacy and Research, Anjangaon Bari Road, Badnera – Amravati",	num:"0721-2970405",	year:2017},
  ]

  const schools=[
    {id:1, name:"Madhamik Vidyalaya Sarsi, Tq. Nandgaon Kh. Dist. Amravati", num:"07224-202388",	year:1983},
    {id:2, name:"Sukhdeorao Patil Vidyalaya & Junior College, Wadura. Tq. Nandgaon Kh. Dist. Amravati.",	num:"0721-2681246",	year:1981},
    {id:3, name:"Madyhamik Vidyalaya, Dhamak, Tq. Nandgaon Kh Dist. Amravati.",	num:"07221-202401",	year:1971},
    {id:4, name:"Madyhamik Vidyalaya & Khanderao Deshmukh,(Jr. College) Rajura. Tq. Chandur Rly. Dist. Amravati.",	num:"07222-252051",	year:1972},
    {id:5, name:"Madyhamik Vidyalaya & Junior College Palaskhed Tq. Chandur Rly. Dist. Amravati.",	num:"07152-2240284",	year:1970},
    {id:6, name:"Atmaram Patil Vidyalaya Gawandgaon(Bk), Tq. Anjangaon Surji, Dist. Amravati.",	num:"07224-205066",	year:1983},
    {id:7, name:"Madhyamik Vidyalaya Badnera-Amravati.",	num:"0721-2681409",	year:1983},
    {id:8, name:"Madhavrao Wankhade Vidyalaya, Virul(Ronghe) Tq. Dhmangaon Rly. Dist. Amravati.", num:"07222-202640",	year:1982},
    {id:9, name:"Madhavrao Wankhade Vidyalaya, Virul(Ronghe) Tq. Dhmangaon Rly. Dist. Amravati.",	num:"07222-254183",	year:1980},
    {id:10, name:"Prathmik Ashram Shala Bahilolpur Dist. Amravati.",	num:"0721-2020019",	year:1970},
    {id:11, name:"Kai. Anandrao Meghe Vidyalaya & Junior College, Borgaon(Meghe), wardha.",	num:"07152-242597",	year:1983},
    {id:12, name:"Daulatsingh Vidyalaya, pipri(Meghe) Tq. Dist. Wardha.",	num:"07152-242916",	year:1983},
    {id:13, name:"Smt. Sakhubai khadatkar Vidyalaya & Junior College, Giroli(Ingle), Tq. Dewali, dist. Amravati.",	num:"07158-258519", year:1971},
    {id:14, name:"Madhyamik Vidyalaya , Chincholi (Junapani) Tq. Kharanja Ghadge, dist. Wardha.", num:"07156-202729",	year:1983},
    {id:15, name:"Madhyamic Vidyalaya, Madani(Dindola) Tq. Dist. Wardha.",	num:"07152-281446",	year:1972},
    {id:16, name:"Madhyamik Vidyalaya, Kajali Tq. Kharanja Ghadge, Dist. Wardha.",	num:"07156-254403",	year:1972},
    {id:17, name:"Tapasya Public School Arvi Dist. Wardha.",	num:"07157-200295",	year:2008},
    {id:18, name:"TITANS’ Kindergarten School, Badnera-Amravati.", num:"9011223954",	year:2016},
    {id:19, name:"TITANS’ Public School, Badnera-Amravati.",	num:"08390292682",	year:2017},
  ]

  return(
    <div className="institutes_name">
      <div className="table">
      <h2 className="title">Our Institutes</h2>
      <table className="college-school clg">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Colleges</th>
            <th>Number</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((col) => (
            <tr key={col.id}>
              <td>{col.id}</td>
              <td>{col.name}</td>
              <td>{col.num}</td>
              <td>{col.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
        
        <table className="college-school school">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Schools</th>
            <th>Number</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((sch) => (
            <tr key={sch.id}>
              <td>{sch.id}</td>
              <td>{sch.name}</td>
              <td>{sch.num}</td>
              <td>{sch.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Institutes;