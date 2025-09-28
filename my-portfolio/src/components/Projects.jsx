import React from 'react';
import { useState } from 'react';
import styles from './Projects.module.css';

// Helper function to get the correct style class for a tag
const getTagClassName = (tag) => {
    switch (tag.toLowerCase()) {
        case 'html': return styles.tagHtml;
        case 'css': return styles.tagCss;
        case 'javascript': return styles.tagJavascript;
        case 'mysql': return styles.tagMysql;
        case 'sql server': return styles.tagSqlServer;
        case 'java': return styles.tagJava;
        case 'python': return styles.tagPython;
        case 'react': return styles.tagReact;
        case 'node.js': return styles.tagNodejs;
        case 'express.js': return styles.tagExpress;
        case 'mongodb': return styles.tagMongodb;
        case 'figma': return styles.tagFigma;
        default: return ''; // Default if no specific style is found
    }
};

const projectsData = [
    {
        title: "Doctor Appointment Booking System",
        description: "A full-stack MERN application for booking medical appointments, featuring multi-level authentication (patient, doctor, admin), payment integration, and a responsive user interface.",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/002/990/983/large_2x/personal-doctor-appointment-2d-isolated-illustration-vector.jpg",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
        link: "https://github.com/KarmakarSayan/PrepScripto"
    },
    {
        title: "University Management System",
        description: "A comprehensive desktop application using Java Swing and MySQL to manage university operations like student, faculty, and course data with secure, role-based access.",
        imageUrl: "https://yotta.com/wp-content/uploads/2022/09/How-Educational-Institutions-Can-Climb-the-Digital-Ladder-with-University-Management-System.jpg",
        tags: ["Java", "MySQL"],
        link: "https://github.com/KarmakarSayan/University-Management-System"
    },
    {
        title: "Blog Application Frontend",
        description: "A responsive and modern frontend for a blog, designed with HTML, CSS, and JavaScript. It features a clean layout for posts, category sections, and a user-friendly interface.",
        imageUrl: "https://nickjanetakis.com/assets/blog/cards/how-to-start-and-finish-any-web-app-project.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/KarmakarSayan/Blog-Application"
    },
    {
        title: "Railway Reservation System",
        description: "A web-based railway ticket booking platform with seat selection, payment, and real-time train status. Built using HTML, CSS, JavaScript, MySQL, SQL Server.",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*Cw_339NOrIRYG25YZWxq3w.jpeg",
        tags: ["HTML", "CSS", "JavaScript", "MySQL", "SQL Server"],
        link: "#"
    },
    {
        title: "Tax Regime Software Suite",
        description: "A comprehensive tax management tool for individuals and businesses, featuring tax calculation, filing, and analytics. Built using HTML, CSS, JavaScript, MySQL, SQL Server.",
        imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/new-income-tax-rules-011314967-16x9_0.jpg?VersionId=fRgWeVXe29fQ12SMxvYb374a4l1I2LgN&size=690:388",
        tags: ["HTML", "CSS", "JavaScript", "MySQL", "SQL Server"],
        link: "#"
    }
];

const ProjectCard = ({ title, description, imageUrl, tags, link }) => (
    <div className={styles.projectCard}>
        <div className={styles.imageContainer}>
            <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.cardContent}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.tags}>
                {tags.map(tag => (
                    <span key={tag} className={`${styles.tag} ${getTagClassName(tag)}`}>
                        {tag}
                    </span>
                ))}
            </div>
            <a href={link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">View Project →</a>
        </div>
    </div>
);

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    // If showAll is false, only show first 3 projects
    const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={`${styles.title} gradient-text`}>Featured Projects</h2>
                <div className={styles.grid}>
                    {visibleProjects.map(project => <ProjectCard key={project.title} {...project} />)}
                </div>
                <div className={styles.viewAll}>
                    {!showAll && (
                        <button 
                          onClick={() => setShowAll(true)} 
                          className={styles.viewAllButton}
                        >
                          View All Projects
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;