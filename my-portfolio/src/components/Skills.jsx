import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

const SkillBar = ({ label, percentage, gradient }) => {
    const [width, setWidth] = useState(0);
    const barRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setWidth(percentage);
                } else {
                    setWidth(0);
                }
            }, { threshold: 0.5 }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            if (barRef.current) {
                observer.unobserve(barRef.current);
            }
        };
    }, [percentage]);

    return (
        <div>
            <div className={styles.skillLabel}>
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className={styles.skillBarContainer} ref={barRef}>
                <div className={styles.skillBar} style={{ width: `${width}%`, background: gradient }}></div>
            </div>
        </div>
    );
};

const Skills = () => {
    const technicalSkills = [
        { label: "HTML/CSS", percentage: 95, gradient: "#2563eb" },
        { label: "Java", percentage: 80, gradient: "#16a34a" },
        { label: "JavaScript", percentage: 90, gradient: "#7c3aed" },
        { label: "MySQL", percentage: 85, gradient: "#3b82f6" },
        { label: "React", percentage: 50, gradient: "linear-gradient(90deg, #f472b6, #f43f5e)" },
        
        
    ];
    const designSkills = [
        { label: "UI/UX Design", percentage: 85, gradient: "linear-gradient(90deg, #a78bfa, #8b5cf6)" },
        { label: "Figma", percentage: 90, gradient: "linear-gradient(90deg, #3b82f6, #60a5fa)" },
        { label: "Adobe XD", percentage: 75, gradient: "linear-gradient(90deg, #f472b6, #f43f5e)" },
        { label: "Responsive Design", percentage: 95, gradient: "linear-gradient(90deg, #22c55e, #4ade80)" },
    ];

    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <h2 className={`${styles.title} gradient-text`}>My Skills</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Technical Skills</h3>
                        <div className={styles.skillsList}>
                            {technicalSkills.map(skill => <SkillBar key={skill.label} {...skill} />)}
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3>Design Skills</h3>
                        <div className={styles.skillsList}>
                            {designSkills.map(skill => <SkillBar key={skill.label} {...skill} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;