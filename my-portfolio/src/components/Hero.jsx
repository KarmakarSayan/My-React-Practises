import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Hi, I'm <span className="gradient-text">Sayan</span>
          </h1>
          <h2 className={styles.subheading}>Software Developer & Data Analyst</h2>
          <p className={styles.description}>
            I create beautiful, responsive applications with a focus on user experience and clean code.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#contact" className={styles.buttonPrimary}>Let's Talk</a>
            <a href="#projects" className={styles.buttonSecondary}>View My Work</a>
            <a href="https://drive.google.com/file/d/11N8678X6VANX-8pEcmbLV2BCXG7fF4-r/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.buttonPrimary}>Resume</a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.profileSnake}>
            <span className={styles.profileSnakeBorder}></span>
            <img src="/profileeeee.jpg" alt="Profile" className={styles.profileSnakeImg} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;