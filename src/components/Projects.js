import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Clock, Database, Calendar, Shield } from 'lucide-react';
import '../styles/components/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'CarePulse',
      description: 'A comprehensive doctor appointment booking system that streamlines healthcare scheduling with modern web technologies and secure backend integration.',
      image: '/images/projects/carepulse-screenshot.jpg.png', // Updated to match your file extension
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Appwrite'],
      features: [
        'Doctor appointment scheduling',
        'Patient management system',
        'Real-time availability checking',
        'Secure data storage with Appwrite'
      ],
      stats: [
        { icon: Users, label: 'User-Friendly', value: 'UI/UX' },
        { icon: Calendar, label: 'Booking System', value: 'Real-time' },
        { icon: Shield, label: 'Data Security', value: 'Secure' }
      ],
      github: null, // No GitHub button for CarePulse
      live: 'https://carepluss.netlify.app',
      duration: 'College Project',
      type: 'Academic Project',
      featured: true
    },
    {
      title: 'SocialHub',
      description: 'A full-stack social media platform built with React.js, Redux, Node.js, Express.js, and MongoDB featuring real-time interactions and secure authentication.',
      image: '/images/projects/socialhub-screenshot.jpg.png', // Updated to match your file extension
      technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      features: [
        'Real-time social interactions',
        '20+ RESTful API endpoints',
        'Secure JWT authentication',
        'Responsive design with 95% uptime'
      ],
      stats: [
        { icon: Clock, label: 'Response Time', value: '2s avg' },
        { icon: Database, label: 'API Endpoints', value: '20+' },
        { icon: Shield, label: 'Uptime', value: '95%' }
      ],
      github: 'https://github.com/adityadav171/SocialHub',
      live: null, // No live demo for SocialHub
      duration: 'March 2024 - May 2024',
      type: 'Personal Project',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Featured Projects</h2>
          <p>Some of my recent work that showcase my skills and experience</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-section">
                    <h3>{project.title}</h3>
                    <div className="project-badges">
                      <span className="project-type">{project.type}</span>
                      {project.featured && <span className="featured-badge">Featured</span>}
                    </div>
                  </div>
                  <span className="project-duration">{project.duration}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-stats">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="stat-item">
                      <stat.icon size={16} />
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="more-projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>More projects coming soon! Currently working on exciting new ideas.</p>
          <motion.a
            href="https://github.com/adityadav171"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
