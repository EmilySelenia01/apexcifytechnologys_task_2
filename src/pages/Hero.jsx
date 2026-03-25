import React from "react";
import "../assets/css/Hero.css";
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaDownload } from "react-icons/fa";

function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-main">
                <h1 className="hero-neon-text">
                    <span className="hero-neon-line">Hey</span><br />
                    <span className="hero-neon-line">I'm <span className="hero-highlight">Emily,</span></span><br />
                    <span className="hero-neon-line">Full-Stack Developer</span>
                </h1>
                <p className="hero-desc">
                    I'm passionate about creating web experiences that make a difference. If you're looking for someone who combines technology and creativity, I'm ready to help!
                </p>
                <div className="hero-actions">
                    <a
                        className="hero-cv-btn"
                        href="/cv-emily-rodriguez.pdf"
                        download="Emily-Rodriguez-CV.pdf"
                    >
                        <FaDownload /> Download CV
                    </a>
                </div>

            </div>

            <div className="hero-card-left">
                <h2>Emily Selenia Rodriguez Mendoza</h2>
                <p className="hero-role">Full-stack developer</p>
                <div className="hero-info">
                    <span><FaEnvelope /> emilyseleniarodriguez@gmail.com</span>
                    <span><FaMapMarkerAlt /> Costa Rica</span>
                    <span><FaBriefcase /> Full-time / Part-time / Hybrid </span>
                </div>
                <div className="hero-tags">
                    <span>Backend Developer</span>
                    <span>Front Developer</span>
                    <span>Database</span>
                    <span>Microservices</span>
                </div>
                
            </div>

        </section>
    );
}

export default Hero;