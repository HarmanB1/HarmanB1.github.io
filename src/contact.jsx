import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaCalendarAlt,
  FaClock,
  FaUserClock,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./Contact.css";

export const Contact = ({ darkMode }) => {
  return (
    <div className={`contact-container ${darkMode ? "dark" : ""}`} id="contact">
      <div className="glass-card contact-header">
        <h1>Get in Touch</h1>
        <p className="contact-description">
          I'm always open to new opportunities, collaborations, or just a
          friendly conversation. Feel free to reach out through any of the
          channels below. I usually reply within 1–2 business days.
        </p>
      </div>

      {/* Availability */}
      <div className="glass-card contact-group">
        <h2>
          <FaCalendarAlt className="section-icon" /> Availability
        </h2>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-icon">
              <FaClock color={darkMode ? "#5ecbff" : "#4f46e5"} />
            </div>
            <div>
              <strong>Monday, Tuesday, Wednesday, Thursday:</strong> 9 AM – 6 PM
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <FaUserClock color={darkMode ? "#6c8efb" : "#9333ea"} />
            </div>
            <div>
              <strong>Saturday:</strong> Limited availability
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <FaClock color={darkMode ? "#ff9e5e" : "#dc2626"} />
            </div>
            <div>
              <strong>Sunday:</strong> Unavailable
            </div>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="glass-card contact-group">
        <h2>
          <FaEnvelope className="section-icon" /> Contact Info
        </h2>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-icon">
              <SiGmail size={20} color="#db4437" />
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:bhogalharman7@gmail.com" className="contact-link">
                bhogalharman7@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <SiGmail size={20} color="#db4437" />
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:hba58@sfu.ca" className="contact-link">
                hba58@sfu.ca
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <FaPhone color={darkMode ? "#5ecbff" : "#2563eb"} />
            </div>
            <div>
              <strong>Phone:</strong>{" "}
              <a href="tel:+16043564654" className="contact-link">
                (604) 356-4654
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="glass-card contact-group">
        <h2>
          <FaLinkedin className="section-icon" /> Connect With Me
        </h2>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-icon">
              <FaLinkedin size={20} color="#0a66c2" />
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/harman-bhogal-b2b532350/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn Profile
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <FaGithub size={20} color={darkMode ? "#f0f0f0" : "#333"} />
            </div>
            <div>
              <a
                href="https://github.com/HarmanB1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub Profile
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <FaDiscord size={20} color="#5865f2" />
            </div>
            <div>
              <a
                href="https://discord.com/users/relaxi#0137"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Discord: relaxi#0137
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
