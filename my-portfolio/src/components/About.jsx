import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={`${styles.title} gradient-text`}>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        {/* Image from your original code */}
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75ea5906-e363-4333-bd24-3df8169e3cd6.png" alt="Sayan working on a laptop" className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <p>I'm a passionate Developer creating modern web applications. My journey in development started when I was in college and I've been hooked ever since.</p>
                        <p>I specialize in Java, Python, MySQL, and modern JavaScript frameworks, with a strong focus on creating intuitive user interfaces and seamless user experiences.</p>
                        <p>When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new design tools.</p>
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>1+ Years Experience</span>
                            </div>
                             <div className={styles.statItem}>
                                <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                <span>2+ Projects Completed</span>
                            </div>
                            <div className={styles.statItem}>
                                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" /></svg>
                                <span>Continuous Learner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;