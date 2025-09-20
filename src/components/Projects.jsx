import { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      id: 1,
      title: 'Modern Dashboard',
      description: 'A responsive web application dashboard with clean UI design, data visualization, and user-friendly interface built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB3ZWIlMjBpbnRlcmZhY2UlMjBhcHBsaWNhdGlvbnxlbnwwfDB8fGJsdWV8MTc1ODM4ODM1OXww&ixlib=rb-4.1.0&q=85',
      attribution: '2H Media on Unsplash',
      photographerUrl: 'https://unsplash.com/@2hmedia',
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      category: 'Web Application',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Mobile App Interface',
      description: 'Modern mobile application interface design with colorful gradients, intuitive navigation, and engaging user experience for enhanced usability.',
      image: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MHwxfHxwdXJwbGV8MTc1ODM4ODM1OXww&ixlib=rb-4.1.0&q=85',
      attribution: 'Daniel Korpai on Unsplash',
      photographerUrl: 'https://unsplash.com/@danielkorpai',
      technologies: ['UI/UX', 'Mobile Design', 'Prototyping'],
      category: 'Mobile Design',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Complete e-commerce website design with product showcase, modern shopping interface, and seamless user experience for online retail.',
      image: 'https://images.unsplash.com/photo-1629363447922-1f421b470828?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8ZWNvbW1lcmNlJTIwc2hvcHBpbmclMjB3ZWJzaXRlJTIwcHJvZHVjdHN8ZW58MHwwfHxncmVlbnwxNzU4Mzg4MzU5fDA&ixlib=rb-4.1.0&q=85',
      attribution: 'Tim Schmidbauer on Unsplash',
      photographerUrl: 'https://unsplash.com/@timschmidbauer',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'E-commerce',
      status: 'Completed'
    }
  ];

  const handleViewProject = (projectId) => {
    // Placeholder for project view functionality
    console.log(`Viewing project ${projectId}`);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className={`${styles.projectsGrid} ${isVisible ? styles.visible : ''}`}>
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${index === 1 ? styles.featured : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.projectImage}>
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.attribution}`}
                  width="400"
                  height="250"
                />
                <div className={styles.projectOverlay}>
                  <button 
                    onClick={() => handleViewProject(project.id)}
                    className={styles.viewButton}
                  >
                    View Project
                  </button>
                </div>
                <div className={styles.statusBadge}>
                  <span className={`${styles.status} ${project.status === 'Completed' ? styles.completed : styles.inProgress}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.category}>{project.category}</span>
                </div>
                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.projectActions}>
                  <button 
                    onClick={() => handleViewProject(project.id)}
                    className={styles.primaryAction}
                  >
                    View Project
                  </button>
                  <button className={styles.secondaryAction}>
                    <span className={styles.actionIcon}>🔗</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.moreProjects} ${isVisible ? styles.visible : ''}`}>
          <p className={styles.moreText}>
            Interested in seeing more of my work?
          </p>
          <button className={styles.moreButton}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;