import { useState, useEffect } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'adarsh.pandey@gmail.com',
      link: 'mailto:adarsh.pandey@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+977 9868821778',
      link: 'tel:+977 9868821778'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Kathmandu, Nepal',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/adarshpandey',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/adarshpandey',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/adarshpandey',
      color: '#1da1f2'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className={styles.content}>
          <div className={`${styles.contactInfo} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Let's Connect</h3>
              <p className={styles.infoDescription}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className={styles.contactDetails}>
                {contactInfo.map((info, index) => (
                  <div key={info.label} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{info.icon}</span>
                    <div className={styles.contactText}>
                      <span className={styles.contactLabel}>{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className={styles.contactValue}>
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.contactValue}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialLinks}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialGrid}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      style={{ '--social-color': social.color }}
                    >
                      <span className={styles.socialIcon}>{social.icon}</span>
                      <span className={styles.socialName}>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.contactForm} ${isVisible ? styles.visible : ''}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="What's this about?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className={styles.textarea}
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className={styles.sendIcon}>✈️</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;