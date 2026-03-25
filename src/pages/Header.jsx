import React, { useEffect, useMemo, useRef, useState } from "react";
import "../assets/css/Header.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const drawerRef = useRef(null);
    const menuButtonRef = useRef(null);
    const wasOpenRef = useRef(false);

    const navLinks = useMemo(
        () => [
            { id: "hero", label: "Home" },
            { id: "about", label: "About me" },
            { id: "skills", label: "Skills" },
            { id: "education-experience", label: "Experience" },
            { id: "projects", label: "Projects" }
        ],
        []
    );

    const closeMenu = () => setMenuOpen(false);

    const handleNavClick = (event, sectionId) => {
        const target = document.getElementById(sectionId);
        if (!target) return;

        event.preventDefault();
        closeMenu();

        const headerHeight = document.querySelector(".header")?.offsetHeight ?? 80;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.history.replaceState(null, "", `#${sectionId}`);
        window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
    };

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.id))
            .filter(Boolean);

        if (!sections.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);

                if (visibleEntries.length > 0) {
                    const mostVisible = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                    setActiveSection(mostVisible.target.id);
                }
            },
            {
                threshold: [0.25, 0.5, 0.75],
                rootMargin: "-90px 0px -45% 0px"
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [navLinks]);

    useEffect(() => {
        if (!menuOpen || !drawerRef.current) {
            return undefined;
        }

        const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
        const focusableElements = drawerRef.current.querySelectorAll(focusableSelector);
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        first?.focus();

        const handleTab = (event) => {
            if (event.key !== "Tab" || !focusableElements.length) {
                return;
            }

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        window.addEventListener("keydown", handleTab);
        return () => window.removeEventListener("keydown", handleTab);
    }, [menuOpen]);

    useEffect(() => {
        if (wasOpenRef.current && !menuOpen) {
            menuButtonRef.current?.focus();
        }

        wasOpenRef.current = menuOpen;
    }, [menuOpen]);

    const getNavClassName = (sectionId) => (activeSection === sectionId ? "active" : "");

    return (
        <>
            <header className="header">
                <a href="#hero" className="logo" onClick={(event) => handleNavClick(event, "hero")}>
                    <span className="logo-symbol">{"<"}<span className="logo-c"></span>/{">"}</span> Emily Rodriguez
                </a>

                <nav className="desktop-nav" aria-label="Navegación principal">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={getNavClassName(link.id)}
                                    onClick={(event) => handleNavClick(event, link.id)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-socials desktop-socials">
                    <a href="https://github.com/EmilySelenia01" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub size={22} />
                    </a>
                    <a href="https://linkedin.com/in/emily-rodríguez-/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://wa.me/50686315227" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                        <FaWhatsapp size={22} />
                    </a>
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-drawer"
                    ref={menuButtonRef}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            <button
                className={`drawer-overlay ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
                aria-hidden={!menuOpen}
                tabIndex={menuOpen ? 0 : -1}
            />

            <aside id="mobile-drawer" className={`mobile-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen} ref={drawerRef}>
                <button
                    type="button"
                    className="drawer-close"
                    onClick={closeMenu}
                    aria-label="Cerrar menu"
                >
                    <FaTimes />
                </button>

                <div className="drawer-main">
                    <div className="drawer-top">
                        <div className="drawer-avatar" aria-hidden="true">ER</div>
                        <div>
                            <h3>Emily Rodriguez</h3>
                            <p>Full-Stack Developer</p>
                        </div>
                    </div>

                    <nav aria-label="Navegación móvil">
                        <ul className="drawer-links">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(event) => handleNavClick(event, link.id)}
                                        className={getNavClassName(link.id)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="header-socials drawer-socials">
                    <a href="https://github.com/EmilySelenia01" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/emily-rodríguez-/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://wa.me/50686315227" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp">
                        <FaWhatsapp size={20} />
                    </a>
                </div>
            </aside>
        </>
    );
}

export default Header;