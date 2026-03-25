import React, { useEffect, useRef } from "react";
import "../assets/css/About.css";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

function About() {
    const vantaBgRef = useRef(null);
    const vantaEffectRef = useRef(null);

    useEffect(() => {
        if (!vantaEffectRef.current && vantaBgRef.current) {
            vantaEffectRef.current = NET({
                el: vantaBgRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                backgroundColor: 0x0d081b,
                color: 0xa855f7,
                points: 12,
                maxDistance: 20,
                spacing: 17,
                showDots: true
            });
        }

        return () => {
            if (vantaEffectRef.current) {
                vantaEffectRef.current.destroy();
                vantaEffectRef.current = null;
            }
        };
    }, []);

    return (
        <section className="aboutme-bg" id="about">
            <div className="aboutme-vanta" ref={vantaBgRef} aria-hidden="true" />
            <div className="aboutme-title-pro">About <span>Me</span></div>
            <div className="aboutme-card-glass">
                <div className="aboutme-hi">Hello!</div>
                <p>
                    I am Emily, a <b>Full Stack Developer</b> focused on building useful web products with clean architecture and great user experience.<br /><br/>
                    I enjoy turning ideas into reliable solutions, collaborating with teams, and delivering software that is maintainable, scalable, and ready for real users.
                </p>
            </div>
        </section>
    );
}
export default About;