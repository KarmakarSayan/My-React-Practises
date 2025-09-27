import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={`${styles.brand} gradient-text`}>Portfolio</a>
        <div className={styles.desktopMenu}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className={`${styles.navLink} ${activeLink === link.href.substring(1) ? styles.active : ''}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.mobileMenuButton}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* ✅ FIX: Added width and height to the SVG icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={styles.mobileNavLink}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;