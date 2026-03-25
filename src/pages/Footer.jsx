import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../assets/css/Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-bg">
            <div className="footer-content" role="contentinfo">
                {/* Columna 1: Contacto */}
                <div className="footer-col">
                    <div className="footer-col-title">Contact</div>
                    <div className="footer-col-item">Costa Rica</div>
                    <a className="footer-col-link" href="tel:+50686315227">
                        +506 8631 5227
                    </a>
                    <a className="footer-col-link" href="mailto:emilyseleniarodriguez@gmail.com">
                        emilyseleniarodriguez@gmail.com
                    </a>
                </div>
                {/* Columna 2: Identidad */}
                <div className="footer-col footer-center">
                    <div className="footer-brand">Emily Selenia Rodriguez</div>
                    <div className="footer-role">Full Stack Developer</div>
                </div>
                {/* Columna 3: Redes */}
                <div className="footer-col footer-right">
                    <div className="footer-col-title">Networks</div>
                    <div className="footer-socials">
                        <a
                            href="https://github.com/EmilySelenia01"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/emily-rodríguez-/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://wa.me/50686315227"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="WhatsApp"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                    <div className="footer-status">Available for collaborations</div>
                </div>
            </div>
            <div className="footer-copy">
                &copy; {year} Emily Selenia Rodriguez Mendoza. All rights reserved.
            </div>
        </footer>
    );
}