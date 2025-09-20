import { useState, useEffect } from 'react';
import styles from './About.module.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      year: '2024 - 2028',
      institution: 'Sumway University',
      degree: 'Bachelor\'s Degree',
      status: 'current',
      description: 'Currently pursuing my undergraduate degree with focus on computer science and web technologies.'
    },
    {
      year: '2022',
      institution: 'Mithila Institution of Technology',
      degree: '+2 (Higher Secondary)',
      status: 'completed',
      description: 'Completed higher secondary education with excellent grades in science stream.'
    },
    {
      year: '2020',
      institution: 'New English Higher Secondary School',
      degree: 'SEE (Secondary Education)',
      status: 'completed',
      description: 'Successfully completed secondary education with strong foundation in academics.'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            My journey in technology and design
          </p>
        </div>

        <div className={styles.content}>
          <div className={`${styles.intro} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.introCard}>
              <h3 className={styles.introTitle}>Hello! I'm Adarsh</h3>
              <p className={styles.introText}>
                A passionate Frontend Developer and UI/UX Enthusiast with 1 year of experience 
                in creating digital experiences that matter. I believe in the power of clean code, 
                thoughtful design, and user-centered thinking.
              </p>
              <p className={styles.introText}>
                My journey started with curiosity about how websites work, and it has evolved 
                into a deep passion for crafting beautiful, functional, and accessible web applications 
                that solve real problems.
              </p>
            </div>
          </div>

          <div className={`${styles.education} ${isVisible ? styles.visible : ''}`}>
            <h3 className={styles.sectionTitle}>Education Timeline</h3>
            <div className={styles.timeline}>
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.timelineItem} ${item.status === 'current' ? styles.current : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={styles.timelineMarker}>
                    <div className={styles.timelineDot}></div>
                    {index < educationData.length - 1 && <div className={styles.timelineLine}></div>}
                  </div>
                  
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineYear}>{item.year}</div>
                    <h4 className={styles.timelineTitle}>{item.degree}</h4>
                    <h5 className={styles.timelineInstitution}>{item.institution}</h5>
                    <p className={styles.timelineDescription}>{item.description}</p>
                    {item.status === 'current' && (
                      <span className={styles.currentBadge}>Current</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;