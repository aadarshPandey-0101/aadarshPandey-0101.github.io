import { useState, useEffect } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with delay
          setTimeout(() => {
            skillsData.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, index]));
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillsData = [
    {
      name: 'HTML',
      level: 90,
      icon: '🌐',
      description: 'Semantic markup and modern HTML5 features'
    },
    {
      name: 'CSS',
      level: 85,
      icon: '🎨',
      description: 'Modern CSS, Flexbox, Grid, and animations'
    },
    {
      name: 'JavaScript',
      level: 80,
      icon: '⚡',
      description: 'ES6+, DOM manipulation, and async programming'
    },
    {
      name: 'UI/UX Design',
      level: 75,
      icon: '✨',
      description: 'User-centered design and prototyping'
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Experience & Skills</h2>
          <p className={styles.subtitle}>
            1 year of passionate development and continuous learning
          </p>
        </div>

        <div className={styles.content}>
          <div className={`${styles.experience} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceIcon}>
                <span className={styles.iconEmoji}>🚀</span>
              </div>
              <div className={styles.experienceContent}>
                <h3 className={styles.experienceTitle}>1 Year Experience</h3>
                <p className={styles.experienceDescription}>
                  Building modern web applications with focus on user experience, 
                  clean code, and responsive design. Continuously learning and 
                  adapting to new technologies and best practices.
                </p>
                <div className={styles.experienceStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>10+</span>
                    <span className={styles.statLabel}>Projects</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Hours Coded</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>4</span>
                    <span className={styles.statLabel}>Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.skillsGrid} ${isVisible ? styles.visible : ''}`}>
            <h3 className={styles.skillsTitle}>Technical Skills</h3>
            <div className={styles.skillsList}>
              {skillsData.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className={styles.skillItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.skillHeader}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillIcon}>{skill.icon}</span>
                      <div>
                        <h4 className={styles.skillName}>{skill.name}</h4>
                        <p className={styles.skillDescription}>{skill.description}</p>
                      </div>
                    </div>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  
                  <div className={styles.skillBar}>
                    <div 
                      className={`${styles.skillProgress} ${animatedSkills.has(index) ? styles.animated : ''}`}
                      style={{ 
                        '--skill-level': `${skill.level}%`,
                        '--animation-delay': `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.additionalSkills} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.additionalTitle}>Additional Expertise</h3>
          <div className={styles.skillBadges}>
            {[
              'Responsive Design',
              'Cross-browser Compatibility',
              'Performance Optimization',
              'Accessibility (a11y)',
              'Version Control (Git)',
              'Problem Solving',
              'Team Collaboration',
              'Continuous Learning'
            ].map((skill, index) => (
              <span 
                key={skill} 
                className={styles.skillBadge}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;