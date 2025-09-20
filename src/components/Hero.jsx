import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.textSection} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className={styles.name}>
              <span className={styles.firstName}>Adarsh</span>
              <span className={styles.lastName}>Pandey</span>
            </h1>
            
            <div className={styles.roles}>
              <span className={styles.role}>Frontend Developer</span>
              <span className={styles.separator}>•</span>
              <span className={styles.role}>UI/UX Enthusiast</span>
            </div>
            
            <p className={styles.description}>
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              I bring ideas to life through clean code and thoughtful design.
            </p>
            
            <div className={styles.buttons}>
              <button onClick={scrollToProjects} className={styles.primaryBtn}>
                View My Work
              </button>
              <button onClick={scrollToContact} className={styles.secondaryBtn}>
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className={`${styles.imageSection} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.imageContainer}>
              <div className={styles.imageGlow}></div>
              <img 
                src="/profile-image.jpg" 
                alt="Adarsh Pandey - Frontend Developer and UI/UX Enthusiast"
                className={styles.profileImage}
                width="300"
                height="300"
              />
              <div className={styles.floatingElements}>
                <div className={styles.floatingElement1}>💻</div>
                <div className={styles.floatingElement2}>🎨</div>
                <div className={styles.floatingElement3}>⚡</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine}></div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;