import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-title">
            Vidarbha Youth Welfare Society, Amravati
          </h2>
          <p className="footer-desc">
            Vidarbha Youth Welfare society, Amravati was established and
            registered under the Societies Registration Act, 1860, and the Public
            Trust Acts, 1950 in July 1965, with a dedicated view and motto to impart
            education to all categories.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Institutes</a></li>
            <li><a href="#">Founders</a></li>
            <li><a href="#">Executive Committee</a></li>
            <li><a href="#">Our History</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <strong>Address:</strong> Chaitanya Building, Infront of Telephone
            Office, Camp Road Amravati – 444602
          </p>
          <p>
            <strong>Email:</strong> secretary_vyws@rediffmail.com
          </p>
          <p>
            <strong>Phone:</strong> 0721-2662618
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © All Rights Reserved | Developed By{" "}
          <span className="highlight">PrimaThink</span>
        </p>
        <div className="footer-policies">
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
